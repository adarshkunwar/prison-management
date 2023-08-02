import axios from '@axios/axios';
import { useEffect, useState } from 'react';

const UseVisitors = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    axios.get('/block').then((res) => {
      setVisitors(res.data.result);
    });
  }, []);

  return visitors;
};

export default UseVisitors;
