import React from "react";
import { Grid, Text} from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configStore";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";




const Header = (props) => {
  const dispatch = useDispatch();
  

 
  const is_login = useSelector((state)=> state.user.is_login);
  console.log(is_login);
  
  const is_localStorage = localStorage.getItem("access-token") ? true : false;
  console.log(is_localStorage);

  const getId = document.cookie.split(";").shift();
  const id = getId.split('=').pop();
  console.log(id);


//헤더분기
  if (is_login && is_localStorage){
    return (
      <Headers>
        <Grid is_flex padding="4px 16px">
          <Grid is_flex width="auto">
            <img
              src={props.src}
              alt=""
              style={{ width: "13vw", cursor: "pointer" }}
              onClick={() => {
                history.push("/");
              }}
            />
          </Grid>
          <Grid is_flex margin="0px 20px">
            <Text bold>{id}</Text>
          </Grid>
          <Grid is_flex width="20vw">
            <Button variant="outlined"
            color ="primary"
            size="large"
              onClick={() => {
                dispatch(userActions.logOutDB({}));
                window.location.replace("/");
              }}
            >
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Headers>
    );
  }

  return (
    <Headers>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <img
            src={props.src}
            alt=""
            style={{ width: "13vw", cursor: "pointer" }}
            onClick={() => {
              history.push("/");
            }}
          />
        </Grid>

        <Grid is_flex width="20vw">
          <Grid margin="0px 5px 0px 0px" width="100%">
            <ButtonGroup size="large" >
            <Button
            
              onClick={() => {
                history.push("/login");
              }}
            >
              로그인
            </Button>
            <Button
              onClick={() => {
                history.push("/signup");
              }}
            >
              회원가입
            </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
    </Headers>
  );
};

Header.defaultProps = {
  user_id: "chachacha1",
  is_me: false,
  src: "https://yoloiscute.s3.ap-northeast-2.amazonaws.com/logo.png",
};
const Headers = styled.div`
  border-bottom: 1px solid #e6e4df;
  padding: 6px 12px;
  margin-bottom: 10px;
`;
export default Header;