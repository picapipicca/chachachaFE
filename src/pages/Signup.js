import React, {useState} from 'react';
import styled from 'styled-components';
import {Grid, Text, Input ,Button} from '../elements';

import {setCookie} from '../shared/Cookie';
import { useHistory } from 'react-router';

import { actionCreators as userActions } from '../redux/modules/user'
// import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';

const Signup = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [user_id, setId] = useState("");
    const [user_name, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwd_check, setPwdCheck] = useState("");

    const signUp = () => {
        const pwdRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/;
        // const nameRegExp = /^[A-Za-zㄱ-ㅎ|ㅏ-ㅣ|가-힣0-9+]{2,12}$/;
  
        if (user_id === "" || pwd === "") {
            window.alert("아이디 혹은 비밀번호가 비어있습니다. 입력해주세요.");
            return;
        }
        /* 비밀번호 유효성 검사 */
        if (!pwdRegExp.test(pwd)) {
          window.alert("비밀번호 형식을 확인해주세요.");
          return;
        }
  
        /* 비밀번호 확인 검사 */
        if (pwd !== pwd_check) {
          window.alert("비밀번호가 일치하지 않습니다.");
          return;
        }
        // /* 닉네임 유효성 검사 */
        // if (!nameRegExp.test(user_name)) {
        //   window.alert("유저 닉네임 형식을 확인해 주세요.");
        //   return;
        // }
        // /* 회원가입 middle ware */
        dispatch(userActions.loginAction(user_id, pwd));
  
      
      };
    

    return (
      <React.Fragment>
        <Wrap>
          <Grid width="35vw" padding="16px" border="1px solid #000" style={{width:"20vw"}}>
            <Text size="32px" bold center>
              회원가입
            </Text>

            <Grid padding="16px 0">
              <Input
                value={user_id}
                label="아이디"
                placeholder="아이디 입력"
                _onChange={(e) => {
                  setId(e.target.value);
                }}
              ></Input>
            </Grid>

            <Grid padding="16px 0">
              <Input
                value={user_name}
                label="닉네임"
                placeholder="닉네임 입력"
                _onChange={(e) => {
                  setUserName(e.target.value);
                }}
              ></Input>
            </Grid>

            <Grid padding="16px 0">
              <Input
                value={pwd}
                type="password"
                label="비밀번호"
                placeholder="6~12자 영문 대 소문자, 숫자 사용하세요."
                _onChange={(e) => {
                  setPwd(e.target.value);
                }}
              ></Input>
            </Grid>

            <Grid padding="16px 0">
              <Input
                value={pwd_check}
                type="password"
                label="비밀번호 확인"
                placeholder="비밀번호 재입력"
                _onChange={(e) => {
                  setPwdCheck(e.target.value);
                }}
              ></Input>
            </Grid>

            <Button
              bg
              color
              text="회원가입하기"
              _onClick={() => {
                signUp();
              }}
            ></Button>
          </Grid>
        </Wrap>
      </React.Fragment>
    );
}

const Wrap = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    margin-top:50px;
`;
export default Signup;