export default function RadioButton({
  id,
  name,
  value,
  label,
  checked,
  onChange,
}) {
  return (
    <label htmlFor={id} className="flex items-center gap-2">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      {label}
    </label>
  );
}
