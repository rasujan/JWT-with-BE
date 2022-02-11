import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const apiUrl = "http://localhost:3001";

axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);

    const allowedOrigins = [apiUrl];

    const token = localStorage.getItem("token");

    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

function App() {
  const storedJwt = localStorage.getItem("token");
  const [jwt, setJwt] = useState(storedJwt || null);
  const [foods, setFoods] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  // POST
  const getJwt = async (value) => {
    const postData = {
      username: value.username, // input from form field username
      password: value.password, // input from form field password
    };

    const { data } = await axios.post(`${apiUrl}/jwt`, postData);

    localStorage.setItem("token", data.token);

    setJwt(data.token);
  };

  // GET
  const getFoods = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/foods`);

      setFoods(data);

      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  };

  return (
    <>
      {/* This section should only if the user is  */}
      <section style={{ marginBottom: "10px" }}>
        {/* Convert this into a form */}
        {/* Also try to show some error message if login fails */}
        <button onClick={() => getJwt()}>Login</button>

        {/* Also remove this, you can so some message instead */}
        {jwt && (
          <pre>
            <code>{jwt}</code>
          </pre>
        )}
      </section>

      {/* This section should only be displayed if logged in */}
      <section>
        <button onClick={() => getFoods()}>Get Foods</button>

        <ul>
          {foods.map((food, i) => (
            <li>{food.description}</li>
          ))}
        </ul>

        {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      </section>
    </>
  );
}
export default App;
