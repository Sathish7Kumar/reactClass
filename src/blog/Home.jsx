import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useGetUserID } from './getUserId'

const Home = () => {
    const [blogs, setblogs] = useState([])
    const [savedBlogs, setsavedBlogs] = useState([])

    const userID = useGetUserID()

    useEffect(() => {
        const fetchBlogs = async () => {
          try {
            const response = await axios.get("http://localhost:4000/getblog");
            setblogs(response.data);
          } catch (err) {
            console.log(err);
          }
        };
        const fetchSavedBlogs = async () => {
            try {
              const response = await axios.get(
                `http://localhost:4000/savedblogs/ids/${userID}`
              );
              setsavedBlogs(response.data.savedBlogs);
            } catch (err) {
              console.log(err);
            }
          };
      
          fetchBlogs();
          fetchSavedBlogs();
        }, []);

        const saveBlog = async (blogID) => {
            try {
              const response = await axios.put("http://localhost:4000", {
                blogID,
                userID,
              });
              setsavedBlogs(response.data.savedBlogs);
            } catch (err) {
              console.log(err);
            }
          };

  return (
    <>
    <h2>Blog</h2>
    <div>
        {blogs.map((e,i)=>{
            return(
                <div key={e._id}>
                    <h2>{e.title} 
                    <button 
                     onClick={()=>saveBlog(e._id)}>
                        Save
                        </button>
                    </h2>
                    <img src={e.imageUrl} alt="" />
                    <p>{e.desc}</p>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Home