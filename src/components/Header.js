import React from "react";
import { Grid,Image,Button,Text } from "../elements";

import { useSelector, useDispatch } from "react-redux"; 
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from '../redux/configStore';

const Header = (props) => {

  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  
    // const [is_login , setIslogin] = React.useState(false);
    if(is_login){
        return(
          <React.Fragment>
            <Grid is_flex  padding = "4px 16px">
              <Grid is_flex width="auto">
                <img src={props.src} alt="" style ={{width:"13vw" , cursor :"pointer"}} onClick={()=>{
                  history.push("/");
                }} />
              </Grid>
              <Grid is_flex >
                <Text bold> {props.user_id}</Text>
              </Grid>
              <Grid is_flex width="20vw">
                <Button
                  bg ="#CCC2BE" 
                  margin = "0px 5px"
                  text="로그아웃"
                  _onClick={() => {
                  dispatch(userActions.logOut({}));
                    }}
                  ></Button>
              </Grid>
            </Grid>
          </React.Fragment>
        );
      }
      
    return (
        <React.Fragment>
            <Grid is_flex padding = "4px 16px">
                <Grid >
                    <img src={props.src} alt="" style ={{width:"13vw" , cursor :"pointer"}} onClick={()=>{
                  history.push("/");
                }}/>
                </Grid>

                <Grid is_flex width = "40vw">
                    <Button bg ="#CCC2BE" margin = "0px 5px" text ="로그인"></Button> 
                    <Button bg ="#CCC2BE" text ="회원가입"></Button>
                </Grid>
            </Grid>
            
        </React.Fragment>
    );
    
}
Header.defaultProps = {
    user_id : "chachacha1",
    is_me: false,
    src: "https://yoloiscute.s3.ap-northeast-2.amazonaws.com/logo.png",
}

export default Header;