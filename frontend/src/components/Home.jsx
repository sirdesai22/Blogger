import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import BlogCard from './BlogCard'
import axios  from 'axios'

const Home = () => {

  const [data, setData] = useState();

  useEffect(() => {
    // Make a GET request to the backend endpoint
    axios.get('http://localhost:3000/allblogs')
      .then(response => {
        // Set the received data in the state
        setData(response.data);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <>
      <Navbar/>
      <div className="flex flex-wrap gap-16 justify-center my-10">
      {data && data.map((blog, index) => (
        <BlogCard key={index} title={blog.title} description={blog.description} />
      ))}
      </div>
    </>
  )
}

export default Home