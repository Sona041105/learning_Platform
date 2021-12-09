import React ,{useContext}from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink}  from 'react-router-dom';
import logo from "../images/MainLogo-3.png";
import { UserContext } from '../App';




function Navbar() {

    const {state, dispatch}= useContext(UserContext);

      const RenderMenu =() =>{
                if(state){
                    return(
                        <>
                             <li className="nav-item">
                                <NavLink className="nav-link active" to="/">Home</NavLink>
                            </li>
                             <li className="nav-item">
                                <NavLink className="nav-link active" to="/course" >Course</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile"> Profile</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/logout">Logout</NavLink>
                            </li>
                        </>
                    )
                }
                else{
                    return(
                        <>
                             <li className="nav-item">
                                <NavLink className="nav-link active" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/course" >Course</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/signup">Registsration</NavLink>
                            </li>
                        </>

                    )
                }
      }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light Nav  ">
                <div className="container-fluid">
                    <a className="navbar-brand logoimg"  >
                        <img src={logo} alt="logo"  width="100" height="80" />
                    </a>
    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto ms-auto">
                           
                            <RenderMenu/>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar
