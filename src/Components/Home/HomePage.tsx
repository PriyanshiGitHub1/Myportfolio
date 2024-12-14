import "./HomePage.css"
import Background from "./Background.jpg";
import Resume from "./resume.pdf";

const HomePage = () => {

  return (
    <>
    <div className="img-container"><img src= {Background} alt="Wallpaper" />
      <div className="home-container">
        <h1>Hi, there! <br />
          Welcome</h1>
        <button style = {{height: "43px", width: "120px", fontFamily: "sans-serif", fontSize: "18px", backgroundColor: "orangered", border: "none", borderRadius: "7px", margin: "10px"}}>
        <a href="mailto:priyanshi.singh833@gmail.com">Send an email!</a> 
        </button>
        <button style = {{height: "43px", width: "120px", fontFamily: "sans-serif", fontSize: "18px", backgroundColor: "green", border: "none", borderRadius: "7px", margin: "10px"}}>
        <a href={Resume} download = "Resume">Download Resume!</a>
        </button>
        
      </div>
      </div>
    </>
  )
}

export default HomePage