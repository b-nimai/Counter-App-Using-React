import React, { useState } from 'react'



function Counter() {
    let [count, setCount] = useState(0)

    const increaseValue = () => {
        if(count <= 19)
            setCount(count + 1)
    }

    const decreaseValue = () => {
        if(count >= 1)
            setCount(count - 1)
    }

  return (
    <div className='flex justify-center items-center flex-col p-5 shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-lg'>
      <h1 className='text-3xl font-bold text-blue'>Counter App</h1>
      <div className='flex justify-center items-center gap-5 p-4'>
        <button className='bg-slate-300 hover:bg-white hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] text-white hover:text-black border px-10 pb-2 font-bold text-3xl rounded-full'
            onClick={decreaseValue}

        >
             - 
        </button>
        <div className='text-3xl font-bold'>{count}</div>
        <button className='bg-slate-300 hover:bg-white hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] text-white hover:text-black border px-10 pb-2 font-bold text-3xl rounded-full'
            onClick={increaseValue}
        >
            +
        </button>
      </div>
    </div>
  )
}

export default Counter
