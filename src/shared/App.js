import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import {history} from "../redux/configStore";

import Header from "../components/Header";
import CardList from '../pages/CardList';
import Login from "../pages/Login";
import FilterKorea from '../components/FilterKorea';
import FilterAbroad from '../components/FilterAbroad';
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from 'react-redux';
import Signup from '../pages/Signup';
import CardDetail from '../pages/CardDetail';



function App() {
  const is_loginCheck = document.cookie ? true : false;
  const dispatch = useDispatch();
  React.useEffect(()=> {
    if (is_loginCheck) {
      dispatch(userActions.loginCheckDB());
    }
  },[])
  
  return (
   <React.Fragment>
     <Header></Header>
      <ConnectedRouter history={history}>
          <Route path = "/" exact component = {CardList}/>
          <Route path = "/signup" exact component = {Signup}/>
          <Route path = "/filterKorea" exact component = {FilterKorea}/>
          <Route path = "/filterAbroad" exact component = {FilterAbroad}/>
          <Route exact path="/login" component={Login} />       
          <Route exact path="/detail/:card_id" component={CardDetail} />       
      </ConnectedRouter>
   </React.Fragment>
  );
}


export default App;
