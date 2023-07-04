import Forms from '../../../components/UI/Form/Forms';
import Page from '../../../container/Page';
import * as Yup from 'yup';
import FormHead from '../../../components/UI/FormHead';

const fields = [
	{
		name: 'visitorId',
		label: 'Visitor ID',
		type: 'number',
	},
	{
		name: 'prisonerId',
		label: 'Prisoner ID',
		type: 'number',
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
		name: 'profession',
		label: 'Profession',
		type: 'text',
	},
	{
		name: 'address',
		label: 'Address',
		type: 'text',
	},
	{
		name: 'contact',
		label: 'Contact',
		type: 'number',
	},
	{
		name: 'relation',
		label: 'Relation',
		type: 'text',
	},
];

const initialValues = {
	visitorId: '',
	prisonerId: '',
	name: '',
	age: '',
	profession: '',
	address: '',
	contact: '',
	relation: '',
};

const schema = Yup.object().shape({
	visitorId: Yup.number().required('Required'),
	prisonerId: Yup.number().required('Required'),
	name: Yup.string().required('Required'),
	age: Yup.number().required('Required'),
	profession: Yup.string().required('Required'),
	address: Yup.string().required('Required'),
	contact: Yup.number().required('Required'),
	relation: Yup.string().required('Required'),
});

const NewPrisoners = () => {
	const handleSubmit = (data: object) => {
		console.log(data);
	};

	return (
		<Page>
			<div>
				<FormHead title="Add Visitors" />
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
