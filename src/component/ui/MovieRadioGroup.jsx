import { movies } from "../../constants/movieInfo";
import RadioButton from "./RadioButton";
import FormError, { errorBorderClass } from "./FormError";

function formatMovieLabel({ title, year, director }) {
  return `${title}(${year}) Director: ${director}`;
}

export default function MovieRadioGroup({ value, onChange, error }) {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <p>เลือกหนังที่คุณชอบ</p>
      <div
        className={`flex flex-col items-start gap-2 w-full ${errorBorderClass(error)} rounded-md`}
      >
        {movies.map((movie) => (
          <RadioButton
            key={movie.title}
            id={movie.title}
            name="movie"
            value={movie.title}
            label={formatMovieLabel(movie)}
            checked={value === movie.title}
            onChange={onChange}
          />
        ))}
      </div>
      <FormError message={error} />
    </div>
  );
}
