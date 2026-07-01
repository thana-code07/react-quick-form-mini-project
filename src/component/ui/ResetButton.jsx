export default function ResetButton(props) {
  const { onClick } = props;
  return (
    <>
      <button
        type="button"
        className="bg-white text-black p-2 rounded-md border border-gray-300"
        onClick={onClick}
      >
        reset
      </button>
    </>
  );
}
