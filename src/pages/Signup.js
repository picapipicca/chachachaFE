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
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirm, setPwdCheck] = useState("");

    const signUp = () => {
        const pwdRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/;
        // const nameRegExp = /^[A-Za-zㄱ-ㅎ|ㅏ-ㅣ|가-힣0-9+]{2,12}$/;
  
        if (id === "" || pwd === "") {
            window.alert("아이디 혹은 비밀번호가 비어있습니다. 입력해주세요.");
            return;
        }
        if(id === pwd) {
          window.alert("아이디와 비밀번호가 일치합니다. 다르게 입력해주세요")
          return;
        }
        /* 비밀번호 유효성 검사 */
        if (!pwdRegExp.test(pwd)) {
          window.alert("비밀번호 형식을 확인해주세요.");
          return;
        }
  
        /* 비밀번호 확인 검사 */
        if (pwd !== confirm) {
          window.alert("비밀번호가 일치하지 않습니다.");
          return;
        }
        
        dispatch(userActions.signupAction(id, pwd , confirm));
  
      
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
                value={id}
                label="아이디"
                placeholder="아이디 입력"
                _onChange={(e) => {
                  setId(e.target.value);
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
                value={confirm}
                type="password"
                label="비밀번호 확인"
                placeholder="비밀번호 재입력"
                _onChange={(e) => {
                  setPwdCheck(e.target.value);
                }}
              ></Input>
            </Grid>
            <SignupBtn onClick={() => {
                signUp();}}>
              회원가입하기
            </SignupBtn>

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

const SignupBtn = styled.div`
background-color : #35588c;
color: white;
transition: all 0.2s linear 0s;
border-radius: 6px;
height:35px;
font-weight:350;
font-size: 25px;
width: 30vw;
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
export default Signup;