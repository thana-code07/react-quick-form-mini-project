export const inputBaseClass =
  "w-full rounded-survey-input border px-3 py-2.5 placeholder:text-survey-text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1";

export function fieldBorderClass(error) {
  return error ? "border-survey-border-error" : "border-survey-border";
}

export function fieldFocusClass(error) {
  return error
    ? "focus-visible:ring-red-300/60"
    : "focus-visible:ring-purple-300/60";
}

export default function FormError({ message }) {
  if (!message) {
    return null;
  }

  return <p className="text-sm text-survey-error">{message}</p>;
}
