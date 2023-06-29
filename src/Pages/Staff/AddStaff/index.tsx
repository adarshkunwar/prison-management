import Forms from '../../../components/UI/Form/Forms';
import Page from '../../../container/Page';
import * as Yup from 'yup';
import FormHead from '../../../components/UI/FormHead';

const fields = [
	{
		name: 'staffID',
		label: 'Staff ID',
		type: 'number',
	},
	{
		name: 'prisonID',
		label: 'Prison ID',
		type: 'number',
	},
	{
		name: 'name',
		label: 'Name',
		type: 'text',
	},
	{
		name: 'position',
		label: 'Position',
		type: 'text',
	},
	{
		name: 'salary',
		label: 'Salary',
		type: 'number',
	},
];

const initialValues = {
	staffID: '',
	prisonID: '',
	name: '',
	position: '',
	salary: '',
};

const schema = Yup.object().shape({
	staffID: Yup.number().required('Required'),
	prisonID: Yup.number().required('Required'),
	name: Yup.string().required('Required'),
	position: Yup.string().required('Required'),
	salary: Yup.number().required('Required'),
});

const NewPrisoners = () => {
	return (
		<Page>
			<div>
				<FormHead title="Add Saff" />
				<Forms
					fields={fields}
					initialValues={initialValues}
					schema={schema}
				/>
			</div>
		</Page>
	);
};

export default NewPrisoners;
