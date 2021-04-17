import { useEffect, useState } from "react"
import axios from 'axios'
import Posts from "./comp/Posts"
function App() {

const [data, setdata] = useState([])
const [comm, setcomm] = useState([])
useEffect(() => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res=>{console.log(res.data);setdata(res.data)})

}, [])
fetch(`https://jsonplaceholder.typicode.com/comments`)
.then((response) => response.json())
.then((json) => {setcomm([json]);console.log(json); })

  return (
    <div className="App">
      
     
      
      {data.map((data)=>{
       return <Posts key={data.id}  data={data} comm={comm}/>
        
      })}
    </div>
  ) 
}

export default App;
