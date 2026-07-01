import MovieSurveyForm from "./MovieSurveyForm";
import SurveyCard from "./ui/SurveyCard";

export default function MovieSurvey() {
  return (
    <section className="flex min-h-svh items-center justify-center bg-survey-page px-4 py-6 sm:py-10">
      <SurveyCard>
        <MovieSurveyForm />
      </SurveyCard>
    </section>
  );
}
