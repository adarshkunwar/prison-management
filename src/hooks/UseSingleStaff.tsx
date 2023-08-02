import axios from '@axios/axios';
import { useEffect, useState } from 'react';

type props = { id: string };

const UseSingleStaff = ({ id }: props) => {
  const [staff, setStaff] = useState([]);

  const handleDelete = ({ id }: props) => {
    const findCell = axios.get(`/cell/${id}`);
    if (!findCell) throw new Error('Cell not found');

    axios.delete(`/staff/${id}`).then((res) => {
      setStaff(res.data.result);
    });
  };

  useEffect(() => {
    axios
      .get(`/cell/${id}`)
      .then((res) => {
        setStaff(res.data.result);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [id]);

  return { staff, handleDelete };
};

export default UseSingleStaff;
