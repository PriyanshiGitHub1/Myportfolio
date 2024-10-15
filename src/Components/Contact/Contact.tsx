import "./Contact.css"
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-img-container"><img src="/images/wallpaper8.jpg" alt="Wallpaper" />
      <div className="contact-container">
        <h1> Want to <br />
         Hire Me?</h1>
      </div>
      <div className='contact-info'>
      2827, Dunvale road, <br />
      Houston, Texas, <br />
      United States, <br />
      Zip Code : 77063 <br />
      <hr />
      <IoIosCall />: +1 (346) 293-5484 <br />
      <MdOutlineEmail />: priyanshi.singh833@gmail.com < br />
      < br />
      <a href='https://www.linkedin.com/in/priyanshi-singh-977279164?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target="_blank">
      <FaLinkedin style={{margin: '3%'}}/></a>
      <a href='https://www.facebook.com/profile.php?id=100006526864595&mibextid=LQQJ4d' target="_blank">
      <FaFacebook style={{margin: '3%'}}/></a>
      <a href='https://www.youtube.com/@IamPsingh' target="_blank">
      <FaYoutube style={{margin: '3%'}}/></a>
      </div>
      </div>
  )
}

export default Contact