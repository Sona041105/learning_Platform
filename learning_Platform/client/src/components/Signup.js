import React,{useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import signpic from "../images/studyTable-boy-png.png"




const Signup = () => {

    const history =useHistory();
    const[user,setUser]= useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    });

       let name,value;

    const handleInputs = (e) =>{
        // console.log(e);
        name = e.target.name;
        value =e.target.value;

        setUser({...user,[name]:value});
    }

    const PostData = async(e) =>{
           e.preventDefault();
           const {name,email,phone,work,password,cpassword} =user;

          const res= await fetch("/register",{
              method:"POST",
              headers:{
                  "Content-Type" : "application/json"
              },
              body:JSON.stringify({
                  name,
                  email,
                  phone,
                  work,
                  password,
                  cpassword
              })
          });

          const data = await res.json();

          if(res.status=== 422 || !data){
              window.alert("Invalid registration");
              console.log("Invalid Registration")
          }

          window.alert("Registration Successfull");

          history.push("/login");
    }


    return (
        <>
        <section className="signPage">
          <div className="signup-form">	
       <form method="POST">
           <div   className="flex-container">
         <div className="fst">
		<h2>Create Account</h2>
		<p className="lead">It's free and hardly takes more than 30 seconds.</p>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="bi bi-person-fill"></i></span>
				<input type="text" className="form-control" name="name" placeholder="Username" autoComplete="off" 
                value={user.name}
                onChange={handleInputs}
                required="required"/>
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="bi bi-envelope-fill"></i></span>
				<input type="email" className="form-control" name="email" placeholder="Email Address" autoComplete="off" 
                value={user.email}
                onChange={handleInputs}
                required="required"/>
			</div>
        </div>
		<div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="bi bi-lock"></i></span>
				<input type="text" className="form-control" name="password" placeholder="Password" autoComplete="off" 
                value={user.password}
                onChange={handleInputs}
                required="required"/>
			</div>
        </div>
		<div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="bi bi-lock-fill"></i><i className="fa fa-check"></i></span>
				<input type="text" className="form-control" name="cpassword" placeholder="Confirm Password" autoComplete="off" 
                value={user.cpassword}
                onChange={handleInputs}
                required="required"/>
			</div>
        </div>        
		<div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="bi bi-file-person-fill"></i></span>
				<input type="text" className="form-control" name="work" placeholder="your profession" autoComplete="off" 
                value={user.work}
                onChange={handleInputs}
                required="required"/>
			</div>
        </div>        
		<div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="bi bi-telephone-fill"></i></span>
				<input type="number" className="form-control" name="phone" placeholder="phone number" autoComplete="off" 
                value={user.phone}
                onChange={handleInputs}
                required="required"/>
			</div>
              

		<div className="form-group">
            <button type="submit" className="btn btn-primary btn-block btn-lg" value="register" 
            onClick={PostData}
            >Register</button>
        </div>
        </div>
         <div className="text-center">Already have an account? <NavLink to="/login">Login here</NavLink>.</div>
     </div> 
        <div className="signup-image">
        <figure>
            <img src={signpic} alt="registration pic" height="300" width="300" />
            <h5>Create your future</h5>
            </figure>
      </div>

      </div> 

    </form>
    
	
  </div>
  </section>
        </>
    )
}

export default Signup
