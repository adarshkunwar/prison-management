import Forms from '../../../components/UI/Form/Forms';
import Page from '../../../container/Page';

import * as Yup from 'yup';
import FormHead from '../../../components/UI/FormHead';

const fields = [
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
		name: 'blockName',
		label: 'Block Name',
		type: 'text',
	},
	{
		name: 'capacity',
		label: 'Capacity',
		type: 'number',
	},
];

const initialValues = {
	blockID: '',
	prisonID: '',
	blockName: '',
	capacity: '',
};

const schema = Yup.object().shape({
	blockID: Yup.number().required('Required'),
	prisonID: Yup.number().required('Required'),
	blockName: Yup.string().required('Required'),
	capacity: Yup.number().required('Required'),
});

const NewPrisoners = () => {
	const handleSubmit = (data: object) => {
		console.log(data);
	};

	return (
		<Page>
			<div>
				<FormHead title="Add Block" />
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
