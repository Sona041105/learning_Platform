import React , {useState,useContext} from "react";
import  loginpic from "../images/signpic.png"
import { NavLink, useHistory } from "react-router-dom";
import {UserContext} from "../App";
const Login = () => {

  const {state, dispatch} = useContext(UserContext);


  const history =useHistory();
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');

  const loginUser = async (e)=>{
       e.preventDefault();

      const res= await fetch('/signin' , {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,
          password
        })
      });

      const data =res.json();

      if(res.status=== 400 || !data)
      {
        window.alert("Invalid details");
      }
      dispatch({type:'USER', payload:true})  
      window.alert("Login successsfull");
      history.push('/');

  }

  return (
    <>
      <div className="signup-form login-form">
         <form >
          <div className="flex-container">
           <div>
              <figure>
                <img src={loginpic} alt="registration pic" height="300" width="300" />
                <div className="reg">If you dont't have an account? <NavLink to="/signup">Register here</NavLink>.</div>
              </figure>
            </div>
            <div className="scnd">
            <h2>Sign in</h2>   
            <p className="lead">It's free and hardly takes more than 30 seconds.</p>
              <div className="form-group">
			      <div className="input-group">
                     <span className="input-group-addon"><i className="bi bi-person-fill"></i></span>
				     <input type="text" className="form-control" name="email" placeholder="email" autoComplete="off" 
             value={email.email}
             onChange={(e)=> setEmail(e.target.value)}
             required="required"/>
			      </div>
              </div>
              <div className="form-group">
			      <div className="input-group">
                     <span className="input-group-addon"><i className="bi bi-lock"></i></span>
				     <input type="text" className="form-control" name="password" placeholder="password" autoComplete="off"
             value={password.password}
             onChange={(e)=> setPassword(e.target.value)}
             required="required"/>
			      </div>
              </div>
              <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block btn-lg" 
              onClick={loginUser}>Login</button>
             </div>  

            </div>

          </div>
         </form>
      </div> 
    </>
  );
};

export default Login;
