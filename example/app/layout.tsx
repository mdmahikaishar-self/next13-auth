import { useAuthSSR } from "../auth";
import { AuthContextProvider } from "../auth/client";

interface IRootLayout {
  children: React.ReactNode;
}
export default async function RootLayout({ children }: IRootLayout) {
  const auth = await useAuthSSR();

  return (
    <html lang="en">
      <head />
      <body>
        <AuthContextProvider auth={auth}>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
