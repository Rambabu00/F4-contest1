 
 import { useState } from "react";
 import './SignUp.css';
  function SignUp(){
    const  [state, setstate] = useState({name: "", email: "", password: "" ,confirmPass: ""});
    const [error,setError] = useState("");
    
    function Handler(){
      if(state.name==="" || state.email==="" || state.password==="" || state.confirmPass===""){
        setError("All the fields are mandatory")
      }
      else{
      if(state.password!==state.confirmPass){
        setError("Password and Confirm Password does not Match!")
      }
      else{
        setError("Successfully Signed Up!")
        setstate({...state,name: "", email: "", password: "" ,confirmPass: ""})
      }
      }
    }
    return(
        <div className="container1">
        <div>
        <label for="name">Full Name</label>
            <input type="text"  id="name" value={state.name} onChange={(e)=>{setstate({...state, name:e.target.value,})}}>

            </input>
        </div>
        <div>
        <label for="Email">Email</label>
            <input type="email" id="Email" value={state.email} onChange={(e)=>{setstate({...state, email:e.target.value})}}>

            </input>
        </div>
      <div>
      <label for="pass">Password</label>
            <input type="password" id="pass" value={state.password} onChange={(e)=>{setstate({...state, password:e.target.value})}}>

            </input>
      </div>
             <div>
             <label for="Confirm Password">Confirm Password</label>
            <input type="password" id="Confirm Password" value={state.confirmPass} onChange={(e)=>{setstate({...state, confirmPass:e.target.value})}}>

            </input>
             </div>
            { error==="All the fields are mandatory" || error==="Password and Confirm Password does not Match!" ? (<p style={{color:'red'}}>Error: {error}</p>) : <p style={{color:"green"}}>{error}</p>}
            <button type="submit" onClick={Handler}>SignUp</button>

        </div>
    )
}
export default SignUp