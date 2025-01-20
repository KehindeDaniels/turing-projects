import React, { useState } from "react";

const FormRenderer = ({ fields, onSubmit }) => {
  const [formValues, setFormValues] = useState(() =>
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [errors, setErrors] = useState({});

  const validateField = (name, value, validation) => {
    if (validation?.required && !value) return `${name} is required`;
    if (validation?.minLength && value.length < validation.minLength)
      return `${name} must be at least ${validation.minLength} characters`;
    if (validation?.pattern && !new RegExp(validation.pattern).test(value))
      return `Invalid ${name}`;
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (fields.find((f) => f.name === name)?.validation) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(
          name,
          value,
          fields.find((f) => f.name === name).validation
        ),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    fields.forEach((field) => {
      const error = validateField(
        field.name,
        formValues[field.name],
        field.validation
      );
      if (error) newErrors[field.name] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit(formValues);
      setFormValues(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
      );
    }
  };

  const handleReset = () => {
    setFormValues(
      fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
    );
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field, idx) => (
        <div key={idx} className="flex flex-col">
          <label htmlFor={field.name} className="font-semibold">
            {field.label}
          </label>
          {field.type === "select" ? (
            <select
              name={field.name}
              id={field.name}
              value={formValues[field.name]}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              {field.options.map((option, i) => (
                <option key={i} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={formValues[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="border p-2 rounded"
            />
          )}
          {errors[field.name] && (
            <p className="text-red-500 text-sm">{errors[field.name]}</p>
          )}
        </div>
      ))}
      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default FormRenderer;
