import { Outlet } from '@remix-run/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Employesetup() {
    return (
        <div className='w-[1120px] h-auto border-2 mx-auto p-[30px] rounded-lg'>
            <div className='text-left font-medium text-2xl'>

                Employe Set up
            </div>


            <div className='grid grid-cols-12 w-[1119px] mt-5 '>

                <div className=' w-[150px]  grid col-span-2  h-[500px]'>
                    <div className='w-[200px]'>

                        <ul>
                            <li className='mt-1'>
                                <Link to="/Employesetup/basicinformation">
                                    Basic information</Link>
                            </li>
                            <li className='mt-1'>            <Link to="/Employesetup/workinformation"><button>Work information</button></Link>
                            </li>
                            <li className='mt-1'>            <Link to="/Employesetup/heirarchyinformation"><button>heirarchy information</button></Link><br />
                            </li>
                            <li className='mt-1'>
                                <Link to="/Employesetup/personaldetails">Personal Details</Link>

                            </li>
                            <li className='mt-1'>            <Link to="/Employesetup/identitycard"><button>identify card</button></Link>
                            </li>
                            <li className='mt-1'>            <Link to="/Employesetup/contactdetails"><button>contact details</button></Link>
                            </li>
                            <li className='mt1'>            <Link to="/Employesetup/workexperience"><button className='text-blue-600'>Work experience</button></Link>
                            </li>
                            <li className='mt-1'>            <Link to="/Employesetup/educationdetails"><button>education details</button></Link>
                            </li>

                            <li className='mt-1'>            <Link to="/Employesetup/dependentdetails"><button>dependent details</button></Link>
                            </li>
                            <li className='mt-1'>
                                <Link to="/Employesetup/requirementdetails"><button>require Documents</button></Link>

                            </li>

                        </ul>


                    </div>

                </div>


                <div className='w-[851px] h-full  col-span-10 ml-[25px]'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}
