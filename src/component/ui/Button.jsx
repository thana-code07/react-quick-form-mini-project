const VARIANT_CLASSES = {
  primary:
    "bg-survey-gradient-end text-white hover:bg-[#5e35b1]",
  secondary:
    "border border-survey-border bg-white text-survey-text-primary hover:bg-gray-50",
  dark: "bg-survey-btn-dark text-white hover:bg-black",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-survey-input px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2";

export default function Button({
  variant = "primary",
  type = "button",
  onClick,
  icon,
  className = "",
  children,
}) {
  return (
    <button
      type={type}
      className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}
