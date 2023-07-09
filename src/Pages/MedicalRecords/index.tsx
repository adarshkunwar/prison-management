import { useState } from 'react';
import * as Yup from 'yup';
import Forms from '../../components/UI/Form/Forms';
import FormWithModal from '../../components/UI/FormWithModal';
import Page from '../../container/Page';

const fields = [
	{
		name: 'incidentId',
		label: 'Incident Id',
		type: 'text',
	},
	{
		name: 'prisonerId',
		label: 'Prisoner Id',
		type: 'text',
	},
	{
		name: 'prisonId',
		label: 'prison Id',
		type: 'text',
	},
	{
		name: 'cause',
		label: 'Cause',
		type: 'text',
	},
	{
		name: 'effect',
		label: 'Effect',
		type: 'text',
	},
	{
		name: 'cost',
		label: 'Cost',
		type: 'text',
	},
];

const initialValues = {
	incidentId: '',
	prisonerId: '',
	prisonId: '',
	cause: '',
	effect: '',
	cost: '',
};

const schema = Yup.object().shape({
	incidentId: Yup.string().required('Required'),
	prisonId: Yup.string().required('Required'),
	PrisonerId: Yup.string().required('Required'),
	cause: Yup.string().required('Required'),
	effect: Yup.string().required('Required'),
	cost: Yup.string().required('Required'),
});

const NewPrisoners = () => {
	const [showModal, setShowModal] = useState(false);

	const handleSubmit = (data: object) => {
		console.log(data);
	};

	const toggleButton = () => {
		setShowModal(!showModal);
	};

	const modal = showModal && (
		<div className="bg-black bg-opacity-50 w-screen h-screen absolute z-40 -mx-5 -my-10">
			<div className="text-white">Show Modal</div>
		</div>
	);

	return (
		<Page>
			<div className="relative">
				{modal || ''}
				<div className="relative">
					<FormWithModal modalButton={toggleButton} title="Medical Reports" />
					<Forms
						fields={fields}
						initialValues={initialValues}
						schema={schema}
						onSubmit={handleSubmit}
					/>
				</div>
			</div>
		</Page>
	);
};

export default NewPrisoners;
