// FormBuilder.js
class FormBuilder {
  constructor() {
    this.fields = [];
  }

  addTextField(name, label, placeholder = "", value = "") {
    this.fields.push({
      type: "text",
      name,
      label,
      placeholder,
      value,
    });
    return this;
  }

  addEmailField(name, label, placeholder = "", value = "") {
    this.fields.push({
      type: "email",
      name,
      label,
      placeholder,
      value,
    });
    return this;
  }

  addPasswordField(name, label, placeholder = "", value = "") {
    this.fields.push({
      type: "password",
      name,
      label,
      placeholder,
      value,
    });
    return this;
  }

  addSelectField(name, label, options = [], value = "") {
    this.fields.push({
      type: "select",
      name,
      label,
      options,
      value,
    });
    return this;
  }

  addCheckboxField(name, label, value = false) {
    this.fields.push({
      type: "checkbox",
      name,
      label,
      value,
    });
    return this;
  }

  build() {
    return this.fields;
  }
}

export default FormBuilder;
