import React from 'react'
import { Link } from 'react-router-dom';
import { BsFileEarmarkImageFill } from 'react-icons/bs';




const Regester = () => {
  const handelSubmit = (e) =>{
    e.preventDefault();
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password= e.target[2].value
  }






  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Hemo Chat</span>
            <span className='regester'>Regester</span>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password' />
                <input style={{display: "none"}} type="file" id='file' />
                <label style={{textAlign: "left", marginTop: 10}} htmlFor="file">
                  <span><BsFileEarmarkImageFill style={{fontSize:25, color: "#5a4cb2", verticalAlign: "bottom"}}/></span>
                  <span style={{paddingLeft: 10,fontSize: 16, color:"gray", cursor:"pointer"}}>Add an Avatar</span>
              
                </label>
                <button>Sign up</button>
            </form>
            <span className='fotter'>You do have account? <Link to="/login">Login</Link></span>
        </div>
    </div>
  )
}

export default Regester