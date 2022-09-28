import React, { useState } from "react";
const User = (props) => {
  const {data} = props;         //destructring
  // console.log(data.name);


  return (
    <>
      <h1>User Component</h1>
       <p>Name : {data.name} </p>
            <p>age : {data.age} </p> 
     

     
    </>
  );
};

export default User;
