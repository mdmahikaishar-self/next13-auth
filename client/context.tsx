"use client";
import { createContext, useContext, useState } from "react";
import { IAuth, IAuthContext, IAuthContextProvider, IUser } from "../types";

const AuthContext = createContext({} as IAuthContext);

export function AuthContextProvider(props: IAuthContextProvider) {
  const [auth, setAuth] = useState<IAuth>(props.auth);

  return (
    <AuthContext.Provider value={{ ...auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
