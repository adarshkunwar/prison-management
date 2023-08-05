import { useCallback, useEffect, useState } from 'react';

// axios
import axios from '@axios/axios';

// UI
import ModalBox from '@UI/ModalBox';
import ModalDanger from '@UI/ModalDanger';
import Spinner from '@UI/Spinner';
import TableHead from '@UI/TableHead';
import Table from '@UI/ViewTable';
import { singleBlockForBlock as heading } from '@src/components/Utils/HeadingLists';

// components
import UpdateBlock from '@components/pageComponents/Block/UpdateBlock';
import ViewSingleBlock from '@components/pageComponents/Block/ViewSingleBlock/';

// others
import Actions from '@UI/Form/Actions';
import Page from '@src/container/Page';
import { toast } from 'react-hot-toast';

type field = {
  id: string;
  name: string;
  capacity: number;
  currentOccupancy: number;
  prison: {
    name: string;
  };
};

const title = 'Blocks';

const Index = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [turnOff, setTurnOff] = useState(true);
  const [field, setField] = useState<field[]>([]);
  const [workingId, setWorkingId] = useState<string>('');
  const [reverse, setReverse] = useState<boolean>(false);

  const getData = useCallback(async () => {
    try {
      const timeOut = setTimeout(() => {
        axios
          .get('/block')
          .then((res) => {
            if (!reverse) setField(res.data.result);
            setField(res.data.result.reverse());
          })
          .catch((err) => toast.error(err.message));
        return () => clearTimeout(timeOut);
      }, 1000);
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  }, [reverse]);

  const handleDelete = () => {
    try {
      axios
        .delete(`/block/${workingId}`)
        .then((res) => {
          console.log(res.data);
          toast.success('Block deleted successfully');
          setTurnOff(true);
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

  const falseCondition = () => {
    setTurnOff(true);
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
  }, [turnOff, getData]);

  useEffect(() => {
    getData();
  }, [reverse, getData]);

  const dangerModal = (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none"
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

  const updateModal = (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none"
      onClick={(e) => {
        e.stopPropagation();
        setTurnOff(true);
      }}
    >
      {showUpdate && (
        <ModalBox failCondition={falseCondition}>
          <UpdateBlock id={workingId} />
        </ModalBox>
      )}
    </div>
  );

  const viewModal = (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none "
      onClick={(e) => {
        e.stopPropagation();
        setTurnOff(true);
      }}
    >
      {showView && (
        <ModalBox failCondition={falseCondition}>
          <ViewSingleBlock id={workingId} />
        </ModalBox>
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
        {showDelete ? dangerModal : null}
        {showView ? viewModal : null}
        {showUpdate ? updateModal : null}
        {(field.length === 0 || turnOff) && showSpinner}
        <TableHead title={title} />
        <Table
          setReversed={() => setReverse((prev) => !prev)}
          heading={heading}
        >
          {field &&
            field.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 ">{item.prison?.name}</td>
                <td className="px-6 ">{item.capacity}</td>
                <td className="px-6 ">{item.currentOccupancy}</td>
                <td className="px-6 ">
                  <Actions
                    deleteButton={() => setShowDelete(true)}
                    id={item.id}
                    setWorkingId={setWorkingId}
                    updateButton={() => setShowUpdate(true)}
                    viewButton={() => setShowView(true)}
                  />
                </td>
              </tr>
            ))}
        </Table>
      </div>
    </Page>
  );
};
export default Index;
