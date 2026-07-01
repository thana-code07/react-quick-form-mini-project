import MovieSurveyFormView from "./MovieSurveyFormView";
import MovieSurveySuccessView from "./MovieSurveySuccessView";
import { useMovieSurveyForm } from "../hooks/useMovieSurveyForm";

export default function MovieSurveyForm() {
  const { formData, errors, submitted, updateField, submit, reset } =
    useMovieSurveyForm();

  if (submitted) {
    return <MovieSurveySuccessView data={formData} onReset={reset} />;
  }

  return (
    <MovieSurveyFormView
      data={formData}
      errors={errors}
      onFieldChange={updateField}
      onSubmit={submit}
      onReset={reset}
    />
  );
}
