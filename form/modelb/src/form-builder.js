// form-builder.js
class FormBuilder {
  constructor() {
    this.fields = [];
  }

  addTextfield(label, name, placeholder, validation) {
    this.fields.push({
      type: "text",
      label,
      name,
      placeholder,
      validation,
    });
    return this;
  }

  addEmailField(label, name, placeholder, validation) {
    this.fields.push({
      type: "email",
      label,
      name,
      placeholder,
      validation,
    });
    return this;
  }

  addPasswordField(label, name, placeholder, validation) {
    this.fields.push({
      type: "password",
      label,
      name,
      placeholder,
      validation,
    });
    return this;
  }

  addCheckboxField(label, name, options) {
    this.fields.push({
      type: "checkbox",
      label,
      name,
      options,
    });
    return this;
  }

  addRadioField(label, name, options) {
    this.fields.push({
      type: "radio",
      label,
      name,
      options,
    });
    return this;
  }

  addSelectField(label, name, options) {
    this.fields.push({
      type: "select",
      label,
      name,
      options,
    });
    return this;
  }

  addDateField(label, name) {
    this.fields.push({
      type: "date",
      label,
      name,
    });
    return this;
  }

  addFileField(label, name) {
    this.fields.push({
      type: "file",
      label,
      name,
    });
    return this;
  }

  build() {
    return this.fields;
  }
}

export default FormBuilder;
