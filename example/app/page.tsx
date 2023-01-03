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
