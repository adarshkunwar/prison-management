import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

// components
import FormHead from '@components/UI/FormHead';
import Page from '@src/container/Page';
import { styleInput } from '@styles/Form';

// form components
import axios from '@axios/axios';
import { createField } from '@src/components/Utils/CreateFields';
import { PrisonSimple, StaffSimple } from '@src/types/Data';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';

const NewVisitors: React.FC = () => {
  const [prisonArr, setPrisonArr] = useState<PrisonSimple[]>([]);
  const [chosenPrison, setChosenPrison] = useState('');

  const getPrisoners = useCallback(async () => {
    try {
      axios.get('/prison').then((res) => {
        console.log(res.data.result);
        setPrisonArr(res.data.result);
      });
    } catch (err) {
      return toast.error('Something went wrong while fetching prisoners');
    }
  }, []);

  useEffect(() => {
    getPrisoners();
  }, [getPrisoners]);

  const field = [
    createField('prison', 'Prison', 'select', prisonArr),
    createField('firstName', 'First Name', 'text'),
    createField('lastName', 'Last Name', 'text'),
    createField('age', 'Age', 'number'),
    createField('address', 'Address', 'text'),
    createField('contactNumber', 'Contact', 'number'),
    createField('salary', 'Salary', 'number'),
    createField('designation', 'Designation', 'text'),
  ];

  const initialValues = {
    firstName: '',
    lastName: '',
    age: 10,
    address: '',
    contactNumber: '',
    salary: 0,
    designation: '',
  };

  const schema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    age: Yup.number().required('Required'),
    address: Yup.string().required('Required'),
    contactNumber: Yup.number().required('Required'),
    salary: Yup.number().required('Required'),
    designation: Yup.string().required('Required'),
  });

  const handleSubmit = (data: StaffSimple) => {
    data.prison = chosenPrison;
    axios
      .post('/staff', data)
      .then(() => toast.success('Staff added'))
      .catch(() => toast.error('Staff could not be added'));
  };

  return (
    <Page>
      <div>
        <FormHead title="Add Staff" />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form className="flex flex-col gap-3">
            {field.map((field, index) => (
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

                  {field.type === 'select' && field.name === 'prison' && (
                    <Field
                      as="select"
                      name={field.name}
                      id={field.name}
                      className={styleInput.default}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setChosenPrison(e.target.value)
                      }
                    >
                      <option value="">-------</option>
                      {field.options &&
                        field?.options?.map((option, index) => (
                          <option key={index} value={option.id}>
                            {option.name}
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
                className="text-white bg-accent font-medium rounded-lg text-sm w-auto px-10 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Page>
  );
};

export default NewVisitors;
