// formBuilder.js
class FormBuilder {
  constructor() {
    this.formFields = [];
  }

  addTextField(label, name, placeholder, validationPattern, errorMessage) {
    this.formFields.push({
      type: "text",
      label,
      name,
      placeholder,
      validationPattern,
      errorMessage,
    });
    return this;
  }

  addEmailField(label, name, placeholder, validationPattern, errorMessage) {
    this.formFields.push({
      type: "email",
      label,
      name,
      placeholder,
      validationPattern,
      errorMessage,
    });
    return this;
  }

  addPasswordField(label, name, placeholder, validationPattern, errorMessage) {
    this.formFields.push({
      type: "password",
      label,
      name,
      placeholder,
      validationPattern,
      errorMessage,
    });
    return this;
  }

  addCheckboxField(label, name, options) {
    this.formFields.push({
      type: "checkbox",
      label,
      name,
      options,
    });
    return this;
  }

  addRadioButtonField(label, name, options) {
    this.formFields.push({
      type: "radio",
      label,
      name,
      options,
    });
    return this;
  }

  addSelectField(label, name, options) {
    this.formFields.push({
      type: "select",
      label,
      name,
      options,
    });
    return this;
  }

  addDateField(label, name, placeholder) {
    this.formFields.push({
      type: "date",
      label,
      name,
      placeholder,
    });
    return this;
  }

  addFileField(label, name, placeholder) {
    this.formFields.push({
      type: "file",
      label,
      name,
      placeholder,
    });
    return this;
  }

  getFormFields() {
    return this.formFields;
  }
}

export default FormBuilder;
