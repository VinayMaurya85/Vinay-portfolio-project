import "./Contact.css"
import { FaPhoneVolume } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";   
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Contact(){
    return(<div className="contact" id="contact">
        <div className="contactme"><h1 style={{display:"inline-block"}}>Contact Me</h1><RiReactjsLine className="reactrotate3" style={{fontSize:"60px", marginBottom:"30px", marginLeft:"5px" ,color:"#9f67ff"  }}/></div> 
    <div className="center"> <div className="maincontact">
        <div className="maincontact1"><h1 style={{marginBottom:"20px"}}><b>Let's Work Together</b></h1>
        <h6 style={{color:"#bdbdbd",marginBottom:"50px"}}>Feel free to contact me for internships, freelance work, collaborations or exciting project opportunities.   </h6>
     
     
      <div className="emails">  <div className="email"  ><MdEmail  className="email1 email2" style={{ color:"#8b5cf6"}}/> <span className="span" style={{marginLeft:"2%"}}> mrvinaymaurya2020@gmail.com </span></div>
        <div className="email"  ><FaPhoneVolume className="email1" style={{ color:"#8b5cf6"}}/> <span style={{marginLeft:"2%"}}>  +91 8700569100 </span></div>
        <div className="email"  >< FaLocationDot className="email1" style={{ color:"#8b5cf6"}}/> <span style={{marginLeft:"2%"}}> Secotor-86, Noida  </span></div></div>
       <div className="iconse">  <div className="iconss">
            <a href=""><FaWhatsapp style={{width:"25px",height:"25px"}} /></a>
        </div>
        <div className="iconss">
            <a href=""><FaLinkedin style={{width:"25px",height:"25px"}} /></a>
        </div>
        <div className="iconss">
            <a href=""><FaInstagram style={{width:"25px",height:"25px"}} /></a>
        </div></div> 
        </div>


        <div className="maincontact2">
           
           <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="66242090-6722-4548-89a6-8ac55226e50f"></input>
            <input type=" text" name="Name "   placeholder="Your Name" required></input>
             <input type="email" name="email"  placeholder="Your Email" required></input>
              <input type=" text" name="subject "  placeholder="Subject" required></input>
              <textarea type=" text" name="message"  placeholder=" Your Message..." required></textarea>
              <button type="submit">Send Message</button>
           </form>
        </div>
     </div></div>
    </div>)
}

