import { cookies } from "next/headers";
import request from "./libs/request";
import { IUser, TUseAuthSSRReturn } from "./types";

export default async function useAuthSSR(): Promise<TUseAuthSSRReturn> {
  const token = cookies().get("accessToken")?.value;

  // don't have a token
  if (!token) {
    return { user: null, status: "unauthorized" };
  }

  // have a token
  try {
    const response = await request.authUser(token);
    // an unauthorized user
    if (response.status !== 200) {
      return { user: null, status: "unauthorized" };
    }

    // if user is authorized
    const data = await response.json();
    const user = data.user as unknown as IUser;
    return { user, status: "authorized" };
  } catch {
    return { user: null, status: "unauthorized" };
  }
}
