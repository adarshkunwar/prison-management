import React, { useCallback, useEffect, useState } from 'react';

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

const NewPrison: React.FC = () => {
  const [prisonArr, setPrisonArr] = useState([]);
  const [chosenPrison, setChosenPrison] = useState('');
  const [blockArr, setBlockArr] = useState([]);
  const [chosenBlock, setChosenBlock] = useState('');
  const [cellArr, setCellArr] = useState([]);
  const [chosenCell, setChosenCell] = useState('');
  const [image, setImage] = useState<File>();

  const getPrison = useCallback(() => {
    try {
      axios
        .get('/prison')
        .then((res) => {
          console.log(res.data.result);
          setPrisonArr(res.data.result);
          toast.success('Prison are loaded');
        })
        .catch((err) => {
          console.log(err);
          toast.error('Something went wrong');
        });
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  }, []);

  const getBlock = useCallback(() => {
    try {
      axios
        .get(`/prison/${chosenPrison}`)
        .then((res) => {
          console.log(res.data.result.block);
          setBlockArr(res.data.result.blocks);
          toast.success('Blocks are loaded');
        })
        .catch((err) => {
          console.log(err);
          toast.error('Could not fetch erro');
        });
    } catch (err) {
      console.log(err);
      toast.error('could not fetch blocks');
    }
  }, [chosenPrison]);

  const getCell = useCallback(() => {
    try {
      axios
        .get(`/block/${chosenBlock}`)
        .then((res) => {
          console.log(res.data.result.cells);
          setCellArr(res.data.result.cells);
          toast.success('Cells are loaded');
        })
        .catch((err) => {
          console.log(err);
          toast.error('Could not fetch erro');
        });
    } catch (err) {
      console.log(err);
      toast.error('could not fetch cells');
    }
  }, [chosenBlock]);

  type optionArr = {
    id: number;
    name: string;
  }[];

  const createField = (
    name: string,
    label: string,
    type: string,
    options?: optionArr
  ) => {
    const returnable: fields = {
      name: name,
      label: label,
      type: type,
    };
    if (options) returnable.options = options;
    return returnable;
  };

  const fields: fields[] = [
    createField('prison', 'Prison', 'select', prisonArr),
    createField('block', 'Block', 'select', blockArr),
    createField('cell', 'Cell', 'select', cellArr),
    createField('firstName', 'first Name', 'text'),
    createField('lastName', 'last Name', 'text'),
    createField('age', 'Age', 'number'),
    createField('address', 'Address', 'text'),
    createField('contactNumber', 'Contact Number', 'number'),
    createField('dateOfRelease', 'Date of Release', 'date'),
    createField('crime', 'Crime', 'text'),
  ];

  const initialValues = {
    firstName: '',
    lastName: '',
    age: 0,
    address: '',
    contactNumber: 9800000000,
    dateOfRelease: '',
    crime: '',
  };

  const schema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    age: Yup.number().required('Required'),
    address: Yup.string().required('Required'),
    contactNumber: Yup.number().required('Required'),
    dateOfRelease: Yup.date().required('Required'),
    crime: Yup.string().required('Required'),
  });

  type data = {
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    contactNumber: number;
    dateOfRelease: string;
    crime: string;
  };

  const handleSubmit = (data: data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('image', image as Blob);
    formData.append('cell', chosenCell);
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('age', data.age.toString());
    formData.append('address', data.address);
    formData.append('contactNumber', data.contactNumber.toString());
    formData.append('dateOfRelease', data.dateOfRelease);
    formData.append('crime', data.crime);

    try {
      axios
        .post('/prisoner', formData)
        .then((res) => {
          console.log(res);
          toast.success('Prisoner is added');
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
    getBlock();
    getCell();
  }, [getBlock, getCell, getPrison]);

  return (
    <Page>
      <div className="">
        <FormHead title="Add Prisoner" />
        {/* the form starts here */}

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log(values, 'values');
            handleSubmit(values);
          }}
        >
          {/* image */}
          <Form className="flex flex-col gap-3">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-4">
                <label htmlFor="image" className={styleInput.label}>
                  Image
                </label>
              </div>
              <div className="col-span-8">
                <input
                  type="file"
                  name="image"
                  id="image"
                  className={styleInput.default}
                  onChange={(e) => {
                    if (e.target.files) setImage(e.target.files[0]);
                  }}
                />
              </div>
            </div>

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

                  {field.type === 'select' && field.name === 'prison' && (
                    <select
                      name={field.name}
                      id={field.name}
                      className={styleInput.default}
                      onChange={(e) => setChosenPrison(e.target.value)}
                    >
                      <option value="">-------</option>
                      {field.options &&
                        field?.options?.map((option, index) => (
                          <option key={index} value={option.id}>
                            {option.name}
                          </option>
                        ))}
                    </select>
                  )}

                  {field.type === 'select' && field.name === 'block' && (
                    <select
                      name={field.name}
                      id={field.name}
                      className={styleInput.default}
                      onChange={(e) => setChosenBlock(e.target.value)}
                    >
                      <option value="">-------</option>
                      {field.options &&
                        field?.options?.map((option, index) => (
                          <option key={index} value={option.id}>
                            {option.name}
                          </option>
                        ))}
                    </select>
                  )}

                  {field.type === 'select' && field.name === 'cell' && (
                    <select
                      name={field.name}
                      id={field.name}
                      className={styleInput.default}
                      onChange={(e) => setChosenCell(e.target.value)}
                    >
                      <option value="">-------</option>
                      {field.options &&
                        field?.options?.map((option, index) => (
                          <option key={index} value={option.id}>
                            {option.name}
                          </option>
                        ))}
                    </select>
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
        {/* the form ends here */}
      </div>
    </Page>
  );
};

export default NewPrison;
