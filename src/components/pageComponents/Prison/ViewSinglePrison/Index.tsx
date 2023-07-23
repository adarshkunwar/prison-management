import List from '@UI/List/List';
import { ViewSinglePrison } from '@src/types/Prison/viewPrison';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'src/HOC/axios/axios';
type Props = {
  id: string;
};

const Index: React.FC<Props> = ({ id }) => {
  const [singlePrison, setSinglePrison] = useState<ViewSinglePrison>();
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  const Block = ['capacity', 'currentOccupancy', 'blockName'];
  const staff = ['name', 'designation', 'contact', 'salary', 'address'];

  const getData = useCallback(() => {
    setShowSpinner(true);
    const timeout = setTimeout(() => {
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
            <div>Name: {singlePrison.name}</div>
            <div>Address : {singlePrison.address}</div>
            <div>capacity: {singlePrison.capacity}</div>
            <div>Current Occupancy: {singlePrison.currentOccupancy}</div>
          </div>
          <div className="text-left">
            <List title="Blocks" heading={Block}>
              {singlePrison.blocks.map((val, i) => {
                return (
                  <tr key={i}>
                    <td className="pl-2 border">{val.capacity}</td>
                    <td className="pl-2 border">{val.currentOccupancy}</td>
                    <td className="pl-2 border">{val.blockName}</td>
                  </tr>
                );
              })}
            </List>
          </div>
          <div className="text-left">
            <List title="Staff" heading={staff}>
              {singlePrison.staffs.map((val, i) => {
                return (
                  <tr key={i}>
                    <td className="pl-2 border pr-5">
                      {val.firstName + ' ' + val.lastName}
                    </td>
                    <td className="pl-2 border pr-5">{val.designation}</td>
                    <td className="pl-2 border pr-5">{val.contactNumber}</td>
                    <td className="pl-2 border pr-5">{val.salary}</td>
                    <td className="pl-2 border pr-5">{val.address}</td>
                  </tr>
                );
              })}
            </List>
          </div>
        </div>
      ) : (
        <div>Some Error Ocuured, the prison could not be found</div>
      )}
    </div>
  );
};

export default Index;
