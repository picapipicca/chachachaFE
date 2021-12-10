import { createAction,handleActions } from "redux-actions";
import {produce} from "immer";
import { carsApi } from "../../api/cardListApi";

//action
const LOAD_CARS = "car/LOAD"
const LOADING_PAGE = "car/LOADING_PAGE"
// const SEARCH_CAR = "SEARCH"

//action creator
const loadCars = createAction(LOAD_CARS, (car_list) => ({ car_list }));
const isLoaded = createAction(LOADING_PAGE,(loaded) => ({ loaded }));

// const searchCars = createAction(SEARCH, (cars) => ({ cars }));

//initialState
const initialState = {
    list:[],
    is_loaded : false,
    car_list:null
}


//thunk funtion
const _loadCars = () => async (dispatch, getState) => {
    try {
        //FIXME: data 가 원래는 {data} 였다!
        const data = await carsApi.cars();
    
        dispatch(loadCars(data));
    } catch (e) {
        console.log("데이터 가져오기 실패!")
    }
};
    
    

//reducer

export default handleActions({
    [LOAD_CARS] : (state,action) => { produce (state,(draft)=> {
        draft.list.push(...action.payload.car_list);
        draft.is_loaded = true;
    })
    },
    [LOADING_PAGE] : (state,action) => {produce (state, (draft)=> {
        draft.car_list = action.payload.car_list;
        draft.is_loaded = action.loaded;
    })}
}, initialState);

//action creator export
const actionCreators = {
    loadCars,
    _loadCars,
};

export {actionCreators};