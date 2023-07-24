import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye } from 'react-icons/ai';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import axios from '../../../HOC/axios/axios';
import ModalDanger from '../../../components/UI/ModalDanger';
import Spinner from '../../../components/UI/Spinner';
import Table from '../../../components/UI/Table';
import TableHead from '../../../components/UI/TableHead';
import Page from '../../../container/Page';

type field = {
  id: number;
  blockName: string;
  capacity: number;
  currentOccupancy: number;
  prison: {
    name: string;
  };
};

const heading = [
  'Block Name',
  'Prison Name',
  'Capacity',
  'Current Occupancy',
  'Actions',
];

const title = 'Blocks';

const Index = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [turnOff, setTurnOff] = useState(true);
  const [field, setField] = useState<field[]>([]);
  const [id, setId] = useState<string | number>('');

  const getData = useCallback(async () => {
    try {
      const timeOut = setTimeout(() => {
        axios
          .get('/block')
          .then((res) => {
            console.log(res.data.result, 'collective block');
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

  const handleUpdate = () => {
    console.log('update');
  };

  const handleDelete = () => {
    try {
      axios
        .delete(`/block/${id}`)
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

  const handleView = () => {
    console.log('view');
  };

  const falseCondition = () => {
    setTurnOff(true);
  };

  useEffect(() => {
    if (turnOff) {
      setShowDelete(false);
      getData();
      const timeOut = setTimeout(() => {
        setTurnOff(false);
        return () => clearTimeout(timeOut);
      }, 1000);
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
        {(field.length === 0 || turnOff) && showSpinner}
        <TableHead title={title} />
        <Table heading={heading}>
          {field &&
            field.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-2">{item.blockName}</td>
                <td className="px-6 py-2">{item.prison.name}</td>
                <td className="px-6 py-2">{item.capacity}</td>
                <td className="px-6 py-2">{item.currentOccupancy}</td>
                <td className="px-6 py-2">
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setId(item.id);
                        handleView();
                      }}
                    >
                      <AiOutlineEye
                        className="text-blue-500 text-xl cursor-pointer"
                        title="View"
                      />
                    </button>
                    <button
                      onClick={() => {
                        setId(item.id);
                        handleUpdate();
                      }}
                    >
                      <BsPencilSquare
                        className="text-green-500 "
                        title="Update"
                      />
                    </button>
                    <button
                      onClick={() => {
                        setId(item.id);
                        setShowDelete(true);
                      }}
                    >
                      <BsTrash className="text-red-500" title="Delete" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </Table>
      </div>
    </Page>
  );
};
export default Index;
