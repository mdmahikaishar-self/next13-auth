export interface IUser {
  id: string;
  name: string;
  img: string;
}

export interface IAuth {
  user: IUser | null;
  status: "authorized" | "unauthorized";
}

export interface IAuthContext extends IAuth {
  setAuth: (auth: IAuth) => void;
}

export interface IAuthContextProvider {
  auth: TUseAuthSSRReturn;
  children: ReactNode;
}

export type TUseAuthSSRReturn =
  | {
      user: IUser;
      status: "authorized";
    }
  | { user: null; status: "unauthorized" };

export type TShouldRedirectReturn =
  | {
      should: false;
      path: "/";
    }
  | {
      should: true;
      path: "/auth/login";
    };
