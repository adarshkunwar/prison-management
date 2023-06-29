import Forms from '../../../components/UI/Form/Forms';
import Page from '../../../container/Page';
import * as Yup from 'yup';
import FormHead from '../../../components/UI/FormHead';

const fields = [
	{
		name: 'name',
		label: 'Name',
		type: 'text',
	},
	{
		name: 'class',
		label: 'Class',
		type: 'number',
	},
	{
		name: 'rollNo',
		label: 'Roll No',
		type: 'number',
	},
];

const initialValues = {
	name: '',
	class: '',
	rollNo: '',
};

const schema = Yup.object().shape({
	name: Yup.string().required('Required'),
	class: Yup.number().required('Required'),
	rollNo: Yup.number().required('Required'),
});

const NewPrisoners = () => {
	return (
		<Page>
			<div>
				<FormHead title="Add Visitors" />
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
