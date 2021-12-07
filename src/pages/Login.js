import React from "react";

import { Grid, Text, Button, Input } from "../elements";

const Login = (props) => {
  const [user_id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePwd = (e) => {
    setPwd(e.target.value);
  };

  return (
    <React.Fragment>
      <div style ={{width:"50vw", flexDirection: "row"}}>
        <Grid padding="16px" border="1px solid #000" margin ="10% 50%">
          <Text size="32px" bold center>
            로그인
          </Text>

          <Grid padding="16px 30px" >
            <Input
            margin = "0px auto"
             width ="100%"
              value={user_id}
              label="아이디"
              placeholder="아이디"
              _onChange={changeId}
            />
          </Grid>

          <Grid padding="16px 30px">
            <Input
            width ="100%"
              value={pwd}
              label="패스워드"
              placeholder="패스워드"
              type="password"
              _onChange={changePwd}
            />
          </Grid>
          <Grid padding="0px 30px 15px 30px">
            <Button
              text="로그인"
              padding="17px 0px 30px 0px"
              font_size="16px"
              _onClick={() => {
                console.log("로그인했어");
              }}
            ></Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Login;
