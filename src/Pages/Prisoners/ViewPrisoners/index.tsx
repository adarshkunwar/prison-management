import { useCallback, useEffect, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import axios from '../../../HOC/axios/axios';
import ModalDanger from '../../../components/UI/ModalDanger';
import Table from '../../../components/UI/Table';
import TableHead from '../../../components/UI/TableHead';
import Page from '../../../container/Page';
/* const fields = [
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
]; */

/* const old_heading = [
  'prisoner Id',
  'cell Id',
  'name',
  'age',
  'Crime',
  'Total Sentence',
  'Remaining Sentence',
  'Status',
  'Actions',
]; */

const heading = [
  'name',
  'cell',
  'age',
  'crime',
  'total sentence',
  'remaining sentence',
  'status',
  'actions',
];
// TODO change the prisoners so that it shows prisoners cell, block and also the prison...

type Cell = {
  id: string;
  cellName: string;
  capacity: number;
  currentOccupancy: number;
};

type fields = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  contactNumber: number;
  crime: string;
  dateOfAdmission: string; // You might want to use a Date type instead of string
  dateOfRelease: string;
  image: string;
  cell: Cell;
  latestVisit: string;
};

// Example data
/* const exampleData: fields = {
  id: 'fcafe6a1-212c-4faa-af1f-052d639b8cc1',
  firstName: 'Adarsh',
  lastName: 'Kunwar',
  age: 10,
  address: 'butwal',
  contactNumber: 200202002,
  crime: 'aarson',
  dateOfAdmission: '2023-07-14T13:42:57.359Z',
  dateOfRelease: '2025-08-10',
  image: 'Berserk-Wallpaper-Desktop.jpg',
  cell: {
    id: 'a24dd055-fc02-4d6f-bf7f-e65a7bc2a240',
    cellName: 'Cell 1A',
    capacity: 10,
    currentOccupancy: 8,
  },
  latestVisit: '2023-07-10',
}; */

const title = 'Prisoners';

const ViewPrisoner: React.FC = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [turnOff, setTurnOff] = useState(true);
  const [fields, setFields] = useState<fields[]>([]);
  const [todayDate, setTodayDate] = useState(new Date());
  const getData = useCallback(() => {
    try {
      const timout = setTimeout(() => {
        axios
          .get('/prisoner')
          .then((res) => {
            console.log(res.data.result);
            setFields(res.data.result);
          })
          .catch((err) => {
            console.log(err);
          });
        return clearTimeout(timout);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  }, []);

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
    if (fields.length > 0) {
      console.log(todayDate);
      console.log(parseInt(fields[0].dateOfRelease));
    }
  }, [fields, todayDate]);

  useEffect(() => {
    if (turnOff) {
      getData();
      setShowDelete(false);
      const timeout = setTimeout(() => {
        setTurnOff(false);
        return clearTimeout(timeout);
      }, 500);
    }
  }, [turnOff, getData]);

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
                  {val.firstName + ' ' + val.lastName}
                </td>
                const heading = [ 'name', 'cell', 'age', 'crime', 'total
                sentence', 'remaining sentence', 'status', 'actions', ];
                <td className="px-6 py-4">{val.cell.cellName}</td>
                <td className="px-6 py-4">{val.age}</td>
                <td className="px-6 py-4">{val.crime}</td>
                <td className="px-6 py-4">
                  {parseInt(val.dateOfRelease) - parseInt(val.dateOfAdmission)}
                </td>
                <td className="px-6 py-4"> this will change now</td>
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
