import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

// components
import FormHead from '@components/UI/FormHead';
import Page from '@src/container/Page';
import { styleInput } from '@styles/Form';

// form components
import axios from '@axios/axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';

type fields = {
  name: string;
  label: string;
  type: string;
  options?: {
    id: number;
    name: string;
  }[];
};

const Index: React.FC = () => {
  const [prisonArr, setPrisonArr] = useState([]);
  const [chosenPrison, setChosenPrison] = useState('');
  const [blockArr, setBlockArr] = useState([]);
  const [chosenBlock, setChosenBlock] = useState('');

  const getPrison = useCallback(() => {
    try {
      axios
        .get('/prison')
        .then((res) => {
          setPrisonArr(res.data.result);
          // toast.success('Prison are loaded');
        })
        .catch((err) => {
          console.log(err);
          toast.success('Something went wrong');
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getBlock = useCallback(() => {
    try {
      axios
        .get(`/prison/${chosenPrison}`)
        .then((res) => {
          console.log(res.data.result);
          setBlockArr(res.data.result.blocks);
          // toast.success('Block are loaded');
        })
        .catch((err) => {
          console.log(err);
          toast.success('Something went wrong');
        });
    } catch (err) {
      console.log(err);
    }
  }, [chosenPrison]);

  const field: fields[] = [
    {
      name: 'prison',
      label: 'Prison',
      type: 'select',
      options: prisonArr,
    },
    {
      name: 'block',
      label: 'Block',
      type: 'select',
      options: blockArr,
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'capacity',
      label: 'Capacity',
      type: 'number',
    },
  ];

  const initialValues = {
    name: '',
    capacity: '',
  };

  const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    capacity: Yup.number().required('Required'),
  });

  const handleSubmit = (data: object) => {
    axios
      .post(`/cell`, { ...data, block: chosenBlock })
      .then((res) => {
        console.log(res);
        toast.success('Cell Added Successfully');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Something went wrong');
      });
  };

  useEffect(() => {
    getPrison();
  }, [getPrison]);

  useEffect(() => {
    getBlock();
  }, [getBlock, chosenPrison]);

  return (
    <Page>
      <div>
        <FormHead title="Add Cell" />
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log(values, 'values');
            handleSubmit(values);
          }}
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

                  {field.type === 'select' && field.name === 'block' && (
                    <Field
                      as="select"
                      name={field.name}
                      id={field.name}
                      className={styleInput.default}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setChosenBlock(e.target.value)
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

export default Index;
