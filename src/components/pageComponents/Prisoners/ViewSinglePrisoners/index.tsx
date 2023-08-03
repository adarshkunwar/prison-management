import Table from '@UI/ViewTable';
import { PrisonerSimple } from '@src/types/Data';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'src/HOC/axios/axios';

interface ViewSinglePrisonerProps {
  id: string;
}

const Index: React.FC<ViewSinglePrisonerProps> = ({ id }) => {
  const [singlePrison, setSinglePrison] = useState<PrisonerSimple>();
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  const visitors = ['name', 'contact', 'address', 'relation', 'visitDate'];
  const getData = useCallback(() => {
    setShowSpinner(true);
    const timeout = setTimeout(() => {
      try {
        axios
          .get(`/prisoner/${id}`)
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
              <div className="w-40 h-40 rounded-full overflow-hidden object-cover bg-red-300">
                {singlePrison.image ? (
                  <img
                    src={`http://localhost:8080/public/${singlePrison.image}`}
                    alt="prisoner"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  'No Image'
                )}
              </div>
            </div>
            <div className="text-2xl font-semibold text-accent mt-5">
              {singlePrison?.firstName + ' ' + singlePrison?.lastName}
            </div>
            <div className="flex items-baseline gap-5">
              <div className="text-md">{singlePrison?.address}</div>
            </div>
            <div className="flex items-baseline gap-5">
              <div className="text-md">{singlePrison?.crime}</div>
            </div>
            <div className="flex items-baseline gap-5">
              <div className="text-md">{singlePrison?.contactNumber}</div>
            </div>
          </div>
          {/* TODO: uncomment this after you add visitors */}
          <div className="text-left">
            {singlePrison.visitors ? (
              <div>
                <div>
                  <div className="text-xl font-semibold text-accent">
                    Visitors
                  </div>
                </div>
                <Table heading={visitors}>
                  {singlePrison.visitors.map((val, i) => {
                    return (
                      <tr key={i}>
                        <td className="pl-2 py-2 border">
                          {val.firstName} {val.lastName}
                        </td>
                        <td className="pl-2 border">{val.contactNumber}</td>
                        <td className="pl-2 border">{val.address}</td>
                        <td className="pl-2 border">{val.relation}</td>
                        <td className="pl-2 border">{val.dateOfVisit}</td>
                      </tr>
                    );
                  })}
                </Table>
              </div>
            ) : (
              <div className="text-xl font-semibold text-accent">
                No Visitors
              </div>
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
