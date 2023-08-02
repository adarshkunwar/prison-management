import React, { ChangeEvent, useEffect, useState } from 'react';

// components
import FormHead from '@components/UI/FormHead';
import { createField } from '@components/Utils/CreateFields';
import prisonAll from '@hooks/usePrison';
import Page from '@src/container/Page';
import { styleInput } from '@styles/Form';

// form components
import axios from '@axios/axios';
import { addBlock, fields } from '@src/types/Data';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';

const NewBlock: React.FC = () => {
  const [prisonArr, setPrisonArr] = useState([]);
  const [chosenPrison, setChosenPrison] = useState('');

  const getPrison = async () => {
    try {
      setPrisonArr(prisonAll());
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  const fields: fields[] = [
    createField('prison', 'Prison', 'select', prisonArr),
    createField('name', 'Block Name', 'text'),
    createField('capacity', 'Capacity', 'number'),
  ];

  const initialValues = {
    name: '',
    capacity: 0,
  };

  const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    capacity: Yup.number().required('Required'),
  });

  const handleSubmit = (data: addBlock) => {
    console.log(data);
    data.prison = chosenPrison;
    try {
      axios
        .post('/block', data)
        .then((res) => {
          console.log(res);
          toast.success('Block is added');
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

  useEffect(() => {
    getPrison();
  }, []);

  return (
    <Page>
      <div className="">
        <FormHead title="Add Block" />
        {/* the form starts here */}

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log(values, 'values');
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

                  {field.type === 'number' && (
                    <Field
                      type={field.type}
                      name={field.name}
                      id={field.name}
                      className={styleInput.default}
                    />
                  )}

                  {field.type === 'select' && (
                    <Field
                      as="select"
                      name={field.name}
                      id={field.name}
                      className={styleInput.default}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setChosenPrison(e.currentTarget.value)
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
        {/* the form ends here */}
      </div>
    </Page>
  );
};

export default NewBlock;
