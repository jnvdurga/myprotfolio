import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[100]'>
        <div className="gap-5 flex text-4xl font-semibold">
            <h1 className='text-secondary D'>D</h1>
            <h1 className='text-white P'>P</h1>
            <h1 className='text-tertiary K'>K</h1>
        </div>
    </div>
  )
}

export default Loader
