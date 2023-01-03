"use client";
import { useRouter } from "next/navigation";
import jsCookie from "js-cookie";

export default function Login() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/auth/login`, {
        method: "POST",
      });
      if (response.status !== 200) return;
      const data = await response.json();

      jsCookie.set("accessToken", data.accessToken);

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={""}>
      <h1>Login</h1>
      <br />
      <button onClick={handleLogin}>Login here by clicking</button>
    </main>
  );
}
