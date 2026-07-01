import Button from "./ui/Button";

export default function MovieSurveySuccessView({ data, onReset }) {
  const { name, email, movie, comment } = data;

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
      <Button variant="primary" type="button" onClick={onReset}>
        ทำแบบสำรวจใหม่
      </Button>
    </>
  );
}
