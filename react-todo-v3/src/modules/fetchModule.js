const fetchUser = async () => {
  const response = await fetch("http://localhost:8000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
  });
  if (response?.ok) return await response.json();
  else return;
};

const fetchLogin = async (userid, password) => {
  const response = await fetch("http://localhost:8000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
    body: JSON.stringify({
      userid,
      password,
    }),
  });
  if (response?.ok) return await response.json();
  else {
    alert("Login Fail")
    return [];}
};

const fetchLogout = async () => {
  const response = await fetch("http://localhost:8000/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
  });
  return response.json();
};

export { fetchUser, fetchLogin, fetchLogout };
