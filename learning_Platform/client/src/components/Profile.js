import React, { useEffect } from "react";
import pp from "../images/stdy-8-libra-3.jpg";
import { NavLink } from "react-router-dom";
import  book from "../images/open-book-png.png"




const Profile = () => {

  const  open_menu1 =()=>{
  var clicked= document.getElementById('drop-menu');
  var clicked1= document.getElementById('drop-menu1');
  if(clicked.style.display=='block')
  {
      clicked.style.display='none';
      clicked1.style.display='none';
  }
  else{
      clicked.style.display='block';
      clicked1.style.display='none';
      
  }
}
  const  open_menu2 =()=>{
  var clicked= document.getElementById('drop-menu1');
  var clicked1= document.getElementById('drop-menu');
  if(clicked.style.display=='block')
  {
      clicked.style.display='none';
      clicked1.style.display='none';
  }
  else{
      clicked.style.display='block';
      clicked1.style.display='none';
      
  }
}


  return (

    <div className="Profile-page ">
      <div className="profile">
        <div className="grid-container">
          <div className="grid-item item1">
            <div className="profile-pic">
              <img src={pp} alt="pp" />
            </div>
          </div>
          <div className="grid-item item2">
            <div className="detail">
              <div className="detail-1">
                <span className="input-group-addon"><i className="bi bi-emoji-sunglasses-fill"></i></span>
                <h4>Muskan Mishra</h4>
              </div>
              <div className="detail-1">
                <span className="input-group-addon"><i className="bi bi-briefcase-fill"></i></span>
                <h5>Web Developer</h5>
              </div>
              <div className="detail-1">
                <span className="input-group-addon"><i className="bi bi-patch-check-fill"></i></span>
                <h6>Ranking</h6>
              </div>
            </div>
          </div>
          <div className="grid-item item5">
          
            <figure><img src={book} alt="book" /></figure>
            <NavLink className="btn " to="/edit" >Edit Profile</NavLink>
          </div>
          <div className="grid-item item3">
            <div className="div5">
              <h4>Work Link</h4>
              <ul className="scrollitem">

                <div>
                  <li > <NavLink to="/">Youtube link</NavLink> </li>
                </div>

                <div>
                  <li ><NavLink to="#">Website Link</NavLink> </li>
                </div>

                <div>
                  <li><NavLink to="#">Linkdln</NavLink></li>
                </div>
                <div>
                  <li ><NavLink to="#">Youtub hover link</NavLink> </li>

                </div>
                <div>
                  <li ><NavLink to="#">Youtuber</NavLink></li>
                </div>

                <div>
                  <li ><NavLink to="#">Youtuber</NavLink></li>
                </div>

                <div>
                  <li><NavLink to="#">Youtuber</NavLink></li>
                </div>

                <div>
                  <li ><NavLink to="#">Youtuber</NavLink></li>
                </div>

                <div>
                  <li > <NavLink to="#">Youtuber</NavLink> </li>
                </div>

                <div>
                  <li ><NavLink to="#">Youtuber</NavLink> </li>
                </div>

              </ul>
            </div>
          </div>
          <div className="grid-item item4">
           
            <div className="drop-bttn">
             <button className="btn btn-secondary dropdown-toggle drop-bttn1" type="button" id="MenuButton" 
             onClick={open_menu1}>
                About
              </button>
              <button className="btn btn-secondary dropdown-toggle drop-bttn2" type="button" id="MenuButton" 
             onClick={open_menu2}>
                Timeline
              </button>
              </div>

              <hr />

            <div className="dropdown">
            <div id="drop-menu">
              <div className="Card " >
                <div className="drop-detail ">
                   <li className="drop-value"><span className="c"> User Id</span></li>
                   <li className="drop-value"><span className="c"> Name</span></li>
                   <li className="drop-value"><span className="c">Email</span></li>
                   <li className="drop-value"><span className="c">Phone Number</span></li>
                   <li className="drop-value"><span className="c">Profession</span></li>
                </div>
                <div  className="drop-ans ">
                   <li className="drop-value"><span className="c"> 112388888</span></li>
                   <li className="drop-value"><span className="c"> Muskan Mishra</span></li>
                   <li className="drop-value"><span className="c">muskan@gmail.com</span></li>
                   <li className="drop-value"><span className="c">0123456789</span></li>
                   <li className="drop-value"><span className="c">WebDev</span></li>
                </div>
              </div>
            </div>
            </div> {/* dropdown-1 close */}
            <div className="dropdown">
            <div id="drop-menu1">
              <div className="Card " >
               <div>
                 <ul>
                   <li>hello</li>
                   <li>hi</li>
                   <li>hii </li>
                 </ul>
               </div>
              </div>
            </div>
            </div> {/* dropdown-2 close */}
          </div>
        </div>
      </div>
    </div>


  );
};

export default Profile;
