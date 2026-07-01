import FormError, { errorBorderClass } from "./FormError";

export default function TextAreaField({
  label,
  id,
  value,
  onChange,
  error,
  placeholder,
}) {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        className={`w-full p-2 border ${errorBorderClass(error)} rounded-md`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <FormError message={error} />
    </div>
  );
}
