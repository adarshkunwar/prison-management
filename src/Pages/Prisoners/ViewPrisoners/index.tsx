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
import MovePriosner from '@components/pageComponents/Prisoners/MovePrisoner';
import UpdatePrisoner from '@components/pageComponents/Prisoners/UpdatePrisoners';
import ViewSinglePrisoner from '@components/pageComponents/Prisoners/ViewSinglePrisoners';

// others
import Actions from '@UI/Form/Actions';
import Page from '@src/container/Page';
import { data } from '@src/types/Prisoners';
import { toast } from 'react-hot-toast';

const heading = [
  'Image',
  'Name',
  'Cell',
  'Address',
  'Contact',
  'Action',
  'Move',
];

const title = 'Prisoners';

const Index = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showMove, setShowMove] = useState(false);
  const [turnOff, setTurnOff] = useState(true);
  const [field, setField] = useState<data[]>([]);
  const [workingId, setWorkingId] = useState<string>('');

  const getData = useCallback(async () => {
    try {
      const timeOut = setTimeout(() => {
        axios
          .get('/prisoner')
          .then((res) => {
            console.log(res.data.result, 'collective prisoner');
            setField(res.data.result);
          })
          .catch((err) => {
            console.log(err);
            toast.error('Something went wrong');
          });
        return () => clearTimeout(timeOut);
      }, 1000);
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  }, []);

  const handleDelete = () => {
    axios
      .delete(`/prisoner/${workingId}`)
      .then((res) => {
        console.log(res.data);
        toast.success('Deleted Successfully');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Something went wrong');
      });
  };

  const falseCondition = () => {
    setTurnOff(true);
  };

  useEffect(() => {
    if (turnOff) {
      getData();
      setShowDelete(false);
      setShowView(false);
      setShowUpdate(false);
      const interval = setTimeout(() => {
        setTurnOff(false);
        return clearTimeout(interval);
      }, 500);
    }
  }, [turnOff, getData]);

  const showSpinner = (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner />
    </div>
  );

  const moveModal = (
    <ModalBox failCondition={falseCondition}>
      <MovePriosner id={workingId} />
    </ModalBox>
  );
  const dangerModal = (
    <ModalDanger
      name={title}
      falseCondition={falseCondition}
      onClick={handleDelete}
    />
  );

  const updateModal = (
    <ModalBox failCondition={falseCondition}>
      <UpdatePrisoner id={workingId} />
    </ModalBox>
  );

  const viewModal = (
    <ModalBox failCondition={falseCondition}>
      <ViewSinglePrisoner id={workingId} />
    </ModalBox>
  );

  return (
    <Page>
      <div>
        {showDelete ? dangerModal : null}
        {showView ? viewModal : null}
        {showUpdate ? updateModal : null}
        {showMove ? moveModal : null}
        {(field.length === 0 || turnOff) && showSpinner}
        <TableHead title={title} />
        <Table heading={heading}>
          {field &&
            field.map((val, i) => {
              return (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td
                    scope="row"
                    className="px-4 w-8 h-8 overflow-hidden rounded-full font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="w-12 h-12">
                      <img
                        src={`http://localhost:8080/public/${val.image}`}
                        alt={val.firstName + val.lastName}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {val.firstName + ' ' + val.lastName}
                  </td>
                  <td className="px-6 py-4">{val.cell.name}</td>
                  <td className="px-6 py-4">{val.address}</td>
                  <td className="px-6 py-4">{val.contactNumber}</td>
                  <td className="px-6 py-4">
                    <Actions
                      deleteButton={() => setShowDelete(true)}
                      id={val.id}
                      setWorkingId={setWorkingId}
                      updateButton={() => setShowUpdate(true)}
                      viewButton={() => setShowView(true)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-secondary px-5 py-1"
                      onClick={() => {
                        setWorkingId(val.id);
                        setShowMove(true);
                      }}
                    >
                      Move
                    </button>
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
