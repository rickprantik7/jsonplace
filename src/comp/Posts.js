import React, { useState } from 'react'
import Comments from './Comments'
import Username from './Username'

export default function Posts({data, comm}) {
    const [user, setuser] = useState(false)
    const [commt, setcommt] = useState(false)
    return (
        <div>
        <p onClick={()=>setuser(true)}>UserId: {data.userId}</p>
        <p>Title: {data.title}</p>
        <p onClick={()=>setcommt(true)}>Posts: {data.body}</p>
        {user?<Username key={data.userId} id={data.userId}/>:null}
        {commt?<Comments key={data.userId} id={data.id} title={data.title} comm={comm}/>:null}
        </div>
        
    )
}
