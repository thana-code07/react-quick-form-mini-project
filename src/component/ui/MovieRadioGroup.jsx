import { movies } from "../../constants/movieInfo";
import FieldLabel from "./FieldLabel";
import RadioButton from "./RadioButton";
import FormError, { fieldBorderClass } from "./FormError";

export default function MovieRadioGroup({ value, onChange, error }) {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <FieldLabel required>เลือกหนังที่คุณชอบ</FieldLabel>
      <div
        className={`flex w-full flex-col gap-1 rounded-survey-input border p-3 ${fieldBorderClass(error)}`}
      >
        {movies.map((movie) => (
          <RadioButton
            key={movie.title}
            id={movie.title}
            name="movie"
            value={movie.title}
            title={movie.title}
            year={movie.year}
            director={movie.director}
            checked={value === movie.title}
            onChange={onChange}
          />
        ))}
      </div>
      <FormError message={error} />
    </div>
  );
}
