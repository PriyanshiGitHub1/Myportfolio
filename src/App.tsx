import HomePage from './Components/Home/HomePage'
import About from './Components/About/AboutMe'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import './App.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <>
        <Router basename="/Myportfolio">
          <div className='tab-container'>
            <Tabs>
              <Tab label="Home" component={Link} to={"/"} sx={{ fontWeight: 'bold', color: 'white', backgroundColor: 'black', zIndex: 1 }} />
              <Tab label="About" component={Link} to={"/About"} sx={{ fontWeight: 'bold', color: 'white', backgroundColor: 'red', zIndex: 1 }} />
              <Tab label="Skills" component={Link} to={"/Skills"} sx={{ fontWeight: 'bold', color: 'white', backgroundColor: 'black', zIndex: 1 }} />
              <Tab label="Projects" component={Link} to={"/Projects"} sx={{ fontWeight: 'bold', color: 'white', backgroundColor: 'red', zIndex: 1 }} />
              <Tab label="Contact" component={Link} to={"/Contact"} sx={{ fontWeight: 'bold', color: 'white', backgroundColor: 'black', zIndex: 1 }} />
            </Tabs>
          </div>
          <div className='component-render'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/About" element={<About />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
    </>
  )
}
export default App
