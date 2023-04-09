import React from 'react'
import Sidebar from '../componates/Sidebar'
import Chat from '../componates/Chat'


const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home