import React, { createContext, useState, useContext, useCallback } from 'react';

const UserContext = createContext();


export function UserProvider({ children }) {
    const [user, setUser] = useState({
      name: '',
      email: '',
      option: 'Home',
      // outros dados do usuário que você precisa
    });
  
    const updateUser = useCallback((userData) => {
      setUser(prevUser => ({
        ...prevUser,
        ...userData
      }));
    }, []);
  
    const value = React.useMemo(() => ({
      user,
      updateUser
    }), [user, updateUser]);
  
    return (
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    );
  }

// Hook personalizado para usar o contexto
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context;
}