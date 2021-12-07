import { produce } from "immer";
import {createAction , handleActions} from "redux-actions";

import { setCookie ,getCookie, deleteCookie } from "../../shared/Cookie";

//action type
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

//action creator
const setUser = createAction(SET_USER, (user)=> ({user}));
const logOut = createAction(LOG_OUT,(user)=>({user}));
const getUser = createAction(GET_USER,(user)=> ({user}));

//초기값설정
const initialState = {
    user : null,
    is_login : false,
};

//middleware actions
const loginAction = (user) => {
    return function (dispatch, getState, {history}) {
        console.log(history);
        dispatch(setUser(user));
        history.push('/');
    }
}


//Reducer

export default handleActions ({
    [SET_USER]: (state, action) =>
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
    }, initialState
    );

    

    const actionCreators ={
        setUser,
        logOut,
        getUser,
        loginAction,
    };

export {actionCreators};
