// src/components/SurveyForm.js

import React, { useState } from "react";
import DynamicFormBuilder from "./DynamicFormBuilder";
import FormDirector from "./FormDirector";

const SurveyForm = () => {
  const [formConfig, setFormConfig] = useState([]);
  const builder = new DynamicFormBuilder();
  const director = new FormDirector(builder);

  const addQuestion = () => {
    setFormConfig([
      ...formConfig,
      { type: "question", label: "New Question", fields: [] },
    ]);
  };

  const addTextField = (index) => {
    const updatedForm = [...formConfig];
    updatedForm[index].fields.push({ type: "text", label: "New Text Field" });
    setFormConfig(updatedForm);
  };

  const addCheckbox = (index) => {
    const updatedForm = [...formConfig];
    updatedForm[index].fields.push({ type: "checkbox", label: "New Checkbox" });
    setFormConfig(updatedForm);
  };

  const addDatePicker = (index) => {
    const updatedForm = [...formConfig];
    updatedForm[index].fields.push({ type: "date", label: "New Date Picker" });
    setFormConfig(updatedForm);
  };

  const generateForm = () => {
    return director.constructForm(formConfig);
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Questionnaire Builder</h2>
      <div className="space-y-4">
        <button
          onClick={addQuestion}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Question
        </button>
      </div>
      <form className="mt-4 space-y-4">
        {generateForm().map((question, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-semibold">{question.label}</h3>
            {question.fields.map((field, fieldIndex) => (
              <div key={fieldIndex} className="flex flex-col">
                <label className="mb-1">{field.label}</label>
                {field.type === "text" && (
                  <input type="text" className="border rounded px-2 py-1" />
                )}
                {field.type === "checkbox" && (
                  <input type="checkbox" className="mr-1" />
                )}
                {field.type === "date" && (
                  <input type="date" className="border rounded px-2 py-1" />
                )}
                {/* Add UI for other field types as needed */}
              </div>
            ))}
            <div className="space-x-2">
              <button
                onClick={() => addTextField(index)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
              >
                Add Text Field
              </button>
              <button
                onClick={() => addCheckbox(index)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
              >
                Add Checkbox
              </button>
              <button
                onClick={() => addDatePicker(index)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
              >
                Add Date Picker
              </button>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default SurveyForm;
