const VARIANT_CLASSES = {
  primary: "bg-purple-500 text-white",
  secondary: "bg-white text-black border border-gray-300",
};

export default function Button({
  variant = "primary",
  type = "button",
  onClick,
  children,
}) {
  return (
    <button
      type={type}
      className={`${VARIANT_CLASSES[variant]} p-2 rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
