import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useGetUserID } from './getUserId';

const SavedBlog = () => {
    const [savedBlogs, setsavedBlogs] = useState([])
    const userID = useGetUserID()
    useEffect(() => {
        const fetchSavedBlogs = async () => {
          try {
            const response = await axios.get(
              `http://localhost:4000/savedblog/${userID}`
            );
            setsavedBlogs(response.data.savedBlog);
            // console.log(savedBlogs)
          } catch (err) {
            console.log(err);
          }
        };
        fetchSavedBlogs();
    }, []);
  return (
    <div>
        <h2>Your Saved Blogs</h2>
        {savedBlogs.map((e,i)=>{
            return(
                <div key={i}>
                    <h2>{e.title}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default SavedBlog