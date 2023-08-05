import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserAuthContext = createContext({
  name: '',
  tkn: '',
});

type UserAuthContextApiProps = {
  children: React.ReactNode;
};

const UserAuthContextApi = ({ children }: UserAuthContextApiProps) => {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token1');

    if (storedToken) {
      setToken(storedToken);
      navigate('/');
    } else {
      navigate('/login');
    }
  }, []); // empty dependency array to run effect only once on mount

  return (
    <UserAuthContext.Provider
      value={{
        name: 'jivan',
        tkn: token || '',
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextApi;
