import { useCallback, useEffect, useState } from 'react';

// axios
import axios from '@axios/axios';

// UI
import ModalBox from '@UI/ModalBox';
import ModalDanger from '@UI/ModalDanger';
import Spinner from '@UI/Spinner';
import TableHead from '@UI/TableHead';
import Table from '@UI/ViewTable';

// components
import ViewSingleCell from '@components/pageComponents/Cell/ViewSingleCell';
import UpdateCell from '@components/pageComponents/Cell/updateCell';

// others
import Actions from '@UI/Form/Actions';
import Page from '@src/container/Page';
import { toast } from 'react-hot-toast';

type fields = {
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  contactNumber: string;
  relation: string;
  dateOfVisit: string;
  prisoner: {
    firstName: string;
    lastName: string;
  };
};

const heading = [
  'Name',
  'Prisoner Name',
  'Age',
  'Address',
  'Contact Number',
  'Relation',
  'Date of Visit',
  'Action',
];

const title = 'Visitors';

const Index = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [turnOff, setTurnOff] = useState(true);
  const [workingId, setWorkingId] = useState<string>('');
  const [showView, setShowView] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [fields, setFields] = useState<fields[]>([]);

  const getData = useCallback(() => {
    try {
      const timeout = setTimeout(() => {
        axios
          .get('/visitor')
          .then((res) => {
            console.log(res.data.result);
            setFields(res.data.result);
          })
          .catch((err) => {
            console.log(err);
          });
        return clearTimeout(timeout);
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
    if (turnOff) {
      getData();
      setShowDelete(false);
      const timeout = setTimeout(() => {
        setTurnOff(false);
        return clearTimeout(timeout);
      }, 500);
    }
  }, [turnOff, getData]);

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

  const showSpinner = (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner />
    </div>
  );

  return (
    <Page>
      <div>
        {showDelete ? modal : null}
        {(fields.length === 0 || turnOff) && showSpinner}
        <TableHead title={title} />
        <Table heading={heading}>
          {fields &&
            fields.map((val, i) => {
              return (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {val?.firstName + ' ' + val?.lastName}
                  </td>
                  <td className="px-6 py-4">
                    {val?.prisoner?.firstName + ' ' + val?.prisoner?.lastName}
                  </td>
                  <td className="px-6 py-4">{val.age}</td>
                  <td className="px-6 py-4">{val.address}</td>
                  <td className="px-6 py-4">{val.contactNumber}</td>
                  <td className="px-6 py-4">{val.relation}</td>
                  <td className="px-6 py-4">{val.dateOfVisit}</td>
                  <td className="px-6 py-4">
                    <Actions
                      deleteButton={() => setShowDelete(true)}
                      id={val.id}
                      setWorkingId={setWorkingId}
                      updateButton={() => setShowUpdate(true)}
                      viewButton={() => setShowView(true)}
                    />
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
