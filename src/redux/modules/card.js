import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { carListApi } from "../../api/cardListApi";

//action
const LOAD_CARS = "LOAD";
const CARS_KOREA = "LOAD";
const CARS_ABROAD = "LOAD";
// const FILTER_CARS = "FILTER";

// const SEARCH_CAR = "SEARCH"

//action creator
const loadCars = createAction(LOAD_CARS, (car_list) => ({ car_list }));
const carsKorea = createAction(CARS_KOREA, (car_list) => ({ car_list }));
const carsAbroad = createAction(CARS_ABROAD, (car_list) => ({ car_list }));
// const searchCars = createAction(SEARCH, (cars) => ({ cars }));

//initialState
const initialState = {
  list: [],
};

//thunk funtion
//전체 차 불러오기
const _loadCars = () => async (dispatch, getState) => {
    console.log("미들웨어");
  const response = await carListApi.cars();

  const data = await response.data.cars;
    console.log(data);


  dispatch(loadCars(data));
};
//국산차불러오기
const _loadCarsKorea = () => async (dispatch, getState) => {
  console.log("미들웨어");
const response = await carListApi.carsKorea();

const data = await response.data.cars;
  console.log(data);


dispatch(carsKorea(data));
};
//수입차 불러오기
const _loadCarsAbroad = () => async (dispatch, getState) => {
  console.log("미들웨어");
const response = await carListApi.carsAbroad();

const data = await response.data.cars;
  console.log(data);


dispatch(carsAbroad(data));
};



//reducer

export default handleActions(
  {
    [LOAD_CARS]: (state, action) => 
        produce(state, (draft) => {
       
        draft.list = action.payload.car_list;
    
      }),
      [CARS_KOREA]: (state, action) => 
      produce(state, (draft) => {
     
      draft.list = action.payload.car_list;
  
    }),
    [CARS_ABROAD]: (state, action) => 
    produce(state, (draft) => {
   
    draft.list = action.payload.car_list;

  })
  },
  initialState
);

//action creator export
const actionCreators = {
  loadCars,
  _loadCars,
  _loadCarsAbroad,
  _loadCarsKorea,
};

export { actionCreators };
