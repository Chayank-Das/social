import React from 'react'
import '../style.css'
import Navbar from '../Components/Navbar';
import logo from  "../Resources/logo.png";

function HomePage() {
  return (
    <div className="home">
        < Navbar/>
      <div className="main">
        <div className="main-center">
          <h1>Welcome To </h1>
          <img src={logo} alt="Logo" width={250} height={60}></img>
          <br></br>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas omnis cumque, dolores dignissimos molestiae <br /> adipisci amet necessitatibus quam. Ut, consequatur.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage