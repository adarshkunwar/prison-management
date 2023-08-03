import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

// components
import FormHead from '@components/UI/FormHead';
import Page from '@src/container/Page';
import { styleInput } from '@styles/Form';

// form components
import axios from '@axios/axios';
import { createField } from '@src/components/Utils/CreateFields';
import { PrisonerSimple, VisitorSimple } from '@src/types/Data';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';

const NewVisitors: React.FC = () => {
  const [prisonerArr, setPrisonerArr] = useState<PrisonerSimple[]>([]);
  const [chosenPrisoner, setChosenPrisoner] = useState('');

  const getPrisoners = useCallback(async () => {
    try {
      axios.get('/prisoner').then((res) => {
        console.log(res.data.result);
        setPrisonerArr(res.data.result);
      });
    } catch (err) {
      return toast.error('Something went wrong while fetching prisoners');
    }
  }, []);

  useEffect(() => {
    getPrisoners();
  }, [getPrisoners]);

  const field = [
    createField('prisoner', 'Prisoner', 'select', prisonerArr),
    createField('firstName', 'First Name', 'text'),
    createField('lastName', 'Last Name', 'text'),
    createField('age', 'Age', 'number'),
    createField('address', 'Address', 'text'),
    createField('contactNumber', 'Contact', 'number'),
    createField('relation', 'Relation', 'text'),
  ];

  const initialValues = {
    firstName: '',
    lastName: '',
    age: 10,
    address: '',
    contactNumber: '',
    relation: '',
  };

  const schema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    age: Yup.number().required('Required'),
    address: Yup.string().required('Required'),
    contactNumber: Yup.number().required('Required'),
    relation: Yup.string().required('Required'),
  });

  const handleSubmit = (data: VisitorSimple) => {
    data.prisoner = chosenPrisoner;
    axios
      .post('/visitor', data)
      .then(() => toast.success('Visitor added'))
      .catch(() => toast.error('Visitor could not be added'));
  };

  return (
    <Page>
      <div>
        <FormHead title="Add Visitors" />
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

                  {field.type === 'select' && field.name === 'prisoner' && (
                    <Field
                      as="select"
                      name={field.name}
                      id={field.name}
                      className={styleInput.default}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setChosenPrisoner(e.target.value)
                      }
                    >
                      <option value="">-------</option>
                      {field.options &&
                        field?.options?.map((option, index) => (
                          <option key={index} value={option.id}>
                            {option.firstName} {option.lastName}
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
