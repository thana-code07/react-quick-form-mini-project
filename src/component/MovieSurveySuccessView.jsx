import Button from "./ui/Button";
import { CheckIcon, ResetIcon } from "./ui/icons";

function SuccessRow({ label, value, valueClassName = "text-survey-text-primary" }) {
  return (
    <>
      <dt className="text-survey-text-secondary">{label}</dt>
      <dd className={valueClassName}>{value}</dd>
    </>
  );
}

export default function MovieSurveySuccessView({ data, onReset }) {
  const { name, email, movie, comment } = data;

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="rounded-survey-input border border-survey-success-border bg-survey-success-bg p-5">
        <div className="mb-4 flex items-center gap-2 font-bold text-survey-success-text">
          <CheckIcon />
          ส่งแบบสำรวจสำเร็จ!
        </div>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
          <SuccessRow label="ชื่อ:" value={name} />
          <SuccessRow label="อีเมล:" value={email} />
          <SuccessRow
            label="หนังที่เลือก:"
            value={movie}
            valueClassName="font-medium text-survey-accent-purple"
          />
          {comment && (
            <SuccessRow label="ความคิดเห็น:" value={comment} />
          )}
        </dl>
      </div>
      <Button
        variant="dark"
        type="button"
        className="w-full"
        icon={<ResetIcon />}
        onClick={onReset}
      >
        ทำแบบสำรวจใหม่
      </Button>
    </div>
  );
}
