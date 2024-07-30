 import { useState } from 'react';
 import {FaStar} from 'react-icons/fa';
 import './style.css';

 export default function StarRating({noOfStars = 5}){
   const[rating,setRating]=useState(0);
   const[hover,setHover]=useState(0);
    function handleClick(getCurrectIndex){
      setRating(getCurrectIndex);
          
    }
    function handleMouseEnter(getCurrectIndex){
      setHover(getCurrectIndex);
    }
    function handleMouseLeave(){
      setHover(rating);
    }
    
    return <div className="star-rating">{
      [...Array(noOfStars)].map((_,index)=>{
        return <FaStar
        key={index}
        className={index<=(hover|| rating) ? 'active':'inactive'}
        onClick={()=> handleClick(index)}
        onMouseMove={()=>handleMouseEnter(index)}
        onMouseLeave={()=>handleMouseLeave()}
        size={100}
        />
      })
    }
     </div>
 }