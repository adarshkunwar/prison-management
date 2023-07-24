import React, { useCallback, useEffect, useState } from 'react';
// types
import {
  ViewSinglePrison,
  ViewSinglePrisonProps,
} from '@src/types/Prison/viewPrison';
// components
import List from '@UI/List/List';
// axios
import axios from '@axios/axios';

const Index: React.FC<ViewSinglePrisonProps> = ({ id }) => {
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
            <div className="flex items-baseline gap-5">
              {/* <div className="text-sm text-gray-500">Name:</div> */}
              <div className="text-2xl font-semibold text-accent">
                {singlePrison.name}
              </div>
            </div>
            <div className="flex items-baseline gap-5">
              {/* <div className="text-sm text-gray-500">Address:</div> */}
              <div className="text-md">{singlePrison.address}</div>
            </div>
            <div className="flex items-baseline gap-5">
              {/* <div className="text-sm text-gray-500">Capacity:</div> */}
              <div className="text-md">
                {singlePrison.capacity} / {singlePrison.capacity}
              </div>
            </div>
            <div className="flex items-baseline gap-5">
              {/* <div className="text-sm text-gray-500">Description:</div> */}
              <div className="text-md">{singlePrison.description}</div>
            </div>
            {/* <div>Address : {singlePrison.address}</div>
            <div>capacity: {singlePrison.capacity}</div>
            <div>Current Occupancy: {singlePrison.currentOccupancy}</div>
            <div>Description: {singlePrison.description}</div> */}
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
