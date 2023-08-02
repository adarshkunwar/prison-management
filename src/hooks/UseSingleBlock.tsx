import axios from '@axios/axios';
import { useEffect, useState } from 'react';

type props = {
  id: string;
};

const UseSinglePrison = ({ id }: props) => {
  const [block, setBlock] = useState();

  useEffect(() => {
    axios
      .get(`/block/${id}`)
      .then((res) => {
        setBlock(res.data.result);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [id]);

  const handleDelete = (id: string) => {
    axios
      .delete(`/block/${id}`)
      .then((res) => {
        setBlock(res.data.result);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return { block, handleDelete };
};

export default UseSinglePrison;
