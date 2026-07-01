import MovieSurveyForm from "./MovieSurveyForm";

export default function MovieSurvey() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="bg-purple-500 p-2 rounded-md">
        <h2 className="text-2xl font-bold text-white">Movie Survey</h2>
      </div>
      <MovieSurveyForm />
    </section>
  );
}
