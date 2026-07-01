import FormError, { errorBorderClass } from "./FormError";

export default function FormField({
  label,
  id,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
}) {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border ${errorBorderClass(error)} rounded-md`}
        placeholder={placeholder}
      />
      <FormError message={error} />
    </div>
  );
}
