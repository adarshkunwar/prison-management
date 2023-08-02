import axios from '@axios/axios';
import { useEffect, useState } from 'react';

type props = {
  id: string;
};

const UseSinglePrison = ({ id }: props) => {
  const [prison, setPrison] = useState([]);

  useEffect(() => {
    axios.get(`/prison/${id}`).then((res) => {
      setPrison(res.data.result);
    });
  }, [id]);

  return prison;
};

export default UseSinglePrison;
