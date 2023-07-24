import React from 'react';

// components
import FormHead from '@components/UI/FormHead';
import Page from '@src/container/Page';
import { styleInput } from '@styles/Form';

// form components
import axios from '@axios/axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';

const fields = [
  {
    name: 'blockID',
    label: 'Block ID',
    type: 'number',
  },
  {
    name: 'prisonID',
    label: 'Prison ID',
    type: 'number',
  },
  {
    name: 'blockName',
    label: 'Block Name',
    type: 'text',
  },
  {
    name: 'capacity',
    label: 'Capacity',
    type: 'number',
  },
];

const initialValues = {
  blockID: '',
  prisonID: '',
  blockName: '',
  capacity: '',
};

const schema = Yup.object().shape({
  blockID: Yup.number().required('Required'),
  prisonID: Yup.number().required('Required'),
  blockName: Yup.string().required('Required'),
  capacity: Yup.number().required('Required'),
});

const NewBlock: React.FC = () => {
  const handleSubmit = (data: object) => {
    try {
      axios
        .post('/prison', data)
        .then((res) => {
          console.log(res);
          toast.success('Prison is added');
        })
        .catch((err) => {
          console.log(err);
          toast.error('Something went wrong');
        });
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };

  return (
    <Page>
      <div className="">
        <FormHead title="Add Prison" />
        {/* the form starts here */}

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => {
            handleSubmit(values);
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
        {/* the form ends here */}
      </div>
    </Page>
  );
};

export default NewBlock;
