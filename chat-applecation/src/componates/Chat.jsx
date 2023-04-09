import React from 'react'
import Messeges from './Messeges'
import Input from "./Input"
import {BsCameraVideoFill} from 'react-icons/bs'
import {MdPersonAdd} from 'react-icons/md'
import {MdMoreHoriz} from 'react-icons/md'


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatinfo">
      <span>Hemo</span>
      <div className="icons">
         <BsCameraVideoFill />
         <MdPersonAdd />
         <MdMoreHoriz />
      </div>
    </div>
      <Messeges />
      <Input /> 
    </div>
  )
}

export default Chat