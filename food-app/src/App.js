import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

import AppRoute from "src/Routes/AppRoute";

import "./App.css";

function App() {
  return (
    <Container>
      <Row className="justify-content-center">
        <h1 className="my-4">Welcome to the Food App</h1>
        <AppRoute />
      </Row>
    </Container>
  );
}
export default App;
