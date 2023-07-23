type FieldOption = {
  value: string;
  label: string;
};

export type FormField = {
  name: string;
  type: string;
  label: string;
  options?: FieldOption[];
};

export type FormProps = {
  initialValues: object;
  schema: any;
  fields: FormField[];
  onSubmit: (values: object) => void;
};
