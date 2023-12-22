import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Blog = () => {
  const [content, setContent] = useState({ title: 'Title', description: 'Description' });
  const { title } = useParams();
  console.log(title)

  useEffect(() => {
    // Make a GET request to the backend endpoint
    axios.get(`http://localhost:3000/${title}`)
      .then(response => {
        // Set the received data in the state
        setContent(response.data);
        // console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className='m-10 bg-gradient-to-br from-sky-300 to-green-300 p-10 w-[85vw] rounded-xl'>
          <h1 className='text-5xl font-bold mb-5'>{content.title}</h1>
          <p className='text-xl'>{content.description}</p>
        </div>
      </div>
    </>
  )
}

export default Blog