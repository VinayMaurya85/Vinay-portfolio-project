import "./Home.css"
 import Blink from "./Blink"
 import photose from "./photose.jpg"
export default function Home() {
  return (
    <div className="home" id="home" >
    <div className="vinayfirst previous "  >
        <h1 className="vinay">Hi, I'm <br></br> <span className="vinayk" style={{color:"black"}}>Vinay Kumar👋</span></h1>
         <Blink  className="blink" />
        <p>I'm a passionate Frontend Developer and Computer Science student who enjoys building modern, responsive, and user-friendly web applications. I love turning ideas into clean, interactive digital experiences while continuously learning and improving my skills.
</p>
<div className="buttons"><button className="button1">View My Work</button>
<button className="button2">Download CV</button>
    </div> </div>
    <div className="vinaysecond previous "><div className="vinaysecond previous " ><div className="vinaysecond previous"  >
        <img src={photose}></img> 
    </div></div>  </div>


    <div className="home1">  <div className="vinaysecond   current photo"  >
        <img src={photose}></img> </div>
  

  <div className="vinayfirst  current  lines"  >
        <h1 className="vinay">Hi, I'm <br></br> <span className="vinayk" style={{color:"#10dcfb"}}>Vinay Kumar👋</span></h1>
         <Blink  className="blink" />
        <p>I'm a passionate Frontend Developer and Computer Science student who enjoys building modern, responsive, and user-friendly web applications. I love turning ideas into clean, interactive digital experiences while continuously learning and improving my skills.
</p>
<div className="buttons"> <button className="button1">View My Work</button>
<button className="button2">Download CV</button>
    </div></div> </div>
    
     
     
    </div>
     
  );
}