import axios from 'axios'
import { useEffect, useState } from "react"
export default  function Username({key,id}) {
    const [data, setdata] = useState([])
 
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((json) => {setdata([json]);console.log(json); })
  

 
  console.log(data)
    return (
        <div>
            <h1>{data[0]?.username }</h1>
            <h1>{data[0]?.name }</h1>
            <h1>{data[0]?.email }</h1>
            <h1>{data[0]?.website }</h1>
            <h1>{data[0]?.company.name }</h1>
        </div>
    )
}
