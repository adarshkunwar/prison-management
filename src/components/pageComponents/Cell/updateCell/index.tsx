import React, { useCallback, useEffect, useState } from 'react';
// styles
import { styleInput } from '@styles/Form';
import { toast } from 'react-hot-toast';
// form components
import axios from '@axios/axios';
import { updateBlock } from '@src/types/Block/viewBlock';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

type Props = {
  id: string;
};

const field = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
  },
  {
    name: 'capacity',
    label: 'Capacity',
    type: 'text',
  },
];

const schema = Yup.object().shape({
  name: Yup.string().required('Required'),
  capacity: Yup.number().required('Required'),
});

const Index: React.FC<Props> = ({ id }) => {
  const [name, setName] = useState('');
  const [capacity, setCapacity] = useState(0);

  const initialValues = {
    name: name,
    capacity: capacity,
  };

  const getData = useCallback(() => {
    try {
      axios.get(`cell/${id}`).then((res) => {
        console.log(res.data.result);
        setName(res.data.result.name);
        setCapacity(res.data.result.capacity);
      });
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  const update = (data: updateBlock) => {
    try {
      axios
        .put(`/cell/${id}`, {
          ...data,
          name: data.name.slice(0, 1).toUpperCase() + data.name.slice(1),
          capacity: parseInt(data.capacity.toString()),
        })
        .then((res) => {
          console.log(res);
          toast.success('Block is updated');
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
