import axios from '@axios/axios';
import { useEffect, useState } from 'react';

const UseBlock = () => {
  const [block, setBlock] = useState();

  useEffect(() => {
    axios
      .get('/block')
      .then((res) => {
        setBlock(res.data.result);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return block;
};

export default UseBlock;
