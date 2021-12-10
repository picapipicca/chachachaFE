import { produce } from "immer";
import {createAction , handleActions} from "redux-actions";

import { setCookie ,getCookie, deleteCookie } from "../../shared/Cookie";
import { userAPI } from "../../api/userApi";



//action type
const LOGIN = "LOGIN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

//action creator
const setLogin = createAction(LOGIN, (user)=> ({user}));
const logOut = createAction(LOG_OUT,(user)=>({user}));
const getUser = createAction(GET_USER,(user)=> ({user}));

//초기값설정
const initialState = {
    user : null, //user정보 = id,pwd
    is_login : false, //로그인상태
};
const user_initial = {
    id : "chachacha",
    pwd:"1111",
};

//middleware actions
const loginAction = (user) => {
    return function (dispatch, getState, {history}) {
        console.log(history);
        dispatch(setLogin(user));
        history.push('/');
    }
}

//thunk
//로그인 api호출
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
				window.alert('없는 회원정보 입니다! 회원가입을 해주세요!');
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

// Reducer

export default handleActions ({
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
          setCookie("is_login","success");
          draft.user = action.payload.user;
          draft.is_login = true;
        
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
        loginAction,
        loginDB,
        logOutDB
    };

export {actionCreators};
