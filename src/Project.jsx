import "./Project.css"
import Card from "./Card.jsx"
import  MediaCard from "./Card.jsx"
import Calculator from "./Calculator.png"
import Port from "./Port.png"
import Weath from "./Weath.png"
import { RiReactjsLine } from "react-icons/ri";

export default function Project(){
    return(<div className="education" id="projects"> 
       <div className="pro"> <h1>Projects</h1><RiReactjsLine className="reactrotate5" style={{fontSize:"60px", marginBottom:"30px", marginLeft:"5px",color:"#9f67ff"}}/> </div>  
 <div className="todo"> <div className="cards">
  <MediaCard className="card card2"  title="Portfolio Project"  image={Port} HTML="HTML"
 CSS="CSS" JAVASCRIPT="JAVASCRIPT" REACT="REACT" BOOTSTRAP="BOOTSRAPT" para="A responsive personal protfolio 
 website bult using React,HTML,CSS,and Bootstrap. It showcase my skills, porjects, education, and contact
 information with a modern dark-themed design." />

   

   <MediaCard  className="card card1"  title="Calculator Project" image={Calculator}  
   HTML="HTML" CSS="CSS"  JAVASCRIPT="JAVASCRIPT"  para="A responsive calculator built with React and
    JavaScript that perfroms basic arithmetic operations with a clean and user-friendly interface."/>
    <MediaCard  className="card card3" image={Weath} title="Weather Cheak Project" 
   HTML="HTML"  CSS="CSS" JAVASCRIPT="JAVASCRIPT" REACT="REACT" BOOTSTRAP="BOOTSRAPT" para="A weather application
   that displays real-time weather information for any city using a weather API. It provides temperature humidity
   , wind speed, and current weather conditions."  />
   </div> </div></div>)
}
