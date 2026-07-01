import FieldLabel from "./FieldLabel";
import FormError, {
  fieldBorderClass,
  fieldFocusClass,
  inputBaseClass,
} from "./FormError";

export default function FormField({
  label,
  id,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  required = false,
}) {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className={`${inputBaseClass} ${fieldBorderClass(error)} ${fieldFocusClass(error)}`}
        placeholder={placeholder}
      />
      <FormError message={error} />
    </div>
  );
}
