import React from "react";
function LoginForm(){
  const [input,setInput]=useState("Enter Text")
return(
  <form>
  <div id="errorMessage" 
  style={{backgroundColor:"red",text:"white"}}></div>
  <div id="username"
  <input
  type="text"
    value={input}
        onChange={(e) => setInput(e.target.value)}>
          </div>
            <div id="password"
  <input
  type="text"
    value={input}
        onChange={(e) => setInput(e.target.value)}>
          </div>

          if(id==="errorMessage"){
            console.log("errrorMessage")
  </form>
)
}
export default LoginFrom;
