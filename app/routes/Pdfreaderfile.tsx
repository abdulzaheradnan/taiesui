import React, { useEffect, useState } from 'react'

const Pdfreaderfile = () => {
    const [image, setimage] = useState()
    const [list,setlist]=useState<Array>([])
    const [item,setitem]=useState("")
    const handlechange = (e) => {
        const file = e.target.files[0]
        // console.log(file)
        let reader = new FileReader();
        
        reader.onloadend = function () {
            setlist([...list,image])
            // console.log(reader.result);
            setimage(reader.result)
        
        }
        reader.readAsDataURL(file);
        
    }
    
    useEffect(()=>{
    },[])
    console.log("this is list length",list.length)

    return (
        <div>
            <div>
                <input type="file" onChange={handlechange} />
            </div>
            <div>
                {list.map((item)=>{
                    return<div onClick={()=>setitem(item)}>{item ? item.slice(0,5)+"..." :" "}</div>
                })}
            </div>
            <iframe src={item} frameborder="0" style={{width:"500px",height:"500px"}}></iframe>
            {/* <div> <iframe src="Files\file-sample_150kB.pdf" style={{width:"400px",height:"400px",border:"2px solid black"}}/></div> */}
        </div>
    )
}

export default Pdfreaderfile
