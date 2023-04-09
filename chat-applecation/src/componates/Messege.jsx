import React from 'react'
import img from '../assets/pexels-elina-volkova-16049221.jpg'

const Messege = () => {
  return (
    <div className='messege owner'>
        <div className='messegeInfo' style={{display: "flex", flexDirection: "column", color: "gray" ,marginTop: 10, marginBottom:15, padding: 10}}>
            <img src={img} style={{width:40, height:40,borderRadius: 50, objectFit: "cover"}} alt="" />
            <span>Dave</span>

        </div>
        <div className='messageContent'>
           <img src={img} alt=""  />
            <p>Hey there!</p>
        </div>
    </div>
  )
}

export default Messege