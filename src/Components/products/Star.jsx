import React from 'react'
import {FaStar,FaStarHalfAlt} from "react-icons/fa"
import {AiOutlineStar} from "react-icons/ai"
const Star = ({stars,reviews}) => {
    const ratingStar=Array.from({length:5},(elem,index)=>{
        let number = index + 0.5
        return (
            <span key={index}>
                  {
                    stars >= index +1 
                    ? <FaStar style={{color:"yellow"}}/>
                    : stars >= number
                    ? <FaStarHalfAlt style={{color:"yellow"}}/>
                    :<AiOutlineStar/>
                  }
            </span>
        )
    })
  return (
    <div style={{textAlign:"center",display:"flex", alignItems:"center",justifyContent:"center"}}>
       <p>{ratingStar}</p> &nbsp;
        <p style={{margin:"-3px 0 0 3px"}}>({reviews} customer reviews)</p>
    </div>
  )
}

export default Star