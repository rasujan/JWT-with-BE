import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap";

import axios from "src/utils/baseURL";

const Home = () => {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  // GET
  const getFoods = async () => {
    axios
      .get(`/foods`)
      .then((res) => {
        setFoods(res.data);
        setFetchError(null);
      })
      .catch((err) => {
        setFetchError(err.message);
        if (err.response.status === 401) {
          alert(`Logging Out, ${err.message}`);
          navigate("/");
        }
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <section>
        <Button className="my-2" variant="primary" onClick={() => getFoods()}>
          Get Foods
        </Button>

        <ListGroup className="my-4">
          {foods.map((food, i) => (
            <ListGroup.Item>{food.description}</ListGroup.Item>
          ))}
        </ListGroup>

        <Button className="my-2" variant="primary" onClick={logout}>
          Logout
        </Button>

        {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      </section>
    </>
  );
};

export default Home;
