import React, { useState } from 'react'

const Newblog = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addNewBlog = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/newblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      window.location.href = '/'
      if (response.ok) {
        // Handle successful response, e.g., redirect or show a success message
        console.log('Data sent successfully');

      } else {
        // Handle error response
        console.error('Error sending data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-11/12 bg-sky-200 h-[90%] rounded-lg p-5 flex flex-col gap-5 shadow-lg shadow-orange-300">
          <input type="text" name="title" onChange={handleInputChange} value={formData.title} placeholder='Title of the blog' className='p-2 text-3xl border-b-2 bg-transparent border-slate-400 focus:outline-none focus:border-b-2 focus:ring-0 focus:border-black font-semibold' />

          <textarea name="description" cols="30" rows="20" onChange={handleInputChange} value={formData.description} placeholder='Write your blog...' className='p-2 text-xl border-0 bg-transparent focus:outline-none focus:border-0 focus:ring-0 focus:border-black resize-none'></textarea>

          <button onClick={addNewBlog} className='self-end bg-blue-500 text-white py-2 px-5 font-semibold text-lg rounded-md'>Post</button>
        </div>
      </div>
    </>
  )
}

export default Newblog