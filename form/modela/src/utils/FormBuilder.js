export class FormBuilder {
  constructor() {
    this.fields = [];
  }

  addField(type, config) {
    this.fields.push({ type, ...config });
    return this;
  }

  build() {
    return this.fields;
  }
}
