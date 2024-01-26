import React from "react";
import './header.css'

const Navbar = () => {
    return (
<div id='navbar'>
  


      <div id='fblogo'>
          <img style={{width:"60px" , height:"60px"}} src='https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png'></img>
          <div id='fbsearchBar'>
          <input type='search'></input><button className='serchbtn'><img style={{width:"12px"}} src='https://cdn-icons-png.flaticon.com/128/709/709592.png'></img></button>
          </div>
      </div>



      <div id='fbMidleIcons'>
         <img style={{width:"34px" , height:"34px" ,borderRadius:"50%" }} src='https://cdn-icons-png.flaticon.com/128/6736/6736517.png'></img>
         <img style={{width:"42px" , height:"42px" ,borderRadius:"50%" }} src='https://cdn-icons-png.flaticon.com/128/12184/12184011.png'></img>
         <img style={{width:"40px" , height:"40px" ,borderRadius:"50%" }} src='https://cdn-icons-png.flaticon.com/128/11820/11820145.png'></img>
         <img style={{width:"42px" , height:"42px" ,borderRadius:"50%" }} src='https://cdn-icons-png.flaticon.com/128/11820/11820037.png'></img>
      </div>



        <div id='fbBellicons'>
          <div className="endIcons"><img style={{width:"23px" , height:"23px" }} src='https://cdn-icons-png.flaticon.com/128/17/17704.png'></img></div>
          <div className="endIcons"><img style={{width:"27px" , height:"27px" ,borderRadius:"50%" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzVYiATyY2ee-kHJvdePsqLvydFetzjycw0Y6-6up_1tg4hxpYeTL29ecRqRa6o01d1k&usqp=CAU'></img></div>         
          <div className="endIcons"><img style={{width:"27px" , height:"27px" ,borderRadius:"50%" }} src='https://img.icons8.com/?size=24&id=86543&format=png'></img></div>
          <div className="endIcons"><img style={{width:"22px" , height:"27px" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzad3Bnp9AA_657Roe3RoJNJ0XuHRD9BEjg&usqp=CAU'></img></div>
        </div>



</div>
    );
  };
  
  export default Navbar;
  