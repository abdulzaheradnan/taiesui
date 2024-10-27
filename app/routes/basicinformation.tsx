import React from 'react'
import React, { useState, useEffect } from 'react';

const PreviousDateInput = () => {
    const [maxdate,setmaxdate]=useState("")

    useEffect(()=>{

        const previousdate=()=>{
            const today=new Date()

            const year=String(today.getFullYear())
            const month=String(today.getMonth() + 1).padStart(2,"0")
            const day=String(today.getDate() +1).padStart(2,"0")
            console.log(year,month,day)
            return `${year}-${month}-${day}`
        }
setmaxdate(previousdate())
    },[])
   
    return (
        <div>
            <label htmlFor="dateInput">Choose a date:</label>
            <input
                type="date"
                id="dateInput"
                name="dateInput"
                max={maxdate}
            />
        </div>
    );
};

export default PreviousDateInput;
