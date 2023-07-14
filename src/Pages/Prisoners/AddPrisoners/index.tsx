import * as Yup from 'yup';
import Forms from '../../../components/UI/Form/Forms';
import FormHead from '../../../components/UI/FormHead';
import Page from '../../../container/Page';

const fields = [
  {
    name: 'prisonId',
    label: 'Prison Id',
    type: 'text',
  },
  {
    name: 'cellId',
    label: 'Cell Id',
    type: 'text',
  },
  {
    name: 'name',
    label: 'Name',
    type: 'text',
  },
  {
    name: 'age',
    label: 'Age',
    type: 'number',
  },
  {
    name: 'crime',
    label: 'Crime',
    type: 'text',
  },
  {
    name: 'totalSentence',
    label: 'Total Sentence',
    type: 'number',
  },
];

const initialValues = {
  prisonerId: '',
  cellId: '',
  name: '',
  age: '',
  crime: '',
  totalSentence: '',
};

const schema = Yup.object().shape({
  prisonerId: Yup.string().required('Required'),
  cellId: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  age: Yup.number().required('Required'),
  crime: Yup.string().required('Required'),
  totalSentence: Yup.number().required('Required'),
  remainingSentence: Yup.number().required('Required'),
});

const NewPrisoners = () => {
  const handleSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <Page>
      <div>
        <FormHead title="Add Prisoners" />
        <Forms
          fields={fields}
          initialValues={initialValues}
          schema={schema}
          onSubmit={handleSubmit}
        />
      </div>
    </Page>
  );
};

export default NewPrisoners;
