import React, { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const UserAuthContext = createContext({
  name: '',
  token: '',
});

type UserAuthContextApiProps = {
  children: React.ReactNode;
};

const UserAuthContextApi = ({ children }: UserAuthContextApiProps) => {
  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const location = useLocation().pathname;

  /*
    TODO: THIS IS FILTER CODE FROM JIVAN
  const handleSearch = useCallback(() => {
    const filteredInfo = info.filter((val) => {
      const nameMatch = (
        val.first_name +
        " " +
        val.middle_name +
        " " +
        val.last_name
      )
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const positionMatch = val.position
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return nameMatch || positionMatch;
    });

    setFilteredData(filteredInfo);
  }, [info, */

  /* 
TODO: THIS IS THE CODE TO RESET THE FORM AFTER SUBMIT FROM SUSHANT
    onSubmit=({resetForm})=>{
resetForm();

  */

  useEffect(() => {
    const storedToken = localStorage.getItem('token1');
    const storedName = localStorage.getItem('user');
    if (storedToken) {
      setToken(storedToken);
      setName(storedName || '');
      if (location === '/login') {
        navigate('/');
      }
    } else {
      navigate('/login');
    }
  }, [location, navigate]); // empty dependency array to run effect only once on mount

  return (
    <UserAuthContext.Provider value={{ token, name }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextApi;
