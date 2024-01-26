import React from "react";
import { useEffect, useState } from "react"
import FbImageLibrary from 'react-fb-image-grid'
import CustomBtns from "../../components/custom btns";
import './dashboard.css';

function News(){
const [apiList , setapiList] = useState([])
const [likeNum , setlikeNum] = useState(0)
const [btnColor ,setbtnColor] = useState(false)



 
  useEffect(function(){
   getdata() },[])

  function getdata(){
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => setapiList(res.products))
}


function like(){
setlikeNum(likeNum + 1)

const newColor = btnColor === 'blue' ? ' #d5d5d5' : 'blue';
setbtnColor(newColor)

}


 if(!apiList.length){
  return <div>loading...</div> }


return (
    <div id="newsfeed">


{apiList.map(function (item) {
          return <div className="newsDiv">

            <div className="profile">
              
              <div><img style={{width:"50px" , height:"50px" , borderRadius:"50%",}} src="https://png.pngtree.com/png-vector/20200615/ourmid/pngtree-hacker-wearing-hoodie-and-using-laptop-computer-freak-hacking-and-malware-png-image_2256760.jpg"></img></div>
              <div id="title"><p>{item.title}</p>
              <h5>{item.category} <img style={{width:"15px"}} src="https://cdn-icons-png.flaticon.com/128/6786/6786125.png"></img></h5>
              </div>
            
            </div>
                    
                    <div className="descr">{item.description}<br />
                    {"price : " + item.price}</div>

                    
               {<div className="imges"> <FbImageLibrary images={item.images} /></div>}

          <div className="emoji-div">

            <div className="emoji">
              <img style={{width:"17px",}} src="https://cdn-icons-png.flaticon.com/128/3670/3670153.png" className="emoji-img"/>
              <img style={{width:"23px"}} src="https://cdn-icons-png.flaticon.com/128/11820/11820123.png" className="emoji-img"/>
              <img style={{width:"17px"}} src="https://cdn-icons-png.flaticon.com/128/4160/4160724.png"className="emoji-img"/>
            </div>

            <div className="userName">
              <p>Hammad swati and {likeNum}.5K others</p>
              <p>8 Comments </p>
              <p>30 Shares</p>
            </div>
            
          </div>

                 {  <div className="btns">
                    <button className="likebtn" onClick={()=>like()}><img style={{width:"18px" , backgroundColor : btnColor}} src="https://cdn-icons-png.flaticon.com/128/126/126473.png"></img><p>Like</p></button>
                    <button className="likebtn" ><img style={{width:"18px"}} src="https://cdn-icons-png.flaticon.com/128/3031/3031126.png"></img><p>comment</p></button>
                    <button className="likebtn" ><img style={{width:"18px"}} src="https://cdn-icons-png.flaticon.com/128/2958/2958783.png"></img><p>share</p></button>
                    
                    </div>}


    <div>
      {/* <CustomBtns      /> */}
    </div>





          </div>
        })}


    </div>
)
}
export default News