import { FormProps } from '@src/types/Forms/Forms';
import { styleInput } from '@styles/Form';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const Forms = ({ initialValues, schema, fields, onSubmit }: FormProps) => {
  return (
    <div className="relative">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        <Form className="flex flex-col gap-3">
          {fields.map((field, index) => (
            <div className="grid grid-cols-12 items-center" key={index}>
              <div className="col-span-4">
                <label htmlFor={field.name} className={styleInput.label}>
                  {field.label}
                </label>
              </div>
              <div className="col-span-8">
                {field.type === 'text' && (
                  <Field
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    className={styleInput.default}
                  />
                )}

                {field.type === 'number' && (
                  <Field
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    className={styleInput.default}
                  />
                )}

                {field.type === 'date' && (
                  <Field
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    className={styleInput.default}
                  />
                )}

                {field.type === 'select' && (
                  <Field
                    as={field.type}
                    name={field.name}
                    id={field.name}
                    defaultValue=""
                    className={styleInput.default}
                  >
                    <option value="">--Select--</option>
                    {field.options?.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                )}
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className={styleInput.error}
                />
              </div>
            </div>
          ))}

          <div className="w-full flex justify-start">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Forms;
