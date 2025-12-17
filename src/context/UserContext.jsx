import React, { createContext, useState } from 'react'

const UserContext = createContext();

const UserProvider = ({children}) => {
    
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const login = ()=>setIsLoggedIn(true);
  const logout = ()=>setIsLoggedIn(false);
  const signUp = ()=>setIsSignUp(true);
  const signOut = ()=>setIsSignUp(false);
  return (
    <UserContext.Provider value={{isLoggedIn,isSignUp,login,logout,signUp,signOut}}>
        {children}
    </UserContext.Provider>
  )
}

export {UserContext,UserProvider}