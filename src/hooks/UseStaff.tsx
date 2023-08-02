import axios from '@axios/axios';
import { useEffect, useState } from 'react';

const UseStaff = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    axios
      .get('/block')
      .then((res) => {
        setStaff(res.data.result);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return staff;
};

export default UseStaff;
