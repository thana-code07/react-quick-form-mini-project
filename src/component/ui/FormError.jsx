export function errorBorderClass(error) {
  return error ? "border-red-500" : "border-gray-300";
}

export default function FormError({ message }) {
  if (!message) {
    return null;
  }

  return <p className="text-red-500">{message}</p>;
}
