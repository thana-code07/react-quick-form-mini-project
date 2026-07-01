export default function FieldLabel({ htmlFor, children, required = false }) {
  const className = "font-semibold text-survey-text-primary";
  const content = (
    <>
      {children}
      {required && <span className="text-survey-error">*</span>}
    </>
  );

  if (htmlFor) {
    return (
      <label htmlFor={htmlFor} className={className}>
        {content}
      </label>
    );
  }

  return <p className={className}>{content}</p>;
}
