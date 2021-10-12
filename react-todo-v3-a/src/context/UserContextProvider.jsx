import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const propsData = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider propsData={propsData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
