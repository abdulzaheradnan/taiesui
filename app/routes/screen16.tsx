import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import React from 'react'
import { countries } from './countries'
import {states} from "./states"
import { regions } from './region'
import { timezones } from './timezones'

function Screen16() {
    const country:{name:string}[]=countries
    const state:{state:string,abbreviation:string}[]=states
    const region:{name:string,description:string}[]=regions
    const timezone:{time_zone:string,abbreviation:string,offset:string}[]=timezones
    const actiondata=useActionData()
    console.log(actiondata)
    return (
        <Form method='post'>

        <div>
            <div className='grid p-5 max-w-[980px] mt-[93px] mx-auto border-2 rounded-xl sm:mx-auto'>
                <div className='grid grid-cols-12 '>

                    <div className='text-left col-span-11 font-bold text-2xl '>Location Details</div>
                    <div className='text-right col-span-1 sm:ml-[20px] md:ml-[40px] '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-right">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>

                </div>
                <div className='sm:grid sm:grid-cols-2 sm:gap-3 '>

                    <div>
                        <div className='mt-6 mb-2 font-semibold'>Location Name</div>

                        <div className='grid grid-cols-10  gap-3  '>
                            <input className='flex text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-1 ' placeholder="Location name" name='locationname' />



                        </div>
                    </div>
                    <div>

                        <div className='mt-4 mb-2 sm:mt-6 font-semibold'>Mail alias</div>
                        <div className='grid grid-cols-10  gap-3 '>
                            <input className='flex text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-1' placeholder="email" name='email'/>



                        </div>
                    </div>
                </div>

                <div className='mt-4 mb-2 sm:mt-6 font-semibold'>Address</div>
                <div className='grid gap-3 sm:grid sm:grid-cols-2 '>
                    <div className='grid grid-cols-10  gap-3 '>
                        <input type="text" className='text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-2' placeholder='address line1' name='address1' />
                    </div>
                    <div className='grid grid-cols-10  gap-3 '>
                        <input type="text" className='text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-2' placeholder='addrewss line2' name='address2'/>
                    </div>
                    <div className='grid grid-cols-10  gap-3 '>
                        <input type="text" className='text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-2' placeholder='city' name='city'/>
                    </div>
                    <div className='grid grid-cols-10  gap-3 '>
                        <select className='text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-2' name='state' >
                            <option value="">select state</option>
                            {state.map((item)=>{
                                return  <option value={item.state}>{item.state}</option>
                            })}
                           

                        </select>
                    </div>
                    <div className='grid grid-cols-10  gap-3 '>
                        <select className='text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-2' name='country'>
                            <option value="">select country</option>
                            {
                                country.map((item)=>{
                                    return <option value={item.name}>{item.name}</option>
                                })
                            }
                            

                        </select>
                    </div>
                    <div className='grid grid-cols-10  gap-3 '>
                        <input type="text" className='text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-2' placeholder='zip/pin code' name='zip/pin' />
                    </div>
                </div>

                <div className='sm:grid sm:grid-cols-2 gap-3 mt-4'>

                    <div>

                        <div className='mt-4 mb-2 font-semibold'>Region</div>
                        <div className='grid grid-cols-10  gap-3 '>
                            <select className='text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-2'  name="region" >
                                <option value="">select</option>
                                {region.map((item)=>{
                                    return <option value={item.name}>{item.name}</option>
                                })}
                                

                                </select>

                        </div>
                    </div>
                    <div>

                        <div className='mt-4 mb-2 font-semibold'>Time zone</div>
                        <div className='grid grid-cols-10  gap-3 '>
                            <select className='text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-2'  name="timezone" >
                                <option value="">select</option>
                                {timezone.map((item)=>{
                                    return <option value={`${item.time_zone}:${item.abbreviation}${item.offset}`}>{item.time_zone}: {item.abbreviation} {item.offset}</option>
                                })}
                                
                               

                                </select>

                        </div>
                    </div>
                </div>



                <div className='grid grid-cols-8 mt-8 sm:grid-cols-12 '>
                    <div className='col-span-6 text-right sm:col-span-11 mr-[20px]'>

                        <button className='w-[80px] h-[40px] border-2 rounded-md bg-[#dedede]' type='reset'>Cancel</button>
                    </div>
                    <div className='col-span-2 text-right sm:col-span-1 mr-[10px]'>

                        <button className='w-[80px] h-[40px] bg-[#466af3] border-2 rounded-md text-white' type='submit'>Save</button>
                    </div>

                </div>
            </div>

        </div>
        </Form>
    )
}

export default Screen16



export const action=async({request}:ActionFunctionArgs)=>{
const formData=await request.formData()

const locationname=formData.get("locationname")
const email=formData.get("email")
const address1=formData.get("address1")
const address2=formData.get("address2")
const city=formData.get("city")
const state=formData.get("state")
const country=formData.get("country")
const zipcode=formData.get("zip/pin")
const region=formData.get("region")
const timezone=formData.get("timezone")

return {location:locationname,
    email:email,
    address1:address1,
    address2:address2,
    city:city,state:state,
    country:country,
    zipcode:zipcode,
    region:region,
    timezone:timezone}

}