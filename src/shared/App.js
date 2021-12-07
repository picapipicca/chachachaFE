import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from "../components/Header";
import CardList from '../pages/CardList';
import Login from "../pages/Login";
import { ConnectedRouter } from "connected-react-router";
import {history} from "../redux/configStore";



function App() {
  return (
   <React.Fragment>
     <Header></Header>
      <ConnectedRouter history={history}>
        <Route path = "/" exact component = {CardList}/>
        <Route exact path="/login" component={Login} />
      </ConnectedRouter>
   </React.Fragment>
  );
}

export default App;
