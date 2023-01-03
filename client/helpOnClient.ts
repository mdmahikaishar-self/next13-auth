"use client";
import { usePathname, useRouter } from "next/navigation";
import shouldRedirect from "../utlis/shouldRedirect";
import { useAuthContext } from "./context";

export default function helpOnAuth(): void {
  const router = useRouter();
  const authContext = useAuthContext();
  const needRedirect = shouldRedirect(usePathname() || "");

  if (!authContext.user) {
    if (!needRedirect.should) return;
    router.push(needRedirect.path);
  }
}
