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
  id: string;
  name: string;
  currentOccupancy: number;
  capacity: number;
  block: {
    name: string;
  };
};

const heading = ['Cell Name', 'Block Name', 'Capacity', 'Occupancy', 'Actions'];

const title = 'Cell';

const Index = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [turnOff, setTurnOff] = useState(true);
  const [field, setField] = useState<fields[]>([]);
  const [workingId, setWorkingId] = useState<string>('');

  const getData = useCallback(async () => {
    try {
      const timeOut = setTimeout(() => {
        axios
          .get('/cell')
          .then((res) => {
            console.log(res.data.result, 'collective cell');
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
      .delete(`/cell/${workingId}`)
      .then((res) => {
        console.log(res.data);
        setShowDelete(false);
        setTurnOff(true);
        toast.success('Cell deleted successfully');
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

  const dangerModal = (
    <ModalDanger
      name={title}
      falseCondition={falseCondition}
      onClick={handleDelete}
    />
  );

  const updateModal = (
    <ModalBox failCondition={falseCondition}>
      <UpdateCell id={workingId} />
    </ModalBox>
  );

  const viewModal = (
    <ModalBox failCondition={falseCondition}>
      <ViewSingleCell id={workingId} />
    </ModalBox>
  );

  return (
    <Page>
      <div>
        {showDelete ? dangerModal : null}
        {showView ? viewModal : null}
        {showUpdate ? updateModal : null}
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
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {val.name}
                  </td>
                  <td className="px-6 py-4">{val.block?.name}</td>
                  <td className="px-6 py-4">{val.capacity}</td>
                  <td className="px-6 py-4">{val.currentOccupancy}</td>
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
