import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from "../components/Header";
import CardList from '../pages/CardList';
import Login from "../pages/Login";
import Test from '../components/Test';
import TestList from '../pages/TestList';
import { ConnectedRouter } from "connected-react-router";
import {history} from "../redux/configStore";



function App() {
  return (
   <React.Fragment>
     <Header></Header>
      <ConnectedRouter history={history}>
      <Route path = "/test" exact component = {Test}/>
      <Route path = "/testlist" exact component = {TestList}/>
        {/* <Route path = "/" exact component = {CardList}/> */}
        <Route exact path="/login" component={Login} />
      </ConnectedRouter>
   </React.Fragment>
  );
}

export default App;
