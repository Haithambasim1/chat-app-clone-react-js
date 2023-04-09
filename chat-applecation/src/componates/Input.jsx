import React from 'react'
import {MdAttachFile} from 'react-icons/md'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder= 'type something...' />
      <div className="send">
        <MdAttachFile style={{fontSize: 20}}/>
        <button className="sendbtn">send</button>

      </div>
    </div>
  )
}

export default Input