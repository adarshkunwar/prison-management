import axios from '@axios/axios';
import { useEffect, useState } from 'react';

type props = { id: string };

const UseSinglePrisoner = ({ id }: props) => {
  const [prisoner, setPrisoner] = useState([]);

  const handleDelete = ({ id }: props) => {
    const prisoner = axios.get(`/prisoner/${id}`);
    if (!prisoner) throw new Error('Prisoner not found');

    axios.delete(`/cell/${id}`).then((res) => {
      setPrisoner(res.data.result);
    });
  };

  useEffect(() => {
    axios
      .get(`/prisoner/${id}`)
      .then((res) => {
        setPrisoner(res.data.result);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [id]);

  return { prisoner, handleDelete };
};

export default UseSinglePrisoner;
