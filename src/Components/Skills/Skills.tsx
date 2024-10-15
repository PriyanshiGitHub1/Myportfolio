import './Skills.css'

const Skills = () => {
  return (
    <>
      <div className="skills-img-container"><img src="/images/wallpaper6.jpg" alt="Wallpaper" /></div>
        <div className='skills-container'>
          <div className='logo-row1'>
            <img src="/images/html5.png" alt="HTML5" />
            <img src="/images/css3.png" alt="CSS3" />
            <img src="/images/js.png" alt="Javascript" />
          </div>
          <div className='logo-row2'>
            <img src="/images/reactjs.png" alt="ReactJs" />
            <img src="/images/api.png" alt="RestApi" />
          </div>
          <div className='logo-row3'>
            <img src="/images/mui.png" alt="MUI" />
            <img src="/images/github.png" alt="GitHub" />
            <img src="/images/typescript.png" alt="Typescript" />
          </div>
        </div>
      
    </>
  )
}

export default Skills