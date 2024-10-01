import React from "react";
import { useFormState } from "../hooks/useFormState";
import { useToggle } from "../hooks/useToggle";

const FormComponent = () => {
  // Use custom hooks for form handling and toggling
  const { formState, handleChange, resetForm } = useFormState({
    name: "",
    email: "",
  });

  const [isSubmitted, toggleSubmitted] = useToggle(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit action (e.g., API call)
    console.log(formState);
    toggleSubmitted();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>

      {isSubmitted && <p>Form Submitted Successfully!</p>}
    </div>
  );
};

export default FormComponent;
