import React from "react";
import Card from "../components/Card";
import { Grid, Button } from "../elements";

const TestList = ({ cars }) => {
  console.log(cars);

  return (
    <React.Fragment>
      <Grid is_flex width="30vw">
        <Button bg="white" text="국산차"></Button>
        <p>/</p>
        <Button bg="white" text="수입차"></Button>
      </Grid>
      <Grid>
        {cars &&
          cars.cars.map((cars) => {
            return <Card key={cars.id} {...cars} />;
          })}
      </Grid>
    </React.Fragment>
  );
};

export default TestList;
