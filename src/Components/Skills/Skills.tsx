import './Skills.css'
import RestApi from './api.png';
import CSS3 from './css3.png';
import GitHub from './github.png';
import HTML5 from './html5.png';
import JS from './js.png';
import MUI from './mui.png';
import ReactJs from './reactjs.png';
import Typescript from './typescript.png';
import Wallpaper2 from './wallpaper6.jpg';

const Skills = () => {
  return (
    <>
      <div className="skills-img-container"><img src= {Wallpaper2} alt="Wallpaper" /></div>
        <div className='skills-container'>
          <div className='logo-row1'>
            <img src= {HTML5} alt="HTML5" />
            <img src= {CSS3} alt="CSS3" />
            <img src= {JS} alt="Javascript" />
          </div>
          <div className='logo-row2'>
            <img src= {ReactJs} alt="ReactJs" />
            <img src= {RestApi} alt="RestApi" />
          </div>
          <div className='logo-row3'>
            <img src= {MUI} alt="MUI" />
            <img src= {GitHub} alt="GitHub" />
            <img src= {Typescript} alt="Typescript" />
          </div>
        </div>
      
    </>
  )
}

export default Skills