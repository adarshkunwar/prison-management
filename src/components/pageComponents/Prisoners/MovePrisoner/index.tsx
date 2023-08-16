import React, { useCallback, useEffect, useState } from 'react';

import axios from '@axios/axios';
import { BlockSimple, CellSimple, PrisonSimple } from '@src/types/Data';
import { toast } from 'react-hot-toast';

type Props = {
  id: string;
};

const Index: React.FC<Props> = ({ id }) => {
  const [prisonArr, setPrisonArr] = useState<PrisonSimple[]>([]);
  const [chosenPrison, setChosenPrison] = useState('');
  const [BlockArr, setBlockArr] = useState<BlockSimple[]>();
  const [chosenBlock, setChosenBlock] = useState('');
  const [CellArr, setCellArr] = useState<CellSimple[]>();
  const [chosenCell, setChosenCell] = useState('');

  const getPrison = useCallback(() => {
    axios
      .get('/prison')
      .then((res) => {
        setPrisonArr(res.data.result);
      })
      .catch((err) => {
        toast.error('Prison could not be loaded');
        console.log(err);
      });
  }, []);

  const getBlock = useCallback(() => {
    try {
      axios
        .get(`/prison/${chosenPrison}`)
        .then((res) => setBlockArr(res.data.result.blocks))
        .catch((err) => toast.error(err.message));
    } catch (err) {
      console.log(err);
    }
  }, [chosenPrison]);

  const getCell = useCallback(() => {
    axios
      .get(`/block/${chosenBlock}`)
      .then((res) => setCellArr(res.data.result.cells))
      .catch((err) => {
        toast.error('Cells could not be loaded');
        console.log(err);
      });
  }, [chosenBlock]);

  useEffect(() => {
    getPrison();
  }, [getPrison]);

  useEffect(() => {
    getBlock();
  }, [getBlock]);

  useEffect(() => {
    if (chosenBlock) {
      getCell();
    }
  }, [getCell, chosenBlock]);
  return (
    <div>
      <div>
        <select
          name="prison"
          id="prison"
          onChange={(e) => {
            setChosenPrison(e.target.value);
          }}
        >
          <option value="">Choose Prison</option>
          {prisonArr.map((prison) => (
            <option key={prison.id} value={prison.id}>
              {prison.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          name="block"
          id="block"
          onChange={(e) => {
            setChosenBlock(e.target.value);
          }}
        >
          <option value="">Choose Block</option>
          {BlockArr?.map((block) => (
            <option value={block.id} key={block.id}>
              {block.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          name="cell"
          id="cell"
          onChange={(e) => {
            setChosenCell(e.target.value);
          }}
        >
          <option value="">Choose Cell</option>
          {CellArr?.map((cell) => (
            <option key={cell.id} value={cell.id}>
              {cell.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button
          onClick={() => {
            axios
              .put(`/prisoner/${id}`, {
                cell: chosenCell,
              })
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => {
                throw new Error(err);
              });
          }}
        >
          Move Prisoner
        </button>
      </div>
    </div>
  );
};

export default Index;
