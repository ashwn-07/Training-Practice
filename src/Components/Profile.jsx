import React from 'react'
import { getImageUrl } from "../Utils";

const Profile = ({name, profession, awards, discovery, description, imgUrl}) => {


  return (
    <div className=''>
      
       <section className="basis-1/2 border-4  border-green-300 rounded-lg px-6 py-6">
    <h2 className='font-bold underline'>{name}</h2>
    <img
      className="rounded"
      src={getImageUrl(imgUrl)}
      alt={name}
      width={70}
      height={70}
    />
    <ul>
      <li>
        <b>Profession: </b> 
       {profession}
      </li>
      <li>
        <b>Awards: {awards} </b> 
        {description}
      </li>
      <li>
        <b>Discovered: </b>
        {discovery}
      </li>
    </ul>
  </section>
  </div>
 
 
    )


}


export default Profile;