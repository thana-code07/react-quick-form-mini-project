import RadioButton from "./ui/RadioButton";
import { movies } from "../constants/movieInfo";
import SubmitButton from "./ui/SubmitButton";
import ResetButton from "./ui/ResetButton";
import { useState } from "react";
import MovieSurveySubmitted from "./MovieSurveySubmitted";

export default function MovieSurveyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movie, setMovie] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [movieError, setMovieError] = useState("");

  const emailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validation = () => {
    let isValid = true;
    let nextNameError = "";
    let nextEmailError = "";
    let nextMovieError = "";
    if (name === "") {
      nextNameError = "โปรดใส่ชื่อของคุณ";
      isValid = false;
    }
    if (email === "") {
      nextEmailError = "โปรดใส่อีเมลของคุณ";
      isValid = false;
    } else if (!emailValidation(email)) {
      nextEmailError = "รูปแบบอีเมลไม่ถูกต้อง";
      isValid = false;
    }
    if (movie === "") {
      nextMovieError = "โปรดเลือกหนังที่คุณชอบ";
      isValid = false;
    }
    setNameError(nextNameError);
    setEmailError(nextEmailError);
    setMovieError(nextMovieError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validation()) {
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setMovie("");
    setComment("");
    setNameError("");
    setEmailError("");
    setMovieError("");
  };

  return (
    <>
      {!submitted ? (
        <form
          className="flex flex-col gap-6 items-start w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start gap-2 w-full">
            <label htmlFor="name">ชื่อ</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-2 border ${nameError ? "border-red-500" : "border-gray-300"} rounded-md`}
              placeholder="กรุณากรอกชื่อของคุณ"
            />
            {nameError && <p className="text-red-500">{nameError}</p>}
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <label htmlFor="email">อีเมล</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 border ${emailError ? "border-red-500" : "border-gray-300"} rounded-md`}
              placeholder="example@example.com"
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <p>เลือกหนังที่คุณชอบ</p>
            <div
              className={`flex flex-col items-start gap-2 w-full ${movieError ? "border-red-500" : "border-gray-300"} rounded-md`}
            >
              {movies.map((movieOption) => (
                <RadioButton
                  key={movieOption.title}
                  {...movieOption}
                  value={movie}
                  onChange={(e) => setMovie(e.target.value)}
                />
              ))}
            </div>
            {movieError && <p className="text-red-500">{movieError}</p>}
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <p>ความคิดเห็นเกี่ยวกับหนัง</p>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="กรุณากรอกความคิดเห็นของคุณ"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="flex justify-between w-full">
            <ResetButton onClick={handleReset} />
            <SubmitButton onClick={handleSubmit} />
          </div>
        </form>
      ) : (
        <MovieSurveySubmitted
          name={name}
          email={email}
          movie={movie}
          comment={comment}
          onClick={handleReset}
        />
      )}
    </>
  );
}
