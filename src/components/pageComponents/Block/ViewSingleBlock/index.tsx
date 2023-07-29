import React, { useCallback, useEffect, useState } from 'react';
// types
import {
  viewSingleBlock,
  viewSingleBlockProps,
} from '@src/types/Block/viewBlock';
// components
import Table from '@UI/ViewTable';
// axios
import axios from '@axios/axios';

const Index: React.FC<viewSingleBlockProps> = ({ id }) => {
  const [singlePrison, setSinglePrison] = useState<viewSingleBlock>();
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  const cell = ['name', 'capacity', 'currentOccupancy'];

  const getData = useCallback(() => {
    setShowSpinner(true);
    const timeout = setTimeout(() => {
      try {
        axios
          .get(`/block/${id}`)
          .then((res) => {
            console.log(res.data.result);
            setSinglePrison(res.data.result);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      } finally {
        setShowSpinner(false);
      }
      return clearTimeout(timeout);
    }, 1000);
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      {showSpinner ? (
        <div>loading...</div>
      ) : singlePrison ? (
        <div className="flex flex-col gap-5">
          <div className="text-left">
            <div className="flex items-baseline gap-5">
              {/* <div className="text-sm text-gray-500">Name:</div> */}
              <div className="text-2xl font-semibold text-accent">
                {singlePrison.name}
              </div>
            </div>
            <div className="flex items-baseline gap-5">
              {/* <div className="text-sm text-gray-500">Address:</div> */}
              <div className="text-md">{singlePrison.totalCell}</div>
            </div>
            <div className="flex items-baseline gap-5">
              {/* <div className="text-sm text-gray-500">Capacity:</div> */}
              <div className="text-md">
                {singlePrison.currentOccupancy} / {singlePrison.capacity}
              </div>
            </div>
          </div>
          <div className="text-left">
            {singlePrison.cells.length > 0 ? (
              <div>
                <div className="text-xl font-semibold text-accent">Cells </div>
                <Table heading={cell}>
                  {singlePrison.cells.map((val, i) => {
                    return (
                      <tr key={i}>
                        <td className="pl-2 border">{val.name}</td>
                        <td className="pl-2 border">{val.currentOccupancy}</td>
                        <td className="pl-2 border">{val.capacity}</td>
                      </tr>
                    );
                  })}
                </Table>
              </div>
            ) : (
              <div className="text-xl font-semibold text-accent">
                No Cell Found
              </div>
            )}
          </div>
          <div className="text-left"></div>
        </div>
      ) : (
        <div>Some Error Ocuured, the prison could not be found</div>
      )}
    </div>
  );
};

export default Index;
