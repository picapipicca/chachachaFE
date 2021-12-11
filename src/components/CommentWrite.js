import React, { useState} from "react";
import { Grid, Button, Input } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { actionCreator as useAction } from "../redux/modules/comment";



const CommentWrite = (props) => {
    const card_id = props.match.params.id;
    console.log(card_id)
    const dispatch = useDispatch();
    const cmList = useSelector((state) => state);
    console.log(cmList, 234234)
    const [cm, setCm] = useState("");
//   const is_login = () => {
//     const haveLogin = false;
//     if (!haveLogin) {
//       window.alert("로그인이 필요합니다.");
//     }
//   };
// const user_id = cmList.user_id;
const user = useSelector((state) => state.user);
const user_id = user.id;
// const card_id =  cmList.card_id;
const addCmList = () => {
    dispatch(useAction._addCommentDB(card_id,user_id,
      {comment: cm}
    ));
  }
  return (
    <Grid>
      <Input
        value={cm}
        _onChange={(e) => {
          setCm(e.target.value);
        }}
      ></Input>
      <Button text="댓글 추가하기" _onClick={addCmList}></Button>
    </Grid>
  );
};

export default CommentWrite;
