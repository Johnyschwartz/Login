import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function App(){
  const [user,setuser]= useState("")
  const [pass,setpass]= useState("")
  const navigate=useNavigate()
  function handleuser(evt){
       setuser(evt.target.value)
  }
  function handlepass(evt){
    setpass(evt.target.value)
  }
  function change()
  {
    var logindetails = axios.get(`http://localhost:5000/Login?username=${user}&password=${pass}`)
    logindetails.then(function(data){
      if(data.data===true){
         navigate("/success")
      }
      else{
        navigate("/Fail")
      }
    })
  }
  return(
    <>
     
      <input onChange={handleuser} placeholder="username" name="username"/><br/>
      <input onChange={handlepass} placeholder="password" name="password"/><br/>
      <button onClick={change}>login</button>
     
    </>
  )
}
export default App