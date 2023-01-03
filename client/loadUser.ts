"use client";
import jsCookie from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import request from "../libs/request";
import { IUser } from "../types";
import shouldRedirect from "../utlis/shouldRedirect";
import { useAuthContext } from "./context";

export default async function logout(): Promise<void> {
  const router = useRouter();
  const authContext = useAuthContext();
  const needRedirect = shouldRedirect(usePathname() || "");

  const token = jsCookie.get("accessToken");
  if (!token) {
    if (!needRedirect.should) return;
    router.push(needRedirect.path);
  }

  try {
    // make request for get auth user
    const response = await request.authUser(token);

    // an unauthorized user
    if (response.status !== 200) {
      if (!needRedirect.should) return;
      router.push(needRedirect.path);
    }

    // authorized user
    const data = await response.json();
    const user = data.user as unknown as IUser;
    authContext.setAuth({ user, status: "authorized" });
  } catch {
    // an unauthorized user
    if (!needRedirect.should) return;
    router.push(needRedirect.path);
  }
}
