import React, { useState } from 'react'

export const Logindata = (props) => {
    console.log("yes it is from login data",props.actiondata)
    const [list,setlist]=useState([])
        // setlist(props.actiondata)
    
  return (
    <div>
        <h1>login data page</h1>
        <div>{list.map((item)=>{
            return <div>{props.actiondata ? item.firstname :" "}</div>

        })}</div>
    </div>
  )
}
