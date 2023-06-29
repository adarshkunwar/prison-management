import Forms from '../../../components/UI/Form/Forms';
import Page from '../../../container/Page';
import * as Yup from 'yup';
import FormHead from '../../../components/UI/FormHead';

const fields = [
	{
		name: 'cellID',
		label: 'Cell ID',
		type: 'number',
	},
	{
		name: 'blockID',
		label: 'Block ID',
		type: 'number',
	},
	{
		name: 'prisonID',
		label: 'Prison ID',
		type: 'number',
	},
	{
		name: 'capacity',
		label: 'Capacity',
		type: 'number',
	},
];

const initialValues = {
	cellID: '',
	blockID: '',
	prisonID: '',
	capacity: '',
};

const schema = Yup.object().shape({
	cellID: Yup.number().required('Required'),
	blockID: Yup.number().required('Required'),
	prisonID: Yup.number().required('Required'),
	capacity: Yup.number().required('Required'),
});

const NewPrisoners = () => {
	return (
		<Page>
			<div className="">
				<FormHead title="Add Prison" />
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
