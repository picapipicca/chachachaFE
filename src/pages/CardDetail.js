import React from "react";

// import { Grid, Text, Button, Input } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { actionCreator as useAction } from "../redux/modules/comment";

import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";

const CardDetail = (props) => {
  const dispatch = useDispatch();
  const cmList = useSelector((state) => state.comment.list);
  console.log(cmList);
  React.useEffect(() => {
    dispatch(useAction.getChatList());
  }, [dispatch]);
  return (
    <React.Fragment>
      <CommentWrite></CommentWrite>
      {cmList &&
        cmList.map((c, idx) => {
          return <CommentList key={c._id} {...c} />;
        })}
    </React.Fragment>
  );
};

export default CardDetail;