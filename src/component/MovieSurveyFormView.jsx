import Button from "./ui/Button";
import FormField from "./ui/FormField";
import TextAreaField from "./ui/TextAreaField";
import MovieRadioGroup from "./ui/MovieRadioGroup";

export default function MovieSurveyFormView({
  data,
  errors,
  onFieldChange,
  onSubmit,
  onReset,
}) {
  const { name, email, movie, comment } = data;
  const { name: nameError, email: emailError, movie: movieError } = errors;

  return (
    <form
      className="flex flex-col gap-6 items-start w-full max-w-md"
      onSubmit={onSubmit}
    >
      <FormField
        label="ชื่อ"
        id="name"
        value={name}
        onChange={(e) => onFieldChange("name", e.target.value)}
        error={nameError}
        placeholder="กรุณากรอกชื่อของคุณ"
      />
      <FormField
        label="อีเมล"
        id="email"
        type="email"
        value={email}
        onChange={(e) => onFieldChange("email", e.target.value)}
        error={emailError}
        placeholder="example@example.com"
      />
      <MovieRadioGroup
        value={movie}
        onChange={(e) => onFieldChange("movie", e.target.value)}
        error={movieError}
      />
      <TextAreaField
        label="ความคิดเห็นเกี่ยวกับหนัง"
        id="comment"
        value={comment}
        onChange={(e) => onFieldChange("comment", e.target.value)}
        placeholder="กรุณากรอกความคิดเห็นของคุณ"
      />
      <div className="flex justify-between w-full">
        <Button variant="secondary" type="button" onClick={onReset}>
          reset
        </Button>
        <Button variant="primary" type="submit">
          ส่งแบบสำรวจ
        </Button>
      </div>
    </form>
  );
}
