import React from "react";
import styled from 'styled-components';
import { Grid, Text } from "../elements";

const CommentList = (props) => {
    const nDate = props.date.split("T");
  return (
    <Wrap>
      <Grid width="12%">
        <Text center>{props.id}</Text>
      </Grid>

      <Grid width="76%">
        <Text>{props.comment}</Text>
      </Grid>

      <Grid width="14%">
        <Text center>{nDate[0]}</Text>
      </Grid>
    </Wrap>
  );
};

const Wrap = styled.div`
    display:flex;
    width: 60vw;
    margin:10px auto 0;
    border:1px solid #000;
`;
export default CommentList;
