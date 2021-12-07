import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from "../components/Header";
import CardList from '../pages/CardList';
import Login from "../pages/Login";
// import Header from '../components/Header';




function App() {
  return (
   <React.Fragment>
     <BrowserRouter>
     
      <Route path = "/" exact component = {CardList}/>
      <Route exact path="/login" component={Login} />
     </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
