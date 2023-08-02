import axios from '@axios/axios';
import { useEffect, useState } from 'react';

const UsePrisoner = () => {
  const [prisoner, setPrisoner] = useState([]);

  useEffect(() => {
    axios
      .get('/block')
      .then((res) => {
        setPrisoner(res.data.result);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return prisoner;
};

export default UsePrisoner;
