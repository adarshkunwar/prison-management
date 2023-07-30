import React from 'react';
import { RxCross1 } from 'react-icons/rx';
type Props = {
  children: React.ReactNode;
  failCondition: () => void;
};

const Index: React.FC<Props> = ({ failCondition, children }) => {
  const fail = () => {
    failCondition();
  };

  return (
    <div
      className="fixed right-0 left-0 bottom-0 top-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50"
      onClick={fail}
    >
      <div
        className="relative z-10 bg-white rounded-lg shadow-md dark:bg-gray-700"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="absolute top-3 right-2.5 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center">
          <button onClick={fail}>
            <RxCross1 />
          </button>
        </div>
        <div className="p-6 text-center">
          <div className="pt-5 flex justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
