import { useState } from "react"
import "./AboutMe.css"
import Wallpaper1 from "./aboutme.jpg";
import MyPicture from "./mypic.jpeg";

const About = () => {

const [checked, setChecked] = useState(true);


    return (
      <>
      <div className="about-wallpaper"><img src= {Wallpaper1} alt="Wallpaper" /></div>
      <div className="Me"><img src= {MyPicture} alt="My Picture" /></div>
      <div className="about-container">
      <h1>I'm Priyanshi Singh </h1>
      <h3>Front End Developer</h3>
      <p>A <span style={{color: 'orangered', fontWeight: 'bold'}}>goal-oriented</span> Entry Level Frontend Developer seeking to 
      <br />use <span style={{color: 'orangered', fontWeight: 'bold'}}>technical proficiency </span> 
      and creativity to develop engaging <br />
      user experiences and become advance in professional career.<br />
      Looking to leverage effective debugging, <span style={{color: 'orangered', fontWeight: 'bold'}}>code optimization </span> <br />
      and project collaboration capabilities to produce applications<br />
      that meets user expectations.
      </p>
      < hr />
      <h2 style={{color: "#0066cc", fontSize: '25px'}}>Why Work With Me?</h2>
      <div className="grid-container">
      <div className="grid-item-left">Active Listening</div>
      <div className="grid-item"><input type="checkbox" checked = {checked}/></div>
      <div className="grid-item-right">Attention to Detail </div>
      <div className="grid-item-left">Continuous Learning</div>
      <div className="grid-item"><input type="checkbox" checked = {checked}/></div>
      <div className="grid-item-right">Adaptability</div>
      <div className="grid-item-left">Problem Solving</div>
      <div className="grid-item"><input type="checkbox" checked = {checked}/></div>
      <div className="grid-item-right">Time Management</div>
      </div>
      </div>
      
      </>
    )
  }
  
  export default About