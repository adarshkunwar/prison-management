import { useCallback, useEffect, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

// axios
import axios from '@axios/axios';

// UI
import ModalBox from '@UI/ModalBox';
import ModalDanger from '@UI/ModalDanger';
import Spinner from '@UI/Spinner';
import Table from '@UI/Table';
import TableHead from '@UI/TableHead';

// components
import UpdatePrison from '@components/pageComponents/Prison/UpdatePrison';
import {
  heading,
  title,
} from '@components/pageComponents/Prison/ViewPrison/heading';
import ViewSinglePrison from '@components/pageComponents/Prison/ViewSinglePrison/Index';

// others
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

  const getData = useCallback(() => {
    try {
      const timeout = setTimeout(() => {
        axios
          .get('/prison')
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
          <UpdatePrison id={workingId} />
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
          <ViewSinglePrison id={workingId} />
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
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="text-lg"
                      onClick={() => {
                        setShowView(true);
                      }}
                    >
                      <AiOutlineEye />
                    </div>
                    <div onClick={() => setShowUpdate(true)}>
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
