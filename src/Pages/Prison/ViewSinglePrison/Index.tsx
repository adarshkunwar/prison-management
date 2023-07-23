import React, { useCallback, useEffect, useState } from 'react';
import axios from 'src/HOC/axios/axios';

type Props = {
  id: string;
};

type fields = {
  id: string;
  name: string;
  address: string;
  capacity: number;
  currentOccupancy: number;
};

const Index: React.FC<Props> = ({ id }) => {
  const [singlePrison, setSinglePrison] = useState<fields[]>([]);

  const getData = useCallback(() => {
    try {
      axios
        .get(`/prison/${id}`)
        .then((res) => {
          console.log(res.data.result);
          setSinglePrison(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      {singlePrison.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.address}</div>
            <div>{item.capacity}</div>
            <div>{item.currentOccupancy}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
