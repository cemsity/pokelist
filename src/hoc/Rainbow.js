import React from 'react';

const Rainbow = (WrappedComponent) => {

  const colors = ['red', 'blue', 'green','orange', "pink", ' yellow'];
  const randomColor = colors[Math.floor(Math.random()*5)];
  const className = randomColor.concat('-text');

  return (props) =>{
    return (
      <div className ={className}>
        <WrappedComponent {...props}/>
      </div>
    )
  }
}

export default Rainbow;
