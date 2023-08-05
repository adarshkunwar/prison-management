import { useState } from 'react';
// import { BsChevronDown } from 'react-icons/bs';

// type OptionProps = {
//   icon: null | JSX.Element | string;
//   label: string;
// };

type props = {
  title?: string;
  selectedText?: string;
};

// const options: OptionProps[] = [
//   {
//     icon: null,
//     label: 'Today',
//   },
//   {
//     icon: null,
//     label: 'Yesterday',
//   },
//   {
//     icon: null,
//     label: 'Last Week',
//   },
//   {
//     icon: null,
//     label: 'Last Month',
//   },
//   {
//     icon: null,
//     label: 'Last Year',
//   },
//   {
//     icon: null,
//     label: 'All time',
//   },
// ];

const Index = ({ title, selectedText }: props) => {
  // const [showDropdown, setShowDropdown] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(options[2]);

  // const handleOptionChange = (option: OptionProps) => {
  //   setSelectedOption(option);
  //   setShowDropdown(false);
  // };

  return (
    <div>
      <h1 className="text-3xl py-5 font-semibold">{title}</h1>
      <div className="flex items-center justify-end pb-4">
        {/* <div className="relative">
          <button
            id="dropdownRadioButton"
            data-dropdown-toggle="dropdownRadio"
            className="inline-flex items-center text-blue-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <div className="flex gap-2">
              {selectedOption.icon && (
                <span className="flex-shrink-0 w-4 h-4 mr-2">
                  {selectedOption.icon}
                </span>
              )}
              {selectedOption.label}
            </div>
            <BsChevronDown
              className={`w-3 h-3 ml-2 transition-all duration-200 ease-out ${
                showDropdown === true ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>
          {showDropdown && (
            <div
              id="dropdownRadio"
              className="z-10 absolute w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              data-popper-reference-hidden=""
              data-popper-escaped=""
              data-popper-placement="top"
              style={{
                top: 'calc(100% + 0.5rem)',
                left: 0,
              }}
            >
              <ul
                className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownRadioButton"
              >
                {options.map((option) => (
                  <li key={option.label}>
                    <div
                      className={`flex items-center px-5 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 ${
                        option === selectedOption
                          ? 'bg-gray-100 dark:bg-gray-600'
                          : ''
                      }`}
                      onClick={() => handleOptionChange(option)}
                    >
                      <input
                        id={`filter-radio-${option.label}`}
                        type="radio"
                        value=""
                        name="filter-radio"
                        checked={selectedOption === option}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={`filter-radio-${option.label}`}
                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        {option.label}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div> */}
        {/* <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
            onChange={(e) => console.log(e.target.value)}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Index;
