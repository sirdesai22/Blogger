import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='w-full bg-blue-400 flex justify-between px-3 py-2 items-center'>
        <h1 className='text-3xl font-extrabold'>Blogger</h1>
        <div>
          <Link to={'/newblog'}>
            <button className='bg-blue-600 py-1 px-5 text-xl font-semibold text-white rounded-md'>New Blog</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar