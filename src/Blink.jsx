import { useEffect, useState } from "react"
  
export default function Blink(){
    const words=["Frontend Developer","React Developer" ,"UI Enthusiast" ,"JavaScript Developer",
        "Problem Solver","Continuous Learner"]
        const [wordindex , setWordindex]=useState(0);
        const [text, setText]=useState("");
        const [charindex, setCharindex]=useState(0);

      useEffect(()=>{
            if(charindex<words[wordindex].length){
                const timeout=setTimeout(()=>{
                    setText((prev)=>prev+words[wordindex][charindex]);
                    setCharindex((prev)=>prev+1);
                },120);
                return()=>clearTimeout(timeout)
            }
            else{
                const timeout=setTimeout(()=>{
                    setText("");
                    setCharindex(0);
                    setWordindex((prev)=>(prev+1)%words.length)
                },500)
                return ()=>clearTimeout(timeout)
            }
        },[charindex,wordindex])
        return(
           <h2 className="blinks" style={{ color:"rgba(255, 255, 255, 0.636)",display:"flex"}}>I am a  &nbsp; <h2 className="blik" style={{color:" #9f67ff", textShadow: " 0 0 20px  purple"}}>{text}</h2></h2>
        )

    
}