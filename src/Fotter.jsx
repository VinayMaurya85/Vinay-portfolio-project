import "./Fottor.css";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export default function Fottor(){
return(<div className="fotter">
    <h1> Vinay Kumar</h1>
    <p>Full Stack Developer • AI Enthusiast • Google Student Ambassador</p>
    <div className="last">
         <div><a href=""><FaGithub className="last" /></a></div>
         <div><a href=""><FaInstagram className="last" /></a></div>
         <div><a href=""><CiLinkedin className="last" /></a></div>
         <div><a href=""><FaWhatsapp className="last" /></a></div>
    </div>
    <p className="lasts">© 2026 Vinay Kumar. All Rights Reserved.</p>
   <div className="lastes"> <div className="laste"> <a href="#home"><FaArrowUp /></a></div></div>
</div>)
}