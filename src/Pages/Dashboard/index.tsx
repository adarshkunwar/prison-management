import axios from '@axios/axios';
import { PrisonSimple } from '@src/types/Data';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, { useCallback, useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { toast } from 'react-hot-toast';

ChartJS.register(ArcElement, Tooltip, Legend);

const PrisonDashboard: React.FC = () => {
  const [prisonArr, setPrisonArr] = useState<PrisonSimple[]>([]);
  const [numberOfPrisoners, setNumberOfPrisoners] = useState<number>(0);
  const [numberOfVisitors, setNumberOfVisitors] = useState<number>(0);
  const [numberOfStaffs, setNumberOfStaffs] = useState<number>(0);
  const [numberOfPrisons, setNumberOfPrisons] = useState<number>(0);
  const [totalCapacity, setTotalCapacity] = useState<number>(0);

  const getPrisoners = useCallback(async () => {
    try {
      axios.get('/prisoner').then((res) => {
        console.log(res.data.result);
        setNumberOfPrisoners(res.data.result.length);
      });
    } catch (err) {
      return toast.error('Something went wrong while fetching prisoners');
    }
  }, []);

  const getVisitors = useCallback(async () => {
    try {
      axios.get('/visitor').then((res) => {
        console.log(res.data.result);
        setNumberOfVisitors(res.data.result.length);
      });
    } catch (err) {
      return toast.error('Something went wrong while fetching visitors');
    }
  }, []);

  const getStaff = useCallback(async () => {
    try {
      axios.get('/visitor').then((res) => {
        console.log(res.data.result);
        setNumberOfStaffs(res.data.result.length);
      });
    } catch (err) {
      return toast.error('Something went wrong while fetching visitors');
    }
  }, []);

  const getPrisons = useCallback(async () => {
    try {
      axios.get('/prison').then((res) => {
        console.log(res.data.result);
        setPrisonArr(res.data.result);
        setNumberOfPrisons(res.data.result.length);
      });
    } catch (err) {
      return toast.error('Something went wrong while fetching visitors');
    }
  }, []);

  useEffect(() => {
    getPrisoners();
    getVisitors();
    getStaff();
    getPrisons();
  }, [getPrisoners, getVisitors, getStaff, getPrisons]);

  useEffect(() => {
    if (totalCapacity === 0 && prisonArr.length > 0) {
      prisonArr.forEach((prison) => {
        setTotalCapacity((prev) => prev + prison.capacity);
      });
    }
  }, [prisonArr, numberOfPrisons, totalCapacity]);

  return (
    <div className="">
      <div className="grid grid-cols-4">
        <div className="w-full p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Total Prisoners</h2>
            <p className="text-3xl font-bold">{numberOfPrisoners}</p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Total Visitors</h2>
            <p className="text-3xl font-bold">{numberOfVisitors}</p>
          </div>
        </div>
        <div className="w-full  p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Total Prisons</h2>
            <p className="text-3xl font-bold">{numberOfPrisons}</p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Total Staffs</h2>
            <p className="text-3xl font-bold">{numberOfStaffs}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 p-4 gap-10">
        <div className=" w-full col-span-5 h-[30rem] flex justify-center">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>

            <div className="w-96 h-96">
              <Doughnut
                data={{
                  labels: ['Total capacity', 'current Occupancy'],
                  datasets: [
                    {
                      label: 'Prisoner Capacity',
                      data: [totalCapacity, numberOfPrisoners],
                      backgroundColor: [
                        'rgb(54, 162, 235)',
                        'rgb(255, 99, 132)',
                      ],
                      hoverOffset: 4,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
        <div className=" w-full col-span-4 h-96 ">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-full  p-4">
              <h2 className="text-xl font-semibold mb-4">Prison List</h2>
              <ul className="list-disc pl-6">
                {prisonArr.map((prison) => (
                  <li
                    key={prison.id}
                    className="hover:bg-secondary transition-all duration-300 px-5 py-1"
                  >
                    {prison.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrisonDashboard;
