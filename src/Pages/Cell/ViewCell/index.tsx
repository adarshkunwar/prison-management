import { useEffect, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import ModalDanger from '../../../components/UI/ModalDanger';
import Table from '../../../components/UI/Table';
import TableHead from '../../../components/UI/TableHead';
import Page from '../../../container/Page';

const fields = [
  { cellID: 1, blockID: 1, capacity: 4, occupancy: 2 },
  { cellID: 2, blockID: 1, capacity: 4, occupancy: 3 },
  { cellID: 3, blockID: 2, capacity: 2, occupancy: 1 },
  { cellID: 4, blockID: 2, capacity: 2, occupancy: 1 },
  { cellID: 5, blockID: 2, capacity: 2, occupancy: 1 },
];

const heading = ['Cell ID', 'Block ID', 'Capacity', 'Occupancy', 'Actions'];

const title = 'Cell';

const Index = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [showView, setShowView] = useState(false);
  const [turnOff, setTurnOff] = useState(true);

  const handleUpdate = () => {
    console.log('update');
  };

  const handleDelete = () => {
    console.log('delete');
  };

  const handleView = () => {
    console.log('view');
  };

  const falseCondition = () => {
    setTurnOff(true);
  };

  useEffect(() => {
    if (turnOff) {
      setShowDelete(false);
      setShowView(false);
      const interval = setTimeout(() => {
        setTurnOff(false);
        return clearTimeout(interval);
      }, 500);
    }
  }, [turnOff]);

  const modal = (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      onClick={(e) => {
        e.stopPropagation();
        setTurnOff(true);
      }}
    >
      {showDelete && (
        <ModalDanger
          name={title}
          falseCondition={falseCondition}
          onClick={handleDelete}
        />
      )}
    </div>
  );

  return (
    <Page>
      <div>
        {showDelete ? modal : null}
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
                    <div className="text-lg" onClick={handleView}>
                      <AiOutlineEye />
                    </div>
                    <div onClick={handleUpdate}>
                      <BsPencilSquare />
                    </div>
                    <div onClick={() => setShowDelete(true)}>
                      <BsTrash />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </Table>
      </div>
    </Page>
  );
};

export default Index;
