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
import { singlePrisonForSinglePrison as allPrisonHeading } from '@components/Utils/HeadingLists';
import UpdatePrison from '@components/pageComponents/Prison/UpdatePrison';
import ViewSinglePrison from '@components/pageComponents/Prison/ViewSinglePrison/Index';
// others
import Actions from '@src/components/UI/Form/Actions';
import Page from '@src/container/Page';
import { viewAllPrison } from '@src/types/Prison/viewPrison';
import { toast } from 'react-hot-toast';

const Index = () => {
  const [turnOff, setTurnOff] = useState(true);
  const [showView, setShowView] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [fields, setFields] = useState<viewAllPrison[]>([]);
  const [workingId, setWorkingId] = useState<string>('');
  const [reverse, setReverse] = useState<boolean>(false);
  // const [searchText, setSearchText] = useState<string>('');
  const title = 'Prison';

  const falseCondition = () => setTurnOff(true);

  const getData = useCallback(() => {
    try {
      axios
        .get('/prison')
        .then((res) => {
          if (!reverse) setFields(res.data.result);
          else setFields(res.data.result.reverse());
        })
        .catch((err) => toast.error(err.message || 'Something went wrong'));
    } catch (err) {
      toast.error('Something went wrong');
    }
  }, [reverse]);

  const handleDelete = () => {
    try {
      axios
        .delete(`/prison/${workingId}`)
        .then(() => {
          setTurnOff(true);
          toast.success('Prison is deleted');
        })
        .catch((err) => toast.error(err.message || 'Something went wrong'));
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    if (turnOff) {
      getData();
      setShowDelete(false);
      setShowView(false);
      setShowUpdate(false);
      const timeOut = setTimeout(() => {
        setTurnOff(false);
        return clearTimeout(timeOut);
      }, 500);
    }
  }, [turnOff, getData, reverse]);

  useEffect(() => {
    getData();
  }, [reverse, getData]);

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

        <Table
          setReversed={() => setReverse((prev) => !prev)}
          heading={allPrisonHeading}
        >
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
