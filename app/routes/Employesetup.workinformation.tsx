import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData, useNavigate } from '@remix-run/react'
import { Link } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {z} from "zod"
// import { Button } from '~/components/ui/button'

// import { Checkbox } from '~/components/ui/checkbox'
// import { Label } from "~/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"

export default function Workinformation() {
    const actiondata=useActionData()
    const navigate=useNavigate()
    const handlenavigate=()=>{
        navigate("/Employesetup/basicinformation")
    }
  
    console.log(actiondata)
    const [maxDate, setMaxDate] = useState('');

    useEffect(() => {
        const getPreviousDate = () => {
            const today = new Date();
           
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0'); 
            const day = String(today.getDate()-1).padStart(2, '0');
            
            return `${year}-${month}-${day}`;
        };

        setMaxDate(getPreviousDate());
    }, []);
     

    return (
        <Form method='post' >

        <div className='w-[850px] h-[1100px] border-2 mx-auto p-[30px] rounded-md bg-[#F4F4F4]'>
            <div className='grid grid-cols-2 w-full border-red-400'>
                <div></div>
                <div className='text-right'>

                    <button className='h-[36px] w-[36px] shadow-lg bg-[#FFFFFF] rounded-md'>+</button>
                </div>
            </div>
            <div className='w-auto  grid grid-cols-2 gap-5 mt-1'>
                <div>
                    <div className='font-bold'>Department</div>
                    <div className='mt-2'>
                        <select type="text" name="department" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='ABCD001'>
                            <option value="">select</option>
                            <option value="department1">department 1</option>
                            <option value="department2">department 2</option>

                        </select>
                    </div>
                        <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.department:""}</span>
                                    </div>
                <div>
                    <div className='font-bold'>Location</div>
                    <div className='mt-2'>
                        <select type="select" name="location" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='Ms'>
                            <option value="">select</option>
                            <option value="location1">location 1</option>
                            <option value="location2">location 2</option>

                        </select>
                    </div>
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.location:""}</span>

                </div>

            </div>
            <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
                <div>
                    <div className='font-bold'>Designation</div>
                    <div className='mt-2'>
                        <select type="text" name="designation" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='ABCD001'>
                            <option value="">select</option>
                            <option value="designation1">designation 1</option>
                            <option value="designation2">designation 2</option>

                        </select>
                    </div>
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.designation:""}</span>

                </div>
                <div>
                    <div className='font-bold'>Team</div>
                    <div className='mt-2'>
                        <select type="select" name="team" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='Ms'>
                            <option value="">select</option>
                            <option value="team1">team 1</option>
                            <option value="team2">team 2</option>

                        </select>
                    </div>
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.team:""}</span>

                </div>

            </div>
            <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
                <div>
                    <div className='font-bold'>Project</div>
                    <div className='mt-2'>
                        <select type="text" name="project" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='ABCD001'>
                            <option value="">select</option>
                            <option value="project1">project 1</option>
                            <option value="project2">project 2</option>

                        </select>
                    </div>
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.project:""}</span>

                </div>
                <div>
                    <div className='font-bold'>Rank/Guide</div>
                    <div className='mt-2'>
                        <select type="select" name="rank" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='Ms'>
                            <option value="">select</option>
                            <option value="rank2">rank 2</option>
                            <option value="rank3">rank 3</option>

                        </select>
                    </div>
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.rank:""}</span>

                </div>

            </div> <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
                <div>
                    <div className='font-bold'>Employement Type</div>
                    <div className='mt-2'>
                        <select type="text" name="employementtype" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='ABCD001'>
                            <option value="">select</option>
                            <option value="softwaredeveloper">software developer</option>
                            <option value="manager">manager</option>

                        </select>
                    </div>
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.employementtype:""}</span>

                </div>
                <div>
                    <div className='font-bold'>Employee Status</div>
                    <div className='mt-2'>
                        <select type="select" name="employestatus" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='Ms'>
                            <option value="">select</option>
                            <option value="fresher">fresher</option>
                            <option value="experience">experience</option>

                        </select>
                    </div>
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.employestatus:""}</span>

                </div>

            </div>
            <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
                <div>
                    <div className='font-bold'>Source of Hire</div>
                    <div className='mt-2'>
                        <select type="text" name="sourceofhire" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='ABCD001'>
                            <option value="">select</option>
                            <option value="ui developer">ui devdelper</option>
                            <option value="backend developer">backend develper</option>

                        </select>
                    </div>
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.sourceofhire:""}</span>

                </div>
                <div>
                    <div className='font-bold'>Date of Joining</div>
                    <div className='mt-2'>
                        <input type="date" name="dateofjoining" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='Ms' min={maxDate}/>
                    </div>
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.dateofjoining:""}</span>

                </div>

            </div>
            <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
                <div>
                    <div className='font-bold'>Date of Application</div>
                    <div className='mt-2'>
                        <input type="date" name="dateofapplication" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='ABCD001' max={maxDate}>
                        </input>
                    </div>
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.dateofapplication:""}</span>

                </div>
                <div>
                    <div className='font-bold'>Date of Interview</div>
                    <div className='mt-2'>
                        <input type="date" name="dateofinterview" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='Ms' min={maxDate}>
                        </input>
                    </div>
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.dateofinterview:""}</span>

                </div>

            </div>
            <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
                <div>
                    <div className='font-bold'>Date of selection</div>
                    <div className='mt-2'>
                        <input type="date" name="dateofselection" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='ABCD001' max={maxDate}>
                        </input>
                    </div>
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.dateofselection:""}</span>

                </div>
                <div>
                    <div className='font-bold'>Number of holidays</div>
                    <div className='mt-2'>
                        <input type="text" name="numberofholidays" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='Ms'>
                        </input>
                    </div>
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.numberofholidays:""}</span>

                </div>

            </div>
            <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
                <div>
                    <div className='font-bold'>Salery</div>
                    <div className='mt-2'>
                        <input type="text" name="salery" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='$20000'>
                        </input>
                    </div>
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.salery:""}</span>

                </div>
                <div>
                    <div className='font-bold'>Date of exit</div>
                    <div className='mt-2'>
                        <input type="date" name="dateofexit" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='Ms' max={maxDate}>
                        </input>
                    </div>
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.dateofexit:""}</span>

                </div>

            </div>
            <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>

                <div>
                    <span>

                    <input type="radio" name='radio' value="break with pay"/> <label htmlFor="">Break with pay</label>
                    </span>
                    <span className='ml-[60px]'>

                    <input type="radio" name='radio' value="break without pay"/> <label htmlFor="">Break without pay</label>
                    </span><br />
                    <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.radio:""}</span>

                </div>
                <div>
        <input type="checkbox" name='checkbox' value="manager with creates rights"/>
        <label htmlFor="" className='ml-2'>Manager With creates Rights</label><br />
        <span className='text-red-600 text-[10px]'>{actiondata?.error ? actiondata?.error.checkbox:""}</span>

                </div>
                {/* <RadioGroup defaultValue="comfortable" className='flex space-x-14'>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="r1" />
                        <Label htmlFor="r1">Break With pay</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <Label htmlFor="r2">Break Without Pay</Label>
                    </div>

                    </RadioGroup>
                    <div>
                    <Checkbox />
                    <Label htmlFor="r2" className="ml-2">Manager with Create Wrights</Label>

                </div> */}
            </div>

            <div className='grid grid-cols-12  mt-[20px] w-full'>

                <div className='col-span-9  text-right'>

                    <button className='w-[81px] h-[40px] border-2 rounded-md bg-[#DEDEDE]' type='button' onClick={handlenavigate}>
                        skip
                    </button>
                </div>
                <div className='col-span-3 text-right'><button className='w-[146px] h-[40px] border-2  rounded-md bg-[#466AF3] text-white' type='submit'  >save & continue</button></div>

            </div>    </div>
                    </Form>
    )
}
export const action =async({request}:ActionFunctionArgs)=>{
    const formdata=Object.fromEntries(await request.formData())
   
    const formpayload=z.object({
        department:z.string().min(5,"Department is required min 5 characters need"),
        location:z.string().min(8,"Your current location needed"),
        designation:z.string().min(7,"your Designation needed"),
        team:z.string().min(5,"your team role needed"),
        project:z.string().min(5,"Your current project"),
        rank:z.string().min(5,"Your rank needed"),
        employementtype:z.string().min(5,"Your Role needed"),
        employestatus:z.string().min(5,"Your status needed"),
        sourceofhire:z.string().min(5,"Hiring reference needed"),
        dateofjoining:z.string().min(5,"Date of joning needed"),
        dateofapplication:z.string().min(5,"Date of Application needed"),
        dateofinterview:z.string().min(5,"Date of interview needed"),
        dateofselection:z.string().min(5,"Date of selection needed"),
        numberofholidays:z.string().min(1,"Number of holidays you had needed"),
        salery:z.string().min(4,"Yuor cuurent salery needed"),
        dateofexit:z.string().min(5,"Leave Date needed"),
        radio:z.string().min(4,"Payment method required"),
        checkbox:z.string().min(4,"Rights for manager needed")


    })
    // console.log(formdata)

    try{
        let formdatapayload=formpayload.parse(formdata)
        return {formdatapayload:formdatapayload,error:null}
    }catch(error){
        return {
            formdata:formdata,
            error:error.issues.reduce((acc,curr)=>{
                let key=curr.path[0]
                acc[key]=curr.message
                return acc

            },{})
        }
    }
return null
}