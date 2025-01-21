// form.js
import React, { useState } from "react";

const Form = ({ fields, onSubmit }) => {
  const [formValues, setFormValues] = useState(() => {
    const initialValues = {};
    fields.forEach((field) => {
      if (field.type === "checkbox") {
        initialValues[field.name] = [];
      } else {
        initialValues[field.name] = "";
      }
    });
    return initialValues;
  });
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
        let errorMessage = "";
        switch (field.name) {
          case "username":
            errorMessage = "Username should only contain letters and numbers.";
            break;
          case "email":
            errorMessage = "Please enter a valid email address.";
            break;
          case "password":
            errorMessage =
              "Password should be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
            break;
          default:
            errorMessage = `${field.label} is invalid.`;
        }
        setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
      }
    } else if (field.type !== "checkbox" && !value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${field.label} is required.`,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;
    fields.forEach((field) => {
      const value = formValues[field.name];
      if (field.type !== "checkbox" && !value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field.name]: `${field.label} is required.`,
        }));
        hasErrors = true;
      } else if (field.validation) {
        const regex = new RegExp(field.validation);
        if (!regex.test(value)) {
          let errorMessage = "";
          switch (field.name) {
            case "username":
              errorMessage =
                "Username should only contain letters and numbers.";
              break;
            case "email":
              errorMessage = "Please enter a valid email address.";
              break;
            case "password":
              errorMessage =
                "Password should be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
              break;
            default:
              errorMessage = `${field.label} is invalid.`;
          }
          setErrors((prevErrors) => ({
            ...prevErrors,
            [field.name]: errorMessage,
          }));
          hasErrors = true;
        }
      }
    });
    if (!hasErrors) {
      onSubmit(formValues);
      setFormValues(() => {
        const initialValues = {};
        fields.forEach((field) => {
          if (field.type === "checkbox") {
            initialValues[field.name] = [];
          } else {
            initialValues[field.name] = "";
          }
        });
        return initialValues;
      });
    }
  };

  const handleReset = () => {
    setFormValues(() => {
      const initialValues = {};
      fields.forEach((field) => {
        if (field.type === "checkbox") {
          initialValues[field.name] = [];
        } else {
          initialValues[field.name] = "";
        }
      });
      return initialValues;
    });
    setErrors({});
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    const values = formValues[name] || [];
    if (e.target.checked) {
      values.push(value);
    } else {
      values.splice(values.indexOf(value), 1);
    }
    setFormValues((prevValues) => ({ ...prevValues, [name]: values }));
    validateField(name, values);
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
                    checked={(formValues[field.name] || []).includes(
                      option.value
                    )}
                    onChange={handleCheckboxChange}
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
                      validateField(field.name, e.target.value);
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
              onChange={(e) => {
                setFormValues((prevValues) => ({
                  ...prevValues,
                  [field.name]: e.target.value,
                }));
                validateField(field.name, e.target.value);
              }}
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
              onChange={(e) => {
                setFormValues((prevValues) => ({
                  ...prevValues,
                  [field.name]: e.target.value,
                }));
                validateField(field.name, e.target.value);
              }}
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
