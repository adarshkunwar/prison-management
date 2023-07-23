import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fields } from './SideBar/Sidebarfields';

const SideBar = () => {
  const [showOptions, setShowOptions] = useState<string | null>();

  // router
  const router = useLocation();
  console.log(router.pathname);

  // toggle options
  const toggleOption = (name: string) => {
    if (showOptions === name) {
      setShowOptions(null);
    } else {
      setShowOptions(name);
    }
  };

  // styles
  const simpleStyle = `flex items-center p-2 text-gray-900 rounded-lg text-primary cursor-pointer`;
  const hoverStyle = `hover:bg-accent hover:text-secondary`;
  const activeStyle = `w-full bg-accent text-secondary p-2 rounded-lg`;

  return (
    <div className="">
      <aside className="fixed top-0 left-0 w-64 h-screen translate-x-0 bg-secondary z-50 border-r border-black">
        <div className="h-full px-3 py-4 overflow-y-auto flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="p-8 font-bold text-2xl text-accent">
              Prison Management System
            </div>
            <ul className="space-y-2 font-medium">
              {/* Sidebar items */}
              {fields.map((field, index) => (
                <li key={index}>
                  {field.options ? (
                    <>
                      <div
                        className={`${
                          field.label === showOptions
                            ? activeStyle
                            : simpleStyle
                        } ${hoverStyle}`}
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
                                className={`${simpleStyle} ${hoverStyle}`}
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
                      className={`${simpleStyle} ${hoverStyle} ${
                        router.pathname === field.path ? activeStyle : ''
                      }`}
                    >
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
