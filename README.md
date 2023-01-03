# Next13 Auth
it's a mini library that's provide you an authication system in your app.

```

### Set 1:

Replace your layout page with this code

```ts
# app/layout.tsx;
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
```

### Set 2:

Every serverside page us this utily

```ts
import { helpOnSSR } from "../../auth";

export default async function Profile() {
  await helpOnSSR();

  return <main className={""}>Profile</main>;
}
```

## Use the auth context

```ts
"use client";
import react from "react";
import { useAuthContext } from "../auth/client";

export default function Home() {
  const authContext = useAuthContext();

  return (
    <main className={""}>
      <h1>Home</h1>
      <br />
      <h3>{authContext.user?.name}</h3>
      {authContext.status}
    </main>
  );
}
```
