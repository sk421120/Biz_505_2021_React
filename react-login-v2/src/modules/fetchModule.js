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
  else return [];

  //   if (resultUser.userid !== account.userid) {
  // 	alert("No ID");
  // 	return;
  //   }

  //   if (resultUser.password !== account.password) {
  // 	alert("Wrong Password");
  // 	return;
  //   }
  //   alert("Login!");
  //   setUser(resultUser);
  //   history.replace("/");
  //    history.goBack();
};

const fetchJoin = async (joinData) => {
  const response = await fetch("http://localhost:8000/users/join", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joinData),
  });

  if (response.ok) {
    return await response.json();
    // alert(JSON.stringify(json));
  }
};

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

export { fetchJoin, fetchUser, fetchLogin, fetchLogout };
