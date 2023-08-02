import axios from '@axios/axios';
import { CellSimple } from '@src/types/Data';
import { useEffect, useState } from 'react';
const UseCell = () => {
  const [cell, setCell] = useState([]);

  useEffect(() => {
    axios
      .get('/cell')
      .then((res) => {
        setCell(res.data.result);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return cell as CellSimple[];
};

export default UseCell;
