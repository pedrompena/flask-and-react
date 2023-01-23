const BASE_URL =
  "https://3001-4geeksacade-reactflaskh-8el3t4cb32v.ws-eu83.gitpod.io";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
    },
    actions: {
      login: async (email, password) => {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        };
        try {
          const res = await fetch(`${BASE_URL}/api/login`, requestOptions);
          if (res.status != 200) {
            return false;
          }
          const data = await res.json();
          localStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.log(error);
        }
      },
      syncToken: () => {
        const token = localStorage.getItem("token");
        token && token != "" && token != undefined && setStore({ token });
      },
      clearToken: () => {
        localStorage.removeItem("token");
        setStore({ token: null });
      },
      getUserInfo: async () => {
        const store = getStore();
        const requestOptions = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
        };
        try {
          const res = await fetch(`${BASE_URL}/api/profile`, requestOptions);
          const data = await res.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      },
      signup: async (email, password) => {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ email, password, "is_active" : true}),
        };
        try {
          const res = await fetch(`${BASE_URL}/api/register`, requestOptions);
          if (res.status != 200) {
            return false;
          }
          const data = await res.json();
          console.log(data)
          return true;
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
