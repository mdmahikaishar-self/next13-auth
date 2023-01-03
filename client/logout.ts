"use client";
import jsCookie from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import shouldRedirect from "../utlis/shouldRedirect";
import { useAuthContext } from "./context";

export default function logout(): void {
  const router = useRouter();
  const authContext = useAuthContext();
  const needRedirect = shouldRedirect(usePathname() || "");

  jsCookie.set("accessToken", "");
  authContext.setAuth({ user: null, status: "unauthorized" });

  if (!needRedirect.should) return;
  router.push(needRedirect.path);
}
