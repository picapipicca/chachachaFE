import React from "react";
import { Grid, Text, Button, Input } from "../elements";
import {setCookie,getCookie,deleteCookie} from "../shared/Cookie";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";


const Login = (props) => {
  const dispatch = useDispatch();

  const [user_id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  
const login = () => {
  if (user_id === "" || pwd === ""){
    window.alert("아이디 혹은 비밀번호가 비어있습니다! 입력해주세요");
    return;
  }
  setCookie("user_id", user_id, 3);
  setCookie("user_pwd", pwd, 3);
  dispatch(userActions.loginAction(user_id,pwd));
};


  return (
    <React.Fragment>
      <div style ={{width:"50vw", flexDirection: "row"}}>
        <Grid padding="16px" border="1px solid #000" margin ="10% 50%">
          <Text size="32px" type="heading" bold center>
            로그인
          </Text>

          <Grid padding="16px 30px" >
            <Input
            margin = "0px auto"
             width ="100%"
              value={user_id}
              label="아이디"
              placeholder="아이디"
              _onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </Grid>

          <Grid padding="16px 30px">
            <Input
            width ="100%"
              value={pwd}
              label="패스워드"
              placeholder="패스워드"
              type="password"
              _onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </Grid>
          <Grid padding="0px 30px 15px 30px">
            <Button
              text="로그인"
              padding="17px 0px 30px 0px"
              font_size="16px"
              _onClick={() => {
                login();
              }}
            ></Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Login;
