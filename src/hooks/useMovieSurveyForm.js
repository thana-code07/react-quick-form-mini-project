import { useState } from "react";
import { validateMovieSurveyForm } from "../utils/validators";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  movie: "",
  comment: "",
};

const INITIAL_ERRORS = {
  name: "",
  email: "",
  movie: "",
};

export function useMovieSurveyForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    const { isValid, errors: nextErrors } = validateMovieSurveyForm(formData);
    setErrors(nextErrors);
    if (!isValid) {
      return;
    }
    setSubmitted(true);
  };

  const reset = () => {
    setFormData(INITIAL_FORM_DATA);
    setErrors(INITIAL_ERRORS);
    setSubmitted(false);
  };

  return {
    formData,
    errors,
    submitted,
    updateField,
    submit,
    reset,
  };
}
