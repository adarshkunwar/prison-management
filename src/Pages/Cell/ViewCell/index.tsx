import Page from '../../../container/Page';
import Table from '../../../components/UI/Table';
import TableHead from '../../../components/UI/TableHead';
import { AiOutlineEye } from 'react-icons/ai';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

const fields = [
	{ cellID: 1, blockID: 1, capacity: 4, occupancy: 2 },
	{ cellID: 2, blockID: 1, capacity: 4, occupancy: 3 },
	{ cellID: 3, blockID: 2, capacity: 2, occupancy: 1 },
	{ cellID: 4, blockID: 2, capacity: 2, occupancy: 1 },
	{ cellID: 5, blockID: 2, capacity: 2, occupancy: 1 },
];

const heading = ['Cell ID', 'Block ID', 'Capacity', 'Occupancy', 'Actions'];

const title = 'Cell';
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
								{val.cellID}
							</td>
							<td className="px-6 py-4">{val.blockID}</td>
							<td className="px-6 py-4">{val.capacity}</td>
							<td className="px-6 py-4">{val.occupancy}</td>
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
