import axios from '@axios/axios';
import { useEffect, useState } from 'react';

type props = { id: string };

const UseSingleVisitors = ({ id }: props) => {
  const [visitors, setVisitors] = useState([]);

  const handleDelete = ({ id }: props) => {
    const findVisitors = axios.get(`/visitors/${id}`);
    if (!findVisitors) throw new Error('visitor not found');

    axios.delete(`/cell/${id}`).then((res) => {
      setVisitors(res.data.result);
    });
  };

  useEffect(() => {
    axios
      .get(`/visitors/${id}`)
      .then((res) => {
        setVisitors(res.data.result);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [id]);

  return { visitors, handleDelete };
};

export default UseSingleVisitors;
