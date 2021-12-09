import React, { createContext,useReducer } from 'react'
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";
import Edit from "./components/Edit";
import Course from "./components/Course";
import "./App.css";
import { initialState, reducer } from './reducer/UseReducer';

 // 1:contextAPI
export const UserContext = createContext();

const Routing =()=>{
   return (
    <Switch>
    <Route exact path="/">
       <Home/>
    </Route>

    <Route path="/profile">
       <Profile/>
    </Route>

    <Route path="/login">
       <Login/>
    </Route>

    <Route path="/signup">
       <Signup/>
    </Route>
    <Route path="/logout">
       <Logout/>
    </Route>
    <Route path="/edit">
       <Edit/>
    </Route>
    <Route path="/course">
       <Course/>
    </Route>
    </Switch>
   )
}

export const App = () => {
  
 const [state, dispatch] = useReducer(reducer, initialState);
  return (

    <>
    <UserContext.Provider value={{state, dispatch}}>


      <Navbar/>
      <Routing/>
      
      </UserContext.Provider>
     
    </>
  )
}

export default App;
