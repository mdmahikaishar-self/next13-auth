import { helpOnSSR } from "../../auth";

export default async function Profile() {
  await helpOnSSR();

  return <main className={""}>Profile</main>;
}
