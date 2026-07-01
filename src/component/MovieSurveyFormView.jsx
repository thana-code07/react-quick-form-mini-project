import Button from "./ui/Button";
import FormField from "./ui/FormField";
import TextAreaField from "./ui/TextAreaField";
import MovieRadioGroup from "./ui/MovieRadioGroup";
import { ResetIcon, SendIcon } from "./ui/icons";

export default function MovieSurveyFormView({
  data,
  errors,
  onFieldChange,
  onSubmit,
  onReset,
}) {
  const { name, email, movie, comment } = data;
  const { name: nameError, email: emailError, movie: movieError } = errors;

  return (
    <form
      className="flex w-full flex-col items-start gap-5"
      onSubmit={onSubmit}
    >
      <FormField
        label="ชื่อ"
        id="name"
        value={name}
        onChange={(e) => onFieldChange("name", e.target.value)}
        error={nameError}
        placeholder="กรุณากรอกชื่อของคุณ"
        required
      />
      <FormField
        label="อีเมล"
        id="email"
        type="email"
        value={email}
        onChange={(e) => onFieldChange("email", e.target.value)}
        error={emailError}
        placeholder="example@example.com"
        required
      />
      <MovieRadioGroup
        value={movie}
        onChange={(e) => onFieldChange("movie", e.target.value)}
        error={movieError}
      />
      <TextAreaField
        label="ความคิดเห็นเกี่ยวกับหนัง"
        id="comment"
        value={comment}
        onChange={(e) => onFieldChange("comment", e.target.value)}
        placeholder="กรุณากรอกความคิดเห็นของคุณ"
      />
      <div className="mt-2 flex w-full justify-between border-t border-survey-border pt-4">
        <Button
          variant="secondary"
          type="button"
          icon={<ResetIcon />}
          onClick={onReset}
        >
          รีเซ็ต
        </Button>
        <Button variant="primary" type="submit" icon={<SendIcon />}>
          ส่งแบบสำรวจ
        </Button>
      </div>
    </form>
  );
}
