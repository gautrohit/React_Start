import React from 'react';

function Doctor2() {
  let handleClick = e => {
    e.preventDefault();
    alert('Button Clicked');
  };

  return (
    <div>
      <h1>Hello Event handling Function</h1>
      <a href="http://www.google.com" onClick={handleClick}>
        Hit Me
      </a>
    </div>
  );
}
export default Doctor2;
