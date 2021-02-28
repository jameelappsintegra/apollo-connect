import React from 'react'

const Header =({postTitle, postDesc})=>{
  return (
      <div>
  <h6>{postTitle}</h6>
  <p>{postDesc}</p>
      </div>
  );
}

export default Header