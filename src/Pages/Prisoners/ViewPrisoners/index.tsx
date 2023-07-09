import { useEffect, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import ModalDanger from '../../../components/UI/ModalDanger';
import Table from '../../../components/UI/Table';
import TableHead from '../../../components/UI/TableHead';
import Page from '../../../container/Page';

const fields = [
  {
    prisonerId: '100',
    cellId: '1A',
    name: 'Alex',
    age: '24',
    crime: 'Arson',
    totalSentence: 4,
    remainingSentence: 1,
    status: 'pending',
  },
  {
    prisonerId: '100',
    cellId: '1A',
    name: 'Alex',
    age: '24',
    crime: 'Arson',
    totalSentence: 4,
    remainingSentence: 1,
    status: 'pending',
  },
  {
    prisonerId: '100',
    cellId: '1A',
    name: 'Alex',
    age: '24',
    crime: 'Arson',
    totalSentence: 4,
    remainingSentence: 1,
    status: 'pending',
  },
];

const heading = [
  'prisoner Id',
  'cell Id',
  'name',
  'age',
  'Crime',
  'Total Sentence',
  'Remaining Sentence',
  'Status',
  'Actions',
];

const title = 'Prisoners';

const ViewPrisoner: React.FC = () => {
  //   const [showView, setShowView] = useState(false);
  //   const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
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
    }
  }, [turnOff]);

  useEffect(() => {
    if (showDelete) {
      setTurnOff(false);
    }
  }, [showDelete]);

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
                  {val.prisonerId}
                </td>
                <td className="px-6 py-4">{val.cellId}</td>
                <td className="px-6 py-4">{val.name}</td>
                <td className="px-6 py-4">{val.age}</td>
                <td className="px-6 py-4">{val.crime}</td>
                <td className="px-6 py-4">{val.totalSentence}</td>
                <td className="px-6 py-4">{val.remainingSentence}</td>
                <td className="px-6 py-4">{val.status}</td>
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

export default ViewPrisoner;
