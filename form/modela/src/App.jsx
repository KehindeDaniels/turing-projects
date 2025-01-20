import React from "react";
import { FormBuilder } from "./utils/FormBuilder";
import FormRenderer from "./components/FormRenderer";

const App = () => {
  const largeFormConfig = [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      validation: { required: true },
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      validation: { required: true },
    },
    {
      type: "email",
      name: "email",
      label: "Email",
      validation: { required: true },
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      validation: { required: true },
    },
    {
      type: "checkbox",
      name: "agree",
      label: "I agree to the terms",
      validation: { required: true },
    },
  ];

  const handleSubmit = (formData) => {
    console.log("Form Data:", formData);
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dynamic Form Generator</h1>
      <FormRenderer fields={largeFormConfig} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
