import Forms from '../../../components/UI/Form/Forms';
import Page from '../../../container/Page';
import * as Yup from 'yup';
import FormHead from '../../../components/UI/FormHead';

const fields = [
	{
		name: 'cellId',
		label: 'Cell ID',
		type: 'number',
	},
	{
		name: 'blockId',
		label: 'Block ID',
		type: 'number',
	},
	{
		name: 'capacity',
		label: 'Capacity',
		type: 'number',
	},
	{
		name: 'occupancy',
		label: 'Occupancy',
		type: 'number',
	},
];

const initialValues = {
	cellId: '',
	blockId: '',
	capacity: '',
	occupancy: '',
};

const schema = Yup.object().shape({
	cellId: Yup.number().required('Required'),
	blockId: Yup.number().required('Required'),
	capacity: Yup.number().required('Required'),
	occupancy: Yup.number().required('Required'),
});

const index = () => {
	return (
		<Page>
			<div>
				<FormHead title="Add Cell" />
				<Forms
					fields={fields}
					initialValues={initialValues}
					schema={schema}
				/>
			</div>
		</Page>
	);
};

export default index;
