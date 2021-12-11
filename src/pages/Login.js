import React from "react";
import { Grid, Text, Input } from "../elements";
// import {setCookie,getCookie,deleteCookie} from "../shared/Cookie";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import styled from 'styled-components';



const Login = (props) => {
  
  const {history} = props;

  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  
const login = () => {
  if (id === "" || pwd === ""){
    window.alert("아이디 혹은 비밀번호가 비어있습니다! 입력해주세요");
    return;
  }
  dispatch(userActions.loginDB(id,pwd));
  
};


  return (
    <React.Fragment>
      <div style ={{width:"50vw", flexDirection: "row",}}>
        <Grid padding="50px" border="1px solid #e6e4df" margin ="10% 50%">
          <Text size="32px" type="heading" bold center>
            로그인
          </Text>

          <Grid padding="16px 30px" >
            <Input
            margin = "0px auto"
             width ="100%"
              value={id}
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
            <LoginBtn
              onClick={() => {
                login();
              }}
            >로그인</LoginBtn>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};
const LoginBtn = styled.div`
background-color : #35588c;
color: white;
transition: all 0.2s linear 0s;
border-radius: 6px;
height:35px;
font-weight:350;
font-size: 25px;
width: 37vw;
margin: 20px auto 0px auto;
text-align: center;
padding: 6px 0px 0px 0px;
  
  &:before {
    content: "\f054";
    font-family: FontAwesome;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0px;
    height: 100%;
    width: 37vw;
    background-color: rgba($overlay-color,0.3);
    border-radius: 0 50% 50% 0;
    transform: scale(0,1);
    transform-origin: left center;
    transition: all 0.2s linear 0s;
  }
  
   &:hover {
    text-indent: 30px;
     
      
    
    &:before {
      transform: scale(1,1);
      text-indent: 0;
    }
  }
`;

export default Login;
