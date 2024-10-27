import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import React from 'react'

function Screen31() {
    const actiondata=useActionData()
    console.log(actiondata)
   
    return (
        <Form method='post'>
        <div className='sm:w-[980px] sm:h-[351px]  mx-auto mt-[133px] border-2 p-[30px] rounded-xl'>
            <div className='sm:grid sm:grid-cols-2 gap-5 grid grid-cols-1'>

            <div className=''>
                <div  className='font-medium'>Field Name</div>
                <div className='mt-2'>
                    <input type="text" className='w-full sm:w-[450px] h-[42px] border-2 rounded-md pl-2' placeholder='Name' name='fieldname'/>

                </div>
            </div>
            <div className=''>
                <div htmlFor="" className='font-medium'>Field Type</div>
                <div className='mt-2'>
                    <select className='w-full sm:w-[450px] h-[42px] border-2 rounded-md pl-2' name='Fieldtype'>
                        <option value="text field" className=''>Text Field</option>
                        <option value="input field" className=''>input Field</option>
                        <option value="select field" className=''>select Field</option>

                    </select>

                </div>
            </div>
            <div className=''>
                <div htmlFor="" className='font-medium'>Help Text (Optional)</div>
                <div className='mt-2'>
                    <input type="text" className='w-full sm:w-[450px] h-[42px] border-2 rounded-md pl-2' placeholder='Enter Help Text' name='helptext'/>

                </div>
            </div>
            <div className=''>
                <div htmlFor="" className='font-medium'>Default value (Optional)</div>
                <div className='mt-2'>
                    <input type="text" className='w-full sm:w-[450px] h-[42px] border-2 rounded-md pl-2' placeholder='Enter Default Value' name='defaultvalue'/>

                </div>
            </div>
            <div className='flex gap-3'>
                <span  className='font-medium'>Required</span>
                <span>

                <label className="relative flex items-center mb-5 cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer"  />
      <div className="w-9 h-5 bg-blue-200 hover:bg-[#2468F6] peer-focus:outline-0  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-transparent after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-blue-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500 hover:peer-checked:bg-indigo-700 "></div>
      </label>
                </span>
                
            </div>
           
           

            </div>
            <div className='sm:grid sm:grid-cols-10 gap-5  mt-[25px] grid grid-cols-5'>
                <div className='sm:col-span-9 text-right col-span-4'>
                    <button className='w-[80px] h-[40px] bg-[#DEDEDE] rounded-md' type='reset'>Cancel</button>
                </div>
                <div className='sm:col-span-1 text-right col-span-1'>
                    <button className='w-[80px] h-[40px] bg-[#466AF3] rounded-md text-white' type='submit'>Save</button>
                </div>
            </div>
        </div>
        </Form>
    )
}

export default Screen31
export const action =async({request}:ActionFunctionArgs)=>{
    const formData=await request.formData()

    const fieldname=formData.get("fieldname")
    const Fieldtype=formData.get("Fieldtype")
    const helptext=formData.get("helptext")
    const defaultvalue=formData.get("defaultvalue")
    console.log(fieldname,Fieldtype,helptext,defaultvalue)

    return {fieldname:fieldname,Fieldtype:Fieldtype,helptext:helptext,defaultvalue:defaultvalue};

}