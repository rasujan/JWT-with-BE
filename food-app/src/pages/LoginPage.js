import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import axiosC from "src/utils/baseURL";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const storedJwt = localStorage.getItem("token");

  const [jwt, setJwt] = useState(storedJwt || null);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // POST
  const getJwt = async (value) => {
    const postData = {
      username: value.username,
      password: value.password,
    };

    const res = await axiosC.post(`/jwt`, postData);

    if (res.status === 200) {
      localStorage.setItem("token", res.data?.token);

      setJwt(res.data?.token);

      navigate("/home");
    }
  };

  const handleChange = (e) => {
    e.persist();
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    getJwt(formData);
  }

  return (
    <section>
      <Card className="p-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Card>
    </section>
  );
};

export default LoginPage;
