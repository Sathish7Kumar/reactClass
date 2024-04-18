import React, { useState } from 'react'
import { useGetUserID } from './getUserId'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateBlog = () => {
    const userID = useGetUserID()
    const [cookies,setCookies]=useCookies(['access_token'])
    const [blog, setblog] = useState({
        title: "",
        desc: "",
        imageUrl: "",
        userOwner: userID,
      });

    const nav = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setblog({ ...blog, [name]: value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post(
            "http://localhost:4000/postblog",
            { ...blog },
            {
              headers: { authorization: cookies.access_token },
            }
          );
    
          alert("Blog Created");
          nav("/");
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <>
    <div>
        <h2>Create your blog</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name</label>
        <input
          type="text"
          id="title"
          name="title"
          value={blog.title}
          onChange={handleChange}
        />
        <label htmlFor="desc">Description</label>
        <input
        type='text'
          id="desc"
          name="desc"
          value={blog.desc}
          onChange={handleChange}
        />
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={blog.imageUrl}
          onChange={handleChange}
        />
         <button type="submit">Create Blog</button>
        </form>
    </div>
    </>
  )
}

export default CreateBlog