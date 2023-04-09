import React from 'react'
import img from '../assets/man face.jpg'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" name="" id="" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img style={{width: 45, height:45, borderRadius: 50, objectFit: "cover"}} src={img} alt="" />
        <div>
          <span>jamal</span>
        </div>
      </div>
      <div className="userChat">
        <img style={{width: 45, height:45, borderRadius: 50, objectFit: "cover"}} src={img} alt="" />
        <div>
          <span>jamal</span>
        </div>
      </div>
      <div className="userChat">
        <img style={{width: 45, height:45, borderRadius: 50, objectFit: "cover"}} src={img} alt="" />
        <div>
          <span>jamal</span>
        </div>
      </div>
      <div className="userChat">
        <img style={{width: 45, height:45, borderRadius: 50, objectFit: "cover"}} src={img} alt="" />
        <div>
          <span>jamal</span>
        </div>
      </div>
      <div className="userChat">
        <img style={{width: 45, height:45, borderRadius: 50, objectFit: "cover"}} src={img} alt="" />
        <div>
          <span>jamal</span>
        </div>
      </div>
    </div>
  )
}

export default Search