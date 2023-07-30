import Table from '@UI/ViewTable';
import { CellWithBlock, CellWithBlockProps } from '@src/types/Cell/viewCell';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'src/HOC/axios/axios';

const Index: React.FC<CellWithBlockProps> = ({ id }) => {
  const [singleCell, setSingleCell] = useState<CellWithBlock>();
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  const Block = ['Block Name', 'Current Occupancy', 'Capacity', 'Total Cell'];
  // const prisoner = ['']

  const getData = useCallback(() => {
    setShowSpinner(true);
    const timeout = setTimeout(() => {
      try {
        axios
          .get(`/cell/${id}`)
          .then((res) => {
            console.log(res.data.result);
            setSingleCell(res.data.result);
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
      ) : singleCell ? (
        <div className="flex flex-col gap-5">
          <div className="text-left">
            <div className="flex items-baseline gap-5">
              {/* <div className="text-sm text-gray-500">Name:</div> */}
              <div className="text-2xl font-semibold text-accent">
                {singleCell?.name}
              </div>
            </div>
            <div className="flex items-baseline gap-5">
              {/* <div className="text-sm text-gray-500">Address:</div> */}
              <div className="text-md">{singleCell?.status}</div>
            </div>
            <div className="flex items-baseline gap-5">
              {/* <div className="text-sm text-gray-500">Capacity:</div> */}
              <div className="text-md">
                {singleCell?.currentOccupancy} / {singleCell?.capacity}
              </div>
            </div>
          </div>
          <div className="text-left">
            {singleCell.prisoners.length > 0 ? (
              <div>
                <div>
                  <div className="text-xl font-semibold text-accent">
                    Blocks
                  </div>
                </div>
                <Table heading={Block}>
                  {singleCell.prisoners.map((val, i) => {
                    return (
                      <tr key={i}>
                        <td className="pl-2 py-2 border">
                          {val.firstName} + {val.lastName}
                        </td>
                        <td className="pl-2 border">{val.dateOfAdmission}</td>
                        <td className="pl-2 border">{val.dateOfRelease}</td>
                        <td className="pl-2 border">{val.crime}</td>
                        <td className="pl-2 border">{val.latestVisit}</td>
                      </tr>
                    );
                  })}
                </Table>
              </div>
            ) : (
              <div className="text-xl font-semibold text-accent">No Prison</div>
            )}
          </div>
        </div>
      ) : (
        <div>Some Error Ocuured, the prison could not be found</div>
      )}
    </div>
  );
};

export default Index;
