import React from "react";

function Header(){
  var headerStyles = {
    backgroundColor: 'black',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    color: 'red'
  }
  return (
    <div style={headerStyles}>
    <h1>Help Queue</h1>
    </div>
  );
}

export default Header;
