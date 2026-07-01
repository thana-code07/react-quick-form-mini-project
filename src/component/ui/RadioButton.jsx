export default function RadioButton({
  id,
  name,
  value,
  title,
  year,
  director,
  checked,
  onChange,
}) {
  return (
    <label
      htmlFor={id}
      className="flex w-full cursor-pointer items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50 focus-within:bg-purple-50"
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        className="mt-1 size-4 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/60"
      />
      <div className="flex flex-col gap-0.5">
        <span className="font-semibold text-survey-text-primary">
          {title} ({year})
        </span>
        <span className="text-sm text-survey-text-secondary">
          Director: {director}
        </span>
      </div>
    </label>
  );
}
