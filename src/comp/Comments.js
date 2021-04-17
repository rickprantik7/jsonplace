import axios from 'axios'
import { useEffect, useState } from "react"
export default  function Comments({title,id},comm) {
    const [data, setdata] = useState([comm])
 


const comt=data.filter(data=>{
    return
    data.postId=id
})

    return (
        <div>
            
            <h1>{title}</h1>
            {comt.map(val=>{
                return<>
             <p>{val?.name}</p>
             <p>{val?.email}</p>
             <p>{val?.body}</p>
             </>
            })}

        </div>
    )
}
