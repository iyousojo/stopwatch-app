import React,{useState, useEffect,useRef} from "react"

function Stopwatch(){

 const[isrunning, setIsrunning] = useState(false);
 
 const[ elaspsetime, setElaspsetime] =useState(0);
 const intervalidRef =  useRef(null);
 const startTimeref =  useRef(0);



 function start(){
    setIsrunning(true)
    startTimeref.current = Date.now() - elaspsetime

 }

 useEffect(() =>{

    if(isrunning){
        intervalidRef.current = setInterval(() =>{
        setElaspsetime(Date.now() - startTimeref.current)
        }  ,10)
    }

    return() =>{
        clearInterval(intervalidRef.current)
    }


 }, [isrunning]);

 function stop(){
    setIsrunning(false)

 }
  function reset(){
    setElaspsetime(0)
    setIsrunning(false)
  }

 function timeformat(){

    let hours = Math.floor(elaspsetime /  (1000 * 60 * 60 ));
    let minutes = Math.floor(elaspsetime / (1000 * 60) % 60);
    let second =  Math.floor(elaspsetime / (1000) % 60);
    let milliseconds = Math.floor((elaspsetime % 1000) / 10);

    hours = String(hours).padStart(2,"0");
    minutes = String( minutes).padStart(2,"0");
    second =  String( second).padStart(2,"0");
    milliseconds = String(milliseconds).padStart(2,"0");

    return `${minutes}:${second}:${milliseconds}`;

 }

    return(
     <div className="stopwatch">
        <div className="display">{timeformat()}</div>
        <div className="controls">
        <button onClick={start} className="start-button">start</button>
        <button  onClick={stop}className="stop-button">stop </button>
        <button  onClick={reset} className="reset-button">Reset</button>
        </div>
     </div>
    )

}
export default Stopwatch