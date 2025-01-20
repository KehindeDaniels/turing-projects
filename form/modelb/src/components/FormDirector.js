// src/components/FormDirector.js

export default class FormDirector {
  constructor(builder) {
    this.builder = builder;
  }

  constructForm(config) {
    config.forEach((item) => {
      switch (item.type) {
        case "question":
          this.builder.addQuestion(item.label);
          item.fields.forEach((field) => {
            switch (field.type) {
              case "text":
                this.builder.addTextField(field.label);
                break;
              case "checkbox":
                this.builder.addCheckbox(field.label);
                break;
              case "date":
                this.builder.addDatePicker(field.label);
                break;
              // Add cases for other field types as needed
              default:
                throw new Error(`Unsupported field type: ${field.type}`);
            }
          });
          break;
        default:
          throw new Error(`Unsupported item type: ${item.type}`);
      }
    });

    return this.builder.getForm();
  }
}
