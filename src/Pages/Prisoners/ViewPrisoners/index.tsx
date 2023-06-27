import Page from '../../../container/Page';
import Table from '../../../components/UI/Table';
import TableHead from '../../../components/UI/TableHead';
import { AiOutlineEye } from 'react-icons/ai';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

const fields = [
	{
		name: 'Alex',
		age: '24',
		crime: 'Arson',
		totalSentence: 4,
		remainingSentence: 1,
	},
	{
		name: 'Alex',
		age: '24',
		crime: 'Arson',
		totalSentence: 4,
		remainingSentence: 1,
	},
	{
		name: 'Alex',
		age: '24',
		crime: 'Arson',
		totalSentence: 4,
		remainingSentence: 1,
	},
];

const heading = [
	'name',
	'age',
	'Crime',
	'Total Sentence',
	'Remaining Sentence',
	'Actions',
];

const title = 'Prisoners';

const index = () => {
	const handleUpdate = () => {
		console.log('update');
	};

	const handleDelete = () => {
		console.log('delete');
	};

	const handleView = () => {
		console.log('view');
	};

	return (
		<Page>
			<TableHead title={title} />
			<Table heading={heading}>
				{fields.map((val, i) => {
					return (
						<tr
							key={i}
							className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
						>
							<td
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								{val.name}
							</td>
							<td className="px-6 py-4">{val.age}</td>
							<td className="px-6 py-4">{val.crime}</td>
							<td className="px-6 py-4">{val.totalSentence}</td>
							<td className="px-6 py-4">
								{val.remainingSentence}
							</td>
							<td className="px-6 py-4">
								<div className="flex items-center gap-2">
									<div
										className="text-lg"
										onClick={handleView}
									>
										<AiOutlineEye />
									</div>
									<div onClick={handleUpdate}>
										<BsPencilSquare />
									</div>
									<div onClick={handleDelete}>
										<BsTrash />
									</div>
								</div>
							</td>
						</tr>
					);
				})}
			</Table>
		</Page>
	);
};

export default index;
