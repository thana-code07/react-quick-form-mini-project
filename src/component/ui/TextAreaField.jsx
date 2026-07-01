import FieldLabel from "./FieldLabel";
import FormError, {
  fieldBorderClass,
  fieldFocusClass,
  inputBaseClass,
} from "./FormError";

export default function TextAreaField({
  label,
  id,
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
      <textarea
        id={id}
        className={`${inputBaseClass} min-h-[100px] resize-y ${fieldBorderClass(error)} ${fieldFocusClass(error)}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <FormError message={error} />
    </div>
  );
}
