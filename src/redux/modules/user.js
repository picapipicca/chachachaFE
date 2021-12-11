import { produce } from "immer";
import {createAction , handleActions} from "redux-actions";

import { setCookie ,getCookie, deleteCookie } from "../../shared/Cookie";
import { userAPI } from "../../api/userApi";



//action type

const LOGIN = "LOGIN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const ID_CHECK = "ID_CHECK"

//action creator

const setLogin = createAction(LOGIN, (user)=> ({user}));
const logOut = createAction(LOG_OUT,(user)=>({user}));
const getUser = createAction(GET_USER,(user)=> ({user}));
const idCheck = createAction(ID_CHECK,(errorMessage)=> ({errorMessage}))

//초기값설정
const initialState = {
    user : null, //user정보 = id,pwd
    is_login : false, //로그인상태
};
const user_initial = {
    id : "chachacha",
    pwd:"1111",
};


//thunk

    const signupAction = (id, pwd, confirm) => async (dispatch, getState, { history }) => {
        try {
          await userAPI.signup(id, pwd, confirm);
      
          alert('회원가입이 완료되었습니다');
          history.replace('/login');
          
        }    catch(err) {
                const msg=err.response.data.errorMessage;
              if(msg === "이미 가입된 아이디가 있습니다."){
                  dispatch(idCheck(err.response));
              }       
      };
      };
    
const loginDB = (id, pwd) => {
	return function (dispatch, getState, { history }) {
		userAPI
			.login(id, pwd)
			.then((res) => {
                    localStorage.setItem('access-token', res.data.token);
                    setCookie('id',id);
				    dispatch(setLogin({ id: id }));
				    history.replace('/');
			})
			.catch((err) => {
				window.alert('잘못된 회원정보 입니다. 비회원이라면 회원가입을 해주세요!');
			});
	};
};
    
    const logOutDB = () => {
        return function(dispatch, getState , {history}){
            
            localStorage.clear('access-token');
            deleteCookie("id");
            dispatch(logOut());
            history.replace('/');
        };
    };
    const loginCheckDB = () => {
        return function (dispatch, getState, { history }) {
            const tokenCheck = localStorage.getItem('access-token');
            const idCheck = document.cookie;
            if (tokenCheck) {
                dispatch(setLogin({ id: idCheck }));
            } else {
                dispatch(logOut());
            }
        };
    };

// Reducer

export default handleActions ({
    [ID_CHECK]: (state, action) =>
      produce(state, (draft) => {
          draft.id_check = action.payload.errorMessage.data.errorMessage
        
      }),
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
          setCookie("is_login", "success");
          draft.user = action.payload.user;
          draft.is_login = true;
          console.log(draft.is_login);
        
      }),
      [LOG_OUT] : (state,action) => produce (state,(draft) => {
        deleteCookie("is_login");
          draft.user = null;
          draft.is_login = false;
          
          
      }),
      [GET_USER]: (state,action) => produce(state,(draft) => {}),
    }, 
    
    initialState
    );

    

    const actionCreators ={
        setLogin,
        logOut,
        getUser,
        signupAction,
        loginDB,
        logOutDB,
        loginCheckDB,
    };

export {actionCreators};
