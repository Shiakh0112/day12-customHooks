import { useState } from "react";

// Custom hook for managing form state
export const useFormState = (initialValues) => {
  const [formState, setFormState] = useState(initialValues);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Reset form state
  const resetForm = () => {
    setFormState(initialValues);
  };

  return { formState, handleChange, resetForm };
};
