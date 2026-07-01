export default function RadioButton(props) {
  const { title, year, director, onChange, value } = props;
  return (
    <>
      <label htmlFor={title} className="flex items-center gap-2">
        <input
          type="radio"
          id={title}
          name="movie"
          value={title}
          onChange={onChange}
          checked={value === title}
        />
        {title}({year}) Director: {director}
      </label>
    </>
  );
}
