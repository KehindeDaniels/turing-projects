// app.js
import React, { useState } from "react";
import FormBuilder from "./form-builder";
import Form from "./form";

const App = () => {
  const [submitted, setSubmitted] = useState(false);

  const formBuilder = new FormBuilder();
  const fields = formBuilder
    .addTextfield("Username", "username", "Enter username", "^[a-zA-Z0-9]+$")
    .addEmailField(
      "Email",
      "email",
      "Enter email",
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
    )
    .addPasswordField(
      "Password",
      "password",
      "Enter password",
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$"
    )
    .addCheckboxField("Hobbies", "hobbies", [
      { value: "reading", label: "Reading" },
      { value: "writing", label: "Writing" },
      { value: "coding", label: "Coding" },
    ])
    .addRadioField("Gender", "gender", [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ])
    .addSelectField("Country", "country", [
      { value: "usa", label: "USA" },
      { value: "canada", label: "Canada" },
      { value: "mexico", label: "Mexico" },
    ])
    .addDateField("Birthday", "birthday")
    .addFileField("Profile Picture", "profilePicture")
    .build();

  const handleSubmit = (values) => {
    console.log(values);
    setSubmitted(true);
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Create an Account</h1>
      <Form fields={fields} onSubmit={handleSubmit} />
      {submitted && (
        <p className="text-green-500 text-center mt-4">
          Form submitted successfully!
        </p>
      )}
    </div>
  );
};

export default App;
