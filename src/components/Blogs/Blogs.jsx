import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookMark,handleReadCount}) => {

    const[blogs , setBlogs] = useState([]);

useEffect(()=>{
    fetch("blogs.json")
    .then(res => res.json())
    .then(data => setBlogs(data))
},[])
// console.log(blogs)
   
    return (
        <div>
            <h1 className="text-3xl">Total: {blogs.length}</h1>
            
            <div className="all-blog grid  grid-cols-2 gap-3.5 ml-10">
                {
                    blogs.map(blog => <Blog key={blog.id} handleReadCount={handleReadCount} handleBookMark={handleBookMark} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;