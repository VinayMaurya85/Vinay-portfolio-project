 import "./Bar.css"
 import close from "./close.png"
import menu from "./menu.svg"
import Home from './Home.jsx'
import Skill from "./Skill.jsx"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import About from "./About.jsx"
import Project from "./Project.jsx"
import Education from "./Education.jsx"
import Contact from "./Contact.jsx"
import Fotter from "./Fotter.jsx"
 
 export default function Bar() {
  function change(){
    const sidebar = document.querySelector(".sidebar");
    return  (sidebar.style.display = "block")
  }
  function closes(){
    const sidebar = document.querySelector(".sidebar");
    return  (sidebar.style.display = "none")
  }
  return(<div>
    <nav>
      <ul  >
        <li className="vinaybar"><a href="#vinay">Vinay <a className="a">Kumar</a> </a></li>
         <li className="menu-item"><a href="#home"  className="nav-link">Home</a></li>
          <li className="menu-item"><a href="#about"  className="nav-link">About</a></li>
        <li className="menu-item"><a href="#skills"  className="nav-link">Skills</a></li>
        <li className="menu-item"><a href="#projects"  className="nav-link">Projects</a></li>
                 <li className="menu-item"><a href="#education"  className="nav-link">Education</a></li>
          
        <li className="menu-item"><a href="#contact"  className="nav-link">Contact</a></li>
            <li className="menuicon1"><a href=""><LinkedInIcon /> </a></li>
            <li className="menuicon2"><a href=""><GitHubIcon /> </a></li>
        <li onClick={change}><a href="#menu"> <img src={menu} alt="menu"  className="menu"/></a></li>

      
      </ul>
            <ul className="sidebar"> 
         <li onClick={closes}><a href="#home"> <img src={close} alt="close"  className="close"/></a></li>
         <li className="navitem"><a 
          href="#home"  >Home</a></li>
          <li className="navitem" ><a 
           href="#about"  >About</a></li>
        <li className="navitem"><a 
         href="#skills"  >Skills</a></li>
         <li className="navitem"><a 
          href="#education"  >Education</a></li>
        <li className="navitem"><a 
         href="#projects" >Projects</a></li>
         <li className="navitem"><a 
          href="#certificate">Certificate</a></li>
        <li className="navitem"><a 
         href="#contact">Contact</a></li>

      </ul>
    </nav>
< Home />
<About />
<Skill />
<Project />
<Education />
<Contact />
<Fotter />
  </div>)
 }