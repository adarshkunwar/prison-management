import getPrison from '@src/hooks/usePrison';
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
import UpdatePrison from '@components/pageComponents/Prison/UpdatePrison';
import { heading } from '@components/pageComponents/Prison/ViewPrison/heading';
import ViewSinglePrison from '@components/pageComponents/Prison/ViewSinglePrison/Index';
// others
import Actions from '@src/components/UI/Form/Actions';
import Page from '@src/container/Page';
import { viewAllPrison } from '@src/types/Prison/viewPrison';
import { toast } from 'react-hot-toast';

const Index = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [turnOff, setTurnOff] = useState(true);
  const [fields, setFields] = useState<viewAllPrison[]>([]);
  const [workingId, setWorkingId] = useState<string>('');
  const title = 'Prison';

  const getData = useCallback(() => {
    try {
      setFields(getPrison());
    } catch (err) {
      toast.error('Something went wrong');
    }
  }, []);

  const handleDelete = () => {
    try {
      axios
        .delete(`/prison/${workingId}`)
        .then((res) => {
          console.log(res);
          setTurnOff(true);
          setShowDelete(false);
          toast.success('Prison is deleted');
        })
        .catch((err) => {
          console.log(err);
          toast.error('Something went wrong');
        });
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };

  const falseCondition = () => setTurnOff(true);

  useEffect(() => {
    if (turnOff) {
      getData();
      setShowDelete(false);
      setShowView(false);
      setShowUpdate(false);
      console.log();
      const timeOut = setTimeout(() => {
        setTurnOff(false);
        return clearTimeout(timeOut);
      }, 500);
    }
  }, [turnOff, getData]);

  const dangerModal = (
    <ModalDanger
      name={title}
      falseCondition={falseCondition}
      onClick={handleDelete}
    />
  );

  const updateModal = (
    <ModalBox failCondition={falseCondition}>
      <UpdatePrison id={workingId} />
    </ModalBox>
  );

  const viewModal = (
    <ModalBox failCondition={falseCondition}>
      <ViewSinglePrison id={workingId} />
    </ModalBox>
  );

  const showSpinner = (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner />
    </div>
  );

  return (
    <Page>
      <div>
        {showDelete ? dangerModal : null}
        {showView ? viewModal : null}
        {showUpdate ? updateModal : null}
        {(fields.length === 0 || turnOff) && showSpinner}
        <TableHead title={title} />

        <Table heading={heading}>
          {fields.map((val, i) => {
            return (
              <tr
                key={i}
                onClick={() => {
                  setWorkingId(val.id);
                }}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {i + 1}
                </td>
                <td className="px-6 py-4">{val.name}</td>
                <td className="px-6 py-4">{val.address}</td>
                <td className="px-6 py-4">{val.capacity}</td>
                <td className="px-6 py-4">{val.currentOccupancy}</td>
                <td>
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
