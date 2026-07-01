export default function MovieSurveySubmitted(props) {
  const { name, email, movie, comment, onClick } = props;
  return (
    <>
      <div>
        <h2>ส่งแบบสำรวจสำเร็จ</h2>
        <div>
          <p>ชื่อ: {name}</p>
          <p>อีเมล: {email}</p>
          <p>หนังที่คุณชอบ: {movie}</p>
        </div>
        <div>
          <p>ความคิดเห็น: {comment}</p>
        </div>
      </div>
      <button
        type="button"
        className="bg-purple-500 text-white p-2 rounded-md"
        onClick={onClick}
      >
        ทำแบบสำรวจใหม่
      </button>
    </>
  );
}
