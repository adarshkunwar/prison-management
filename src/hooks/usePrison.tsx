import axios from '@axios/axios';
import { useEffect, useState } from 'react';

const UsePrison = () => {
  const [prison, setPrison] = useState([]);

  useEffect(() => {
    const timout = setTimeout(() => {
      axios
        .get('/prison')
        .then((res) => {
          setPrison(res.data.result);
        })
        .catch((err) => {
          throw new Error(err);
        });
      return () => clearTimeout(timout);
    }, 1000);
  }, []);

  return prison;
};

export default UsePrison;
