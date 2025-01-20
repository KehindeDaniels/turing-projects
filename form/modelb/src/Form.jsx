// form.js
import React, { useState } from "react";

const Form = ({ fields, onSubmit }) => {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const field = fields.find((field) => field.name === name);
    if (field.validation) {
      const regex = new RegExp(field.validation);
      if (!regex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: field.label + " is invalid",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  const handleReset = () => {
    setFormValues({});
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block font-semibold mb-1">
            {field.label}
          </label>
          {field.type === "text" ||
          field.type === "email" ||
          field.type === "password" ? (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formValues[field.name] || ""}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="border border-gray-300 rounded w-full p-2"
            />
          ) : field.type === "checkbox" ? (
            <div>
              {field.options.map((option) => (
                <div key={option.value}>
                  <input
                    type="checkbox"
                    id={option.value}
                    name={field.name}
                    value={option.value}
                    checked={
                      formValues[field.name] &&
                      formValues[field.name].includes(option.value)
                    }
                    onChange={(e) => {
                      const values = formValues[field.name] || [];
                      if (e.target.checked) {
                        values.push(option.value);
                      } else {
                        values.splice(values.indexOf(option.value), 1);
                      }
                      setFormValues((prevValues) => ({
                        ...prevValues,
                        [field.name]: values,
                      }));
                    }}
                  />
                  <label htmlFor={option.value} className="ml-2">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          ) : field.type === "radio" ? (
            <div>
              {field.options.map((option) => (
                <div key={option.value}>
                  <input
                    type="radio"
                    id={option.value}
                    name={field.name}
                    value={option.value}
                    checked={formValues[field.name] === option.value}
                    onChange={(e) => {
                      setFormValues((prevValues) => ({
                        ...prevValues,
                        [field.name]: e.target.value,
                      }));
                    }}
                  />
                  <label htmlFor={option.value} className="ml-2">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          ) : field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              value={formValues[field.name] || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2"
            >
              <option value="">Select {field.label}</option>
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === "date" ? (
            <input
              type="date"
              id={field.name}
              name={field.name}
              value={formValues[field.name] || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2"
            />
          ) : field.type === "file" ? (
            <input
              type="file"
              id={field.name}
              name={field.name}
              onChange={(e) => {
                setFormValues((prevValues) => ({
                  ...prevValues,
                  [field.name]: e.target.files[0],
                }));
              }}
              className="border border-gray-300 rounded w-full p-2"
            />
          ) : null}
          {errors[field.name] && (
            <div className="text-red-500">{errors[field.name]}</div>
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
        className="bg-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-400 ml-2"
        onClick={handleReset}
      >
        Reset
      </button>
    </form>
  );
};

export default Form;
