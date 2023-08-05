import Table from '@UI/ViewTable';
import {
  ViewSinglePrison,
  ViewSinglePrisonProps,
} from '@src/types/Prison/viewPrison';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'src/HOC/axios/axios';

const Index: React.FC<ViewSinglePrisonProps> = ({ id }) => {
  const [singlePrison, setSinglePrison] = useState<ViewSinglePrison>();
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  const Block = ['Block Name', 'Current Occupancy', 'Capacity', 'Total Cell'];
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
                {singlePrison?.name}
              </div>
            </div>
            <div className="flex items-baseline gap-5">
              {/* <div className="text-sm text-gray-500">Address:</div> */}
              <div className="text-md">{singlePrison?.address}</div>
            </div>
            <div className="flex items-baseline gap-5">
              {/* <div className="text-sm text-gray-500">Capacity:</div> */}
              <div className="text-md">
                {singlePrison?.currentOccupancy} / {singlePrison?.capacity}
              </div>
            </div>
            <div className="flex items-baseline gap-5">
              {/* <div className="text-sm text-gray-500">Description:</div> */}
              <div
                className="text-md"
                dangerouslySetInnerHTML={{ __html: singlePrison?.description }}
              />
            </div>
            {/* <div>Address : {singlePrison.address}</div>
            <div>capacity: {singlePrison.capacity}</div>
            <div>Current Occupancy: {singlePrison.currentOccupancy}</div>
            <div>Description: {singlePrison.description}</div> */}
          </div>
          <div className="text-left">
            {singlePrison.blocks.length > 0 ? (
              <div>
                <div>
                  <div className="text-xl font-semibold text-accent">
                    Blocks
                  </div>
                </div>
                <Table heading={Block}>
                  {singlePrison.blocks.map((val, i) => {
                    return (
                      <tr key={i}>
                        <td className="pl-2 py-2 border">{val.name}</td>
                        <td className="pl-2 border">{val.currentOccupancy}</td>
                        <td className="pl-2 border">{val.capacity}</td>
                        <td className="pl-2 border">{val.totalCell}</td>
                      </tr>
                    );
                  })}
                </Table>
              </div>
            ) : (
              <div className="text-xl font-semibold text-accent">No Blocks</div>
            )}
          </div>
          <div className="text-left">
            {singlePrison.staffs.length > 0 ? (
              <div>
                <div className="text-xl font-semibold text-accent">Staffs</div>
                <Table heading={staff}>
                  {singlePrison.staffs.map((val, i) => {
                    return (
                      <tr key={i}>
                        <td className="pl-2 border pr-5">
                          {val.firstName + ' ' + val.lastName}
                        </td>
                        <td className="pl-2 border pr-5">{val.designation}</td>
                        <td className="pl-2 border pr-5">
                          {val.contactNumber}
                        </td>
                        <td className="pl-2 border pr-5">{val.salary}</td>
                        <td className="pl-2 border pr-5">{val.address}</td>
                      </tr>
                    );
                  })}
                </Table>
              </div>
            ) : (
              <div className="text-xl font-semibold text-accent">No Staff</div>
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
