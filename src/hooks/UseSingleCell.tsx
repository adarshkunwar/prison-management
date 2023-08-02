import axios from '@axios/axios';
import { useEffect, useState } from 'react';

type props = { id: string };

const UseSingleCell = ({ id }: props) => {
  const [cell, setCell] = useState([]);

  const handleDelete = ({ id }: props) => {
    const findCell = axios.get(`/cell/${id}`);
    if (!findCell) throw new Error('Cell not found');

    axios.delete(`/cell/${id}`).then((res) => {
      setCell(res.data.result);
    });
  };

  useEffect(() => {
    axios
      .get(`/cell/${id}`)
      .then((res) => {
        setCell(res.data.result);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [id]);

  return { cell, handleDelete };
};

export default UseSingleCell;
