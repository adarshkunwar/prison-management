import React from 'react';
// styles
import { styleInput } from '@styles/Form';
import { toast } from 'react-hot-toast';
// form components
import axios from '@axios/axios';
import { createField } from '@components/Utils/CreateFields';
import { PrisonerSimple } from '@src/types/Data';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

type Props = {
  id: string;
};

const field = [
  createField('firstName', 'First Name', 'text'),
  createField('lastName', 'Last Name', 'text'),
  createField('age', 'Age', 'number'),
  createField('address', 'Address', 'text'),
  createField('contactNumber', 'Contact Number', 'number'),
  createField('dateOfRelease', 'Date Of Release', 'date'),
  createField('crime', 'Crime', 'text'),
];

const schema = Yup.object().shape({
  firstName: Yup.string()
    .required('Required')
    .matches(
      /^[a-zA-Z]+[a-zA-Z\s]$/,
      'Name can only contain letters and whitespace'
    ),
  lastName: Yup.string()
    .required('Required')
    .matches(
      /^[a-zA-Z]+[a-zA-Z\s]$/,
      'Name can only contain letters and whitespace'
    ),
  age: Yup.number().required('Required'),
  address: Yup.string().required('Required'),
  contactNumber: Yup.number().required('Required'),
  dateOfRelease: Yup.date().required('Required'),
  crime: Yup.string().required('Required'),
});

const Index: React.FC<Props> = ({ id }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    age: 10,
    address: '',
    contactNumber: 9800000000,
    dateOfRelease: '',
    crime: '',
  };

  const update = (data: PrisonerSimple) => {
    try {
      axios
        .put(`/prisoner/${id}`, {
          ...data,
          firstName:
            data.firstName.slice(0, 1).toUpperCase() + data.firstName.slice(1),
          lastName:
            data.lastName.slice(0, 1).toUpperCase() + data.lastName.slice(1),
          address:
            data.address.slice(0, 1).toUpperCase() + data.address.slice(1),
          age: parseInt(data.age.toString()),
          contactNumber: data.contactNumber.toString(),
          dateOfRelease: data.dateOfRelease.toString(),
        })
        .then((res) => {
          console.log(res);
          toast.success('Prisoner is updated');
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
