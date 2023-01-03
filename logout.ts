import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import shouldRedirect from "./utlis/shouldRedirect";

export default async function logout(wantRedirect: boolean = false) {
  const cookie = cookies();
  cookie.set("accessToken", "");

  const needRedirect = shouldRedirect("");

  if (wantRedirect && needRedirect.should) {
    redirect(needRedirect.path);
  }
}
