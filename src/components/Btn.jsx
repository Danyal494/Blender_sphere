
import React, { useState } from 'react'


const Btn = ({endLoading}) => {
  const [open, setOpen] = useState(false)
  // max-sm:w-[76%] 19
  // absolute z-20 rounded-[38px] left-[40.5%] top-[5%] w-[287px] max-sm:left-[12.2%]  h-[83vh]
  return (
    <div className='back  flex  items-center justify-center'>
      {/* <div className='GG'></div> */}
      <div className='' >
   
<button onClick={endLoading} className='bg-black text-white w-36  h-12 rounded-xl font-bold font-[CustomFont] text-lg'>
  Get Started
</button>


      </div>

   
    </div>
  )
}

export default Btn
