import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-1/2 h-5/6 bg-sky-200 text-center rounded-lg p-4 flex flex-col justify-center
             items-center gap-16'>
                <h1 className='text-6xl font-semibold'>Login</h1>
                <form action="" className='w-5/6'>
                    <div className='my-5'>
                        <input type="text" name="" id="" placeholder='Email or username' className='w-full text-xl p-2 rounded-xl'/>
                    </div>
                    <div className='my-5'>
                        <input type="password" name="" id="" placeholder='Password' className='w-full text-xl p-2 rounded-xl'/>
                    </div>
                    <div className='my-5'>
                        <input type="submit" name="" id="" value='Login' className='w-1/2 text-xl p-2 rounded-xl bg-blue-500 font-semibold cursor-pointer'/>
                    </div>
                </form>
                <div>
                    <p>Don't have an account? <span className='text-blue-500 underline'><Link to={'/signup'}>Sign in</Link></span></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login