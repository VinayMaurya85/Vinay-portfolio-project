import "./Skill.css"
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { width } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
 import { FaHtml5 } from "react-icons/fa";
 import { FaCss } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { BsJavascript } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import { SiExpressdotcom } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";



export default function Skill(){
    return(<div className="skill" id="skills"> 
         <div className="h1"><h1 className="skil">Skills</h1><RiReactjsLine className="reactrotate" style={{fontSize:"60px", marginBottom:"20px", marginLeft:"5px" , color:"#9f67ff" }}/></div>
        <div className="flexs"> <div className="skills">
<div className="div first"> <h1>Frontend</h1>
<div className="frontend">  <FaHtml5 style={{color:"#E34F26",fontSize:"60px"}} /> <p>HTML</p> </div>
<div  className="frontend">  <FaCss style={{color:"#1572B6",fontSize:"60px"}} /> <p>CSS</p></div>
<div  className="frontend">  <IoLogoJavascript style={{color:"#F7DF1E",fontSize:"60px"}} /> <p>JS</p> </div>
<div  className="frontend" > <FaReact style={{color:"#61DAFB",fontSize:"60px"}} /> <p>REACT</p></div>
<div  className="frontend"> <FaBootstrap style={{color:"#7952B3",fontSize:"60px"}} /> <p>BOOTSTRAP</p></div>
<div  className="frontend"> <RiTailwindCssFill style={{color:"#06B6D4",fontSize:"60px"}} /> <p> TAILWIND</p></div>
</div>
<div  className="div second"><h1>Programming</h1>
<div className="programming"><FaJava style={{color:"#F89820",fontSize:"60px"}} /> <p>JAVA</p></div>
<div className="programming"><FaPython style={{color:"#FFD43B",fontSize:"60px"}} /> <p>PYTHON</p></div>
<div className="programming"><SiCplusplus style={{color:"#00599C",fontSize:"60px"}} /> <p>C++</p></div>
<div className="programming"><BsJavascript style={{color:"#F7DF1E",fontSize:"60px"}} /> <p>JS</p></div>

</div>
<div  className="div third"> <h1>Tools</h1>
<div className="tools"><FaGithub style={{color:"#FFFFFF ",fontSize:"60px"}} /> <p>GITHUB</p></div>
<div className="tools"><FaGitAlt style={{color:"#F05032",fontSize:"60px"}} /> <p>GIT</p></div>
<div className="tools"><VscVscode style={{color:"#007ACC",fontSize:"60px"}} /> <p> VS CODE</p></div>
</div>
<div  className="div fourth"><h1>Learning</h1>
<div className="learning"><FaNodeJs style={{color:"#339933",fontSize:"60px"}} /> <p> NODE.JS</p></div>
<div className="learning"><SiExpressdotcom style={{color:"#FFFFFF  ",fontSize:"60px"}} /> <p> EXPRESS.JS</p></div>
<div className="learning"><SiMongodb style={{color:"#47A248",fontSize:"60px"}} /> <p> MONGODB</p></div>
</div>
         </div></div>
    </div>)
}