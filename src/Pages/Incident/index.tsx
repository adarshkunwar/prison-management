import Forms from '../../components/UI/Form/Forms';
import Page from '../../container/Page';
import * as Yup from 'yup';
import FormWithModal from '../../components/UI/FormWithModal';
import { useState } from 'react';

const fields = [
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
    {
        name: 'remainingSentence',
        label: 'Remaining Sentence',
        type: 'number',
    },
];

const initialValues = {
    name: '',
    age: '',
    crime: '',
    totalSentence: '',
    remainingSentence: '',
};

const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    age: Yup.number().required('Required'),
    crime: Yup.string().required('Required'),
    totalSentence: Yup.number().required('Required'),
    remainingSentence: Yup.number().required('Required'),
});

const NewPrisoners = () => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (data: object) => {
        console.log(data);
    };

    const toggleButton = () => {
        setShowModal(!showModal);
    };

    const modal = (
        <div className="bg-black opacity-50 w-screen h-screen">
            <div className="text-white">Show Modal</div>
        </div>
    );

    return (
        <Page>
            <div>
                <FormWithModal modalButton={toggleButton} title="Incident" />
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
