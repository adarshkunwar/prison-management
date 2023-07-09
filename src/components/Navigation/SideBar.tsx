import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [showOptions, setShowOptions] = useState<string | null>();

    const toggleOption = (name: string) => {
        if (showOptions === name) {
            setShowOptions(null);
        } else {
            setShowOptions(name);
        }
    };

    const fields = [
      {
        icon: null,
        label: 'Dashboard',
        path: '/',
      },
      {
        icon: null,
        label: 'Prisoner',
        options: [
          {
            icon: null,
            label: 'View Prisoner',
            path: '/prisoner',
          },
          {
            icon: null,
            label: 'Add Prisoner',
            path: '/new-prisoner',
          },
        ],
      },
      {
        icon: null,
        label: 'Visitors',
        options: [
          {
            icon: null,
            label: 'View Visitors',
            path: '/visitors',
          },
          {
            icon: null,
            label: 'Add Visitors',
            path: '/new-visitors',
          },
        ],
      },
      {
        icon: null,
        label: 'Staff',
        options: [
          {
            icon: null,
            label: 'View Staff',
            path: '/staff',
          },
          {
            icon: null,
            label: 'Add Staff',
            path: '/new-staff',
          },
        ],
      },
      {
        icon: null,
        label: 'Cell',
        options: [
          {
            icon: null,
            label: 'View Cell',
            path: '/cell',
          },
          {
            icon: null,
            label: 'Add Cell',
            path: '/new-cell',
          },
        ],
      },
      {
        icon: null,
        label: 'Block',
        options: [
          {
            icon: null,
            label: 'View Block',
            path: '/block',
          },
          {
            icon: null,
            label: 'Add Block',
            path: '/new-block',
          },
        ],
      },
      {
        icon: null,
        label: 'Prison',
        options: [
          {
            icon: null,
            label: 'View Prison',
            path: '/prison',
          },
          {
            icon: null,
            label: 'Add Prison',
            path: '/new-prison',
          },
        ],
      },
      // {
      //   icon: null,
      //   label: 'Incidents',
      //   options: [
      //     {
      //       icon: null,
      //       label: 'View Incidents',
      //       path: '/incidents',
      //     },
      //     {
      //       icon: null,
      //       label: 'Add Incidents',
      //       path: '/new-incidents',
      //     },
      //   ],
      // },
      // {
      //   icon: null,
      //   label: 'MedicalReports',
      //   options: [
      //     {
      //       icon: null,
      //       label: 'View Medical Reports',
      //       path: '/medicalReports',
      //     },
      //     {
      //       icon: null,
      //       label: 'Add Medical Reports',
      //       path: '/new-medicalReports',
      //     },
      //   ],
      // },
    ];

    return (
      <div className="">
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 dark:bg-gray-800 z-50 border-r border-black"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="p-8 font-bold text-2xl">LOGO</div>
              <ul className="space-y-2 font-medium">
                {/* Sidebar items */}
                {fields.map((field, index) => (
                  <li key={index}>
                    {field.options ? (
                      <>
                        <div
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer"
                          onClick={() => toggleOption(field.label)}
                        >
                          <span className="flex-1 ml-3">{field.label}</span>
                        </div>
                        {showOptions === field.label && (
                          <ul className="space-y-2 pl-4">
                            {field.options.map((option, optionIndex) => (
                              <li key={optionIndex}>
                                <Link
                                  to={option.path}
                                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
                                >
                                  <span className="flex-1 ml-3">
                                    {option.label}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        to={field.path}
                        onClick={() => setShowOptions(null)}
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
                      >
                        {/* <span className="flex-shrink-0 w-6 h-6 mr-3">
                      {field.icon}
                    </span> */}
                        <span className="flex-1 ml-3">{field.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>User</div>
          </div>
        </aside>
      </div>
    );
};

export default SideBar;
