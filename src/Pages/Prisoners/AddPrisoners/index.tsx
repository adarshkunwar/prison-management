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
	return (
		<Page>
			<div>
				<FormHead title="Add Prisoners" />
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
