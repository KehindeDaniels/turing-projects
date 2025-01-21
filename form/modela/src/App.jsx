// App.js
import React, { useState } from "react";
import FormBuilder from "./formBuilder";

const App = () => {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const formFields = new FormBuilder()
    .addTextField(
      "Username",
      "username",
      "Enter your username",
      /^[a-zA-Z0-9]{3,}$/,
      "Username should be at least 3 characters long and contain only letters and numbers"
    )
    .addEmailField(
      "Email",
      "email",
      "Enter your email",
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    )
    .addPasswordField(
      "Password",
      "password",
      "Enter your password",
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .addSelectField("Gender", "gender", [
      { value: "", label: "Select Gender" },
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ])
    .addCheckboxField("Hobbies", "hobbies", [
      { value: "reading", label: "Reading" },
      { value: "writing", label: "Writing" },
      { value: "coding", label: "Coding" },
    ])
    .addDateField("Date of Birth", "dob", "Enter your date of birth")
    .getFormFields();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const field = formFields.find((field) => field.name === name);
    if (field.validationPattern) {
      if (field.validationPattern.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: field.errorMessage,
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (Object.values(errors).every((error) => error === null)) {
      console.log("Form submitted successfully!", formValues);
    } else {
      console.log("Form has errors", errors);
    }
  };

  const handleReset = () => {
    setFormValues({});
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Create an Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {formFields.map((field, index) => (
          <div key={index}>
            <label htmlFor={field.name} className="block font-semibold mb-1">
              {field.label}
            </label>
            {field.type === "text" ||
            field.type === "email" ||
            field.type === "password" ? (
              <input
                type={field.type}
                id={field.name}
                value={formValues[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={`border border-gray-300 rounded w-full p-2 ${
                  errors[field.name] ? "border-red-500" : ""
                }`}
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                value={formValues[field.name] || ""}
                onChange={handleChange}
                className={`border border-gray-300 rounded w-full p-2 ${
                  errors[field.name] ? "border-red-500" : ""
                }`}
              >
                {field.options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "date" ? (
              <input
                type={field.type}
                id={field.name}
                value={formValues[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={`border border-gray-300 rounded w-full p-2 ${
                  errors[field.name] ? "border-red-500" : ""
                }`}
              />
            ) : field.type === "file" ? (
              <input
                type={field.type}
                id={field.name}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={`border border-gray-300 rounded w-full p-2 ${
                  errors[field.name] ? "border-red-500" : ""
                }`}
              />
            ) : field.type === "checkbox" ? (
              <div>
                {field.options.map((option, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={option.value}
                      value={option.value}
                      onChange={handleChange}
                      className={`mr-2`}
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                  </div>
                ))}
              </div>
            ) : field.type === "radio" ? (
              <div>
                {field.options.map((option, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={option.value}
                      value={option.value}
                      onChange={handleChange}
                      className={`mr-2`}
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                  </div>
                ))}
              </div>
            ) : null}
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="bg-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-400 ml-2"
        >
          Reset
        </button>
      </form>

      {submitted && (
        <p className="text-green-500 text-center mt-4">
          Form submitted successfully!
        </p>
      )}
    </div>
  );
};

export default App;
