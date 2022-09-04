import React, { useState } from 'react'
import './App.css'
import Start from './components/Start'
import Quiz from './components/Quiz'
import Toggle from "./components/Toggle"

function App() {

  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(0)
  // const [name,Setname] = useState();
  return (
    
    <div className="quiz">
    {/* <nav className="" style={{height:"60px", background:"red",display:"flex"}}>
      {start? <h3 style={{display:"flex",alignItems:"center", marginLeft:"15px"}}>{end}/5</h3>:<h3 style={{display:"flex",alignItems:"center", marginLeft:"54px"}}>IQ Test</h3>}
      <input type="text" placeholder='Search among tests...' style={{marginLeft:"992px",height:"25px",marginTop:"17px",borderRadius:"10px"}} />
      <i class="fa-solid fa-user" style={{marginTop:"14px",marginLeft:"31px",fontSize:"30px"}}></i>
      
    </nav> */}
      {start? <h3 style={{display:"flex",alignItems:"center", marginLeft:"15px",marginTop:"15px"}}>{end}/5</h3>:<Toggle />}
    
      { start ? <Quiz onClick={data => setEnd(data)}/> : <Start props={setStart} />} 

      {start ? <progress value={end} max={"5"}></progress> :" "}
    </div>
  );
}

export default App;
