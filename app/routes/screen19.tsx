import React from 'react'

const Screen19 = () => {
  return (
    <div className='max-w-[1080px] sm:w-[1080px]  sm:h-[778px] mx-auto sm:border-2 mt-[90px] rounded-sm md:max-w-[1024px] '>
      <div className='sm:grid sm:grid-cols-10 mt-[30px] grid grid-cols-6 m-8  place-content-start '>
        <div className='sm:col-span-8 sm:text-center w-[106px] h-[28px]  font-bold sm:text-2xl sm:ml-[20px] col-span-3 text-left '>Locations </div>
        <div className='sm:col-span-2 col-span-3 '>

          <button className='bg-[#466AF3] w-[172px] h-[40px] text-white rounded-md ml-4 md:ml-[-20px]'>Add location</button>
        </div>

      </div>

      <div className='mt-5 '>
        <table className="sm:table-auto w-full table-auto md:table-auto ">
          <thead>
            <tr className=''>
              <th className='text-left pl-1 border-t-2 border-b-2 p-3 font-light text-[9px] sm:text-[15px] sm:text-left '>Location name</th>
              <th className="text-left border-t-2 border-b-2 font-light text-[9px] sm:text-[15px] ">Associate user</th>
              <th className="text-left border-t-2 border-b-2 font-light text-[9px]  sm:text-[15px] sm:text-left sm:pl-0">Email</th>
              <th className="text-left border-t-2 border-b-2 font-light text-[9px] sm:text-[15px]  sm:pl-0">Address</th>
              <th className="text-left border-t-2 border-b-2 font-light text-[9px] sm:text-[15px] ">Time zone</th>
              <th className="text-left border-t-2 border-b-2 font-light text-[9px] sm:text-[15px] ">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='sm:pl-5 border-t-2 border-b-2 p-4 font-semibold text-[9px] sm:text-[14px]'>Sale</td>
              <td className='border-t-2 border-b-2 sm:pl-11 text-blue-500 text-[9px] text-center sm:text-left sm:text-[14px]'>12</td>
              <td className='border-t-2 border-b-2 font-semibold text-[9px] sm:text-[14px]'>Sale@absorb.com</td>
              <td className='border-t-2 border-b-2 font-semibold text-[9px] sm:text-[14px]'>254-258,wasshway rd</td>
              <td className='border-t-2 border-b-2 font-semibold text-[9px] sm:text-[14px]'>GMT-01:00</td>
              <td className='border-t-2 border-b-2 font-semibold text-[9px] sm:text-[14px]'>
                <span className='flex'>

                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                      <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
                    </svg>
                  </span>&nbsp;
                  <span>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                      <path d="M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z" />
                      <path fill-rule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5Zm5.22 1.72a.75.75 0 0 1 1.06 0L10 10.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L11.06 12l1.72 1.72a.75.75 0 1 1-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 0 1-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>

                  </span>
                </span>

              </td>
            </tr>
            <tr>
              <td className='sm:pl-5 border-t-2 border-b-2 p-4 font-semibold text-[9px] sm:text-[14px]'>Angus</td>
              <td className='border-t-2 border-b-2 sm:pl-12 text-blue-500 text-[9px] text-center sm:text-left sm:text-[14px]'>5</td>
              <td className='border-t-2 border-b-2 font-semibold text-[9px] sm:text-[14px]'>Angus@absorb.com</td>
              <td className='border-t-2 border-b-2 font-semibold text-[9px] sm:text-[14px]'>49 Featherstones street</td>
              <td className='border-t-2 border-b-2 font-semibold text-[9px] sm:text-[14px]'>GMT-01:00</td>
              <td className='border-t-2 border-b-2 font-semibold text-[9px] sm:text-[14px]'>
                <span className='flex'>

                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                      <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
                    </svg>
                  </span>&nbsp;
                  <span>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                      <path d="M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z" />
                      <path fill-rule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5Zm5.22 1.72a.75.75 0 0 1 1.06 0L10 10.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L11.06 12l1.72 1.72a.75.75 0 1 1-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 0 1-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>

                  </span>
                </span>

              </td>
            </tr>

          </tbody>
        </table>

      </div>
      <div className='sm:grid sm:gap-5 sm:grid-cols-12 sm:place-items-end mt-[450px] grid grid-cols-7 mr-12 md:grid md:grid-cols-4  md:mr-[-9px] md:gap-0  '>
        <div className='sm:col-span-10  col-span-5 text-right md:col-span-3'>

          <button className='w-[81px] h-[40px] bg-[#DEDEDE] rounded-md mr-2 '>Skip</button>

        </div>
        <div className='sm:col-span-2  sm:text-left col-span-2 md:col-span-1 lg:mr-[35px]'>

          <button className='w-[146px] h-[40px] bg-[#466AF3] rounded-md text-white mr-6'>Save & continue</button>
        </div>

      </div>
    </div>
  )
}

export default Screen19
