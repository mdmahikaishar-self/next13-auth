import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import request from "./libs/request";
import shouldRedirect from "./utlis/shouldRedirect";

export default async function helpOnSSR() {
  const token = cookies().get("accessToken")?.value;
  const needRedirect = shouldRedirect("");

  // don't have a token
  if (!token) {
    if (!needRedirect.should) return;
    redirect(needRedirect.path);
  }

  // have a token
  try {
    const response = await request.authUser(token);

    // an unauthorized user
    if (response.status !== 200) {
      if (!needRedirect.should) return;
      redirect(needRedirect.path);
    }
  } catch {
    if (!needRedirect.should) return;
    redirect(needRedirect.path);
  }
}
