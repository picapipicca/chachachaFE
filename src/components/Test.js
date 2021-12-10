import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import TestList from "../pages/TestList";
import { carsApi } from "../api/cardListApi";

const Test = (props) => {
  const [cars, setCars] = useState({cars:[]});

  useEffect(() => {
    carsApi.then((response) => {
      setCars(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      <h1>Test</h1>
      <TestList cars={cars} />
    </React.Fragment>
  );
};

export default Test;
