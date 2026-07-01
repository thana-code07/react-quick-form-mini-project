function FilmIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6 shrink-0"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
      <line x1="7" y1="2" x2="7" y2="22" />
      <line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="2" y1="7" x2="7" y2="7" />
      <line x1="2" y1="17" x2="7" y2="17" />
      <line x1="17" y1="7" x2="22" y2="7" />
      <line x1="17" y1="17" x2="22" y2="17" />
    </svg>
  );
}

export default function SurveyCard({ children }) {
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-survey-card bg-survey-card shadow-survey-card">
      <header className="flex items-center gap-3 bg-gradient-to-r from-survey-gradient-start to-survey-gradient-end px-6 py-4 text-white">
        <FilmIcon />
        <h2 className="m-0 text-xl font-bold leading-tight">Movie Survey</h2>
      </header>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}
