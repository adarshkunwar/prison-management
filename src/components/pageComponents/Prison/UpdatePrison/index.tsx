import React, { useCallback, useEffect, useState } from 'react';
// styles
import { styleInput } from '@styles/Form';
import { toast } from 'react-hot-toast';
// form components
import axios from '@axios/axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

type Props = {
  id: string;
};

const field = [
  {
    name: 'name',
    label: 'Prison Name',
    type: 'text',
  },
  {
    name: 'address',
    label: 'Address',
    type: 'text',
  },
  {
    name: 'description',
    label: 'Description',
    type: 'text',
  },
];

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .matches(
      /^[a-zA-Z]+[a-zA-Z\s]*?[^0-9]$/,
      'Name can only contain letters, numbers, and whitespace'
    ),
  address: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
});

const Index: React.FC<Props> = ({ id }) => {
  const update = (data: object) => {
    try {
      axios
        .put(`/prison/${id}`, data)
        .then((res) => {
          console.log(res);
          toast.success('Prison is updated');
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

  const getData = useCallback(() => {
    try {
      axios.get(`/prison/${id}`).then((res) => {
        const name = res.data.result.name;
        const address = res.data.result.address;
        const description = res.data.result.description;
        console.log(name);
        console.log(address);
        return {
          name: name,
          address: address,
          description: description,
        };
      });
    } catch (err) {
      console.log(err);
      return {
        name: 'err',
        address: '',
        description: '',
      };
    }
  }, [id]);
  // TODO: fix initialValues for update
  const initialValues = getData() || {
    name: '',
    address: '',
    description: '',
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          update(values);
        }}
      >
        <Form className="flex flex-col gap-5">
          {field.map((val, i) => {
            return (
              <div key={i} className="grid grid-cols-2 items-center">
                <label className="text-sm text-gray-500 text-left">
                  {val.label}
                </label>
                <Field
                  className={styleInput.default}
                  name={val.name}
                  type={val.type}
                  placeholder={val.label}
                />
                <div></div>
                <ErrorMessage
                  name={val.name}
                  component="div"
                  className={styleInput.error}
                />
              </div>
            );
          })}
          <div className="w-full flex justify-start">
            <button
              type="submit"
              className="text-white bg-accent font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Index;
