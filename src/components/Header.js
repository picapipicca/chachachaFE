import React from "react";
import { Grid,Image,Button,Text } from "../elements";
const Header = (props) => {
    // 로그인 되어있냐/아니냐? && 토큰 가지고 있냐 없냐? 확인하고 useEffect 훅 사용해서 is_login 토큰확인

    // if (is_login && is_token) {
    //     return (
    //       <React.Fragment>
    //         <Grid is_flex padding="4px 16px">
    //           <Grid>
    //            <Image src = {chachacha 로고 넣어주기}/>
    //           </Grid>
    //           <Grid is_flex>
    //             <Button bgcolor="#b2cef7" color="#212121" text="로그아웃"></Button>
    //             <Button
    //               bgcolor="#6f98b0"
    //               color="#212121"
    //               text="로그아웃"
    //               _onClick={() => {
    //                 dispatch(userActions.logoutFB());
    //               }}
    //             ></Button>
    //           </Grid>
    //         </Grid>
    //       </React.Fragment>
    //     );
    //   }
    
    return (
        <React.Fragment>
            <Grid is_flex padding = "4px 16px">
                <Image/>
            </Grid>

            <Grid is_flex>
                <Button text ="로그인"></Button>
                <Button text ="회원가입"></Button>
            </Grid>
        </React.Fragment>
    );
    
}
Header.defaultProps = {}

export default Header;