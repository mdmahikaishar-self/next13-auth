async function authUser(token?: string): Promise<Response> {
  const request = await fetch(`http://127.0.0.1:5000/api/auth/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return request;
}

export default {
  authUser,
};
