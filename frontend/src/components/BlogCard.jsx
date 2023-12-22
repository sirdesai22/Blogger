import React from 'react'

const BlogCard = ({title, description}) => {

  const showBlog = async () => {
    try {
      // Assuming you have a route on your server that handles fetching a specific blog
      const response = await fetch(`http://localhost:3000/${title}`);
      
      if (response.ok) {
        // Handle successful response, e.g., redirect or show a success message
        console.log('Blog fetched successfully');
        // Redirect to the blog page
        window.location.href = `/${title}`;
      } else {
        // Handle error response
        console.error('Error fetching blog');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className='w-1/4 bg-slate-300 p-5 rounded-lg flex flex-col gap-3'>
        <h1 className='text-2xl font-semibold'>{title.length>50 ? title.slice(0, 50) + "..." : title}</h1>
        <p className='break-words'>{description.length>160 ? description.slice(0, 160) + "..." : description}</p>
        <button className='bg-emerald-300 py-1 rounded-full w-1/3 font-semibold' onClick={showBlog}>Read Blog</button>
    </div>
  )
}

export default BlogCard