import { VALIDATION_MESSAGES } from "../constants/validationMessages";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email) {
  return EMAIL_REGEX.test(email);
}

export function validateMovieSurveyForm({ name, email, movie }) {
  const errors = {
    name: "",
    email: "",
    movie: "",
  };

  if (name === "") {
    errors.name = VALIDATION_MESSAGES.nameRequired;
  }

  if (email === "") {
    errors.email = VALIDATION_MESSAGES.emailRequired;
  } else if (!validateEmail(email)) {
    errors.email = VALIDATION_MESSAGES.emailInvalid;
  }

  if (movie === "") {
    errors.movie = VALIDATION_MESSAGES.movieRequired;
  }

  const isValid = !errors.name && !errors.email && !errors.movie;

  return { isValid, errors };
}
