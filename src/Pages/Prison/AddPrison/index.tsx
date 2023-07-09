import * as Yup from 'yup';
import Forms from '../../../components/UI/Form/Forms';
import FormHead from '../../../components/UI/FormHead';
import Page from '../../../container/Page';

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
	const handleSubmit = (data: object) => {
		console.log(data);
	};

	return (
		<Page>
			<div className="">
				<FormHead title="Add Prison" />
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
