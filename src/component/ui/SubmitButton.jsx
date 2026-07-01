export default function SubmitButton(props) {
  const { onClick } = props;
  return (
    <>
      <button type="submit" className="bg-purple-500 text-white p-2 rounded-md">
        ส่งแบบสำรวจ
      </button>
    </>
  );
}
