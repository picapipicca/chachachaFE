import React from 'react';
import {Route} from "react-router-dom";

import Signup from '../pages/Signup';
import Header from "../components/Header";
import CardList from '../pages/CardList';
import CardDetail from '../pages/CardDetail';
import Login from "../pages/Login";

import { ConnectedRouter } from "connected-react-router";
import {history} from "../redux/configStore";


function App() {
  return (
   <React.Fragment>
     <Header></Header>
      <ConnectedRouter history={history}>
        <Route path="/signup" exact component={Signup}/>
        <Route path = "/" exact component = {CardList}/>
        <Route exact path="/login" component={Login} />
        <Route path="/detail/:card_id" exact component={CardDetail} />
      </ConnectedRouter>
   </React.Fragment>
  );
}

export default App;


// https://yoloiscute.s3.ap-northeast-2.amazonaws.com/logo.png