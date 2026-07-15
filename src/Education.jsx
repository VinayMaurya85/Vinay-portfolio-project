import "./Education.css"
import aktu from "./aktu.jpg"
import cbse from "./cbse.jpg"
import { RiReactjsLine } from "react-icons/ri";   
export default function Education(){
    return(<div className="project" id="education">
      <div className="edu" style={{textAlign:"center"
      }}> <h1 style={{display:"inline-block"}}> Education</h1><RiReactjsLine className="reactrotate4" style={{fontSize:"60px", marginBottom:"30px", marginLeft:"5px" , color:"#9f67ff" }}/></div> 
      <div className="main"><div className="mainpart">
        <div className="mainpart1"></div>


         <div className="mainparts"><div className="mainparts1"><img src={aktu}></img>
           </div>  
           <h3>  B.Tech – Computer Science and Engineering 🎓</h3>
           <h4>   Dr. A. P. J. Abdul Kalam Technical University, Lucknow</h4>
           <h5>College: Greater Noida Institute of Technology (GNIT)</h5>
           <div className="duration"><p>2023-2027</p>
           </div>
           <p>Relevant Coursework: Data Structures, DBMS, Operating Systems, Computer Networks, Web Development.</p></div>



           <div className="mainpart1"></div>
         <div className="mainparts"><div className="mainparts1"><img src={cbse}></img>
           </div>  
           <h3>  Senior Secondary (Class XII) 🏫</h3>
           <h4>  Central Board of Secondary Education</h4>
           <h5>Sri Krishan Sagar Public School (SKS)</h5>
           <div className="duration"><p>2022-2023</p>
           </div>
           <p>Subjects: Physics, Chemistry, Mathematics, English , Physical Education.</p></div>


         <div className="mainpart1"></div>
          <div className="mainparts"><div className="mainparts1"><img src={cbse}></img>
           </div>  
           <h3> Secondary School (Class X) 🏫</h3>
           <h4> Central Board of Secondary Education</h4>
           <h5>Sri Krishan Sagar Public School (SKS)</h5>
           <div className="duration"><p>2020-2021</p>
           </div>
           <p>Subjects: Science, Mathematics, English, Hindi, Social Science.</p></div>


      </div>
    </div></div>)
}