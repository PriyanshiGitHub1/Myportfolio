import "./HomePage.css"
import Background from "./Background.jpg";

const HomePage = () => {

  return (
    <>
    <div className="img-container"><img src= {Background} alt="Wallpaper" />
      <div className="home-container">
        <h1>Hi, there! <br />
          Welcome</h1>
      </div>
      </div>
    </>
  )
}

export default HomePage