import "./About.css"
 
import photose from "./photose.jpg"
import { RiReactjsLine } from "react-icons/ri";   

export default function About(){
    return(<div id="about"> <div className="about">
          
        <div className="aboutme"> <h1 >About me</h1>  
         <img className="img " style={{boxShadow:"2px 2px 25px #9f67ff"}} src={photose}></img>
       </div>
        <div className="aboutme2"><p> Hello! I'm Vinay Kumar, a Computer Science Engineering student with a strong passion for front-end web development and creating modern, responsive websites. I enjoy transforming ideas into clean, interactive, and user-friendly digital experiences using HTML, CSS, JavaScript, React, and Bootstrap. I am constantly improving my skills by building real-world projects and exploring new web technologies. I believe that writing clean, efficient code and paying attention to design details are essential for creating great user experiences. As a lifelong learner, I enjoy solving problems, taking on new challenges, and continuously growing as a developer. My goal is to become a skilled Full Stack Developer and contribute to innovative projects that make a meaningful impact.
</p></div></div>
<div className="box"> <div className="box2" >
   <div> <h1>3+</h1>
    <p>Project Built</p></div>
    <div>
        <h1>100%</h1>
    <p>Passion for Learning</p>
    </div>
    <div>
        <h1>2+</h1>
    <p>Internship Experience</p>
    </div>
    <div>
        <h1>6+</h1>
    <p>Technical Skills</p>
    </div>
    
    
    
    
    </div></div>
    </div>)
}