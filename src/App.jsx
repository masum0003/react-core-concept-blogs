import './App.css'
import Navbar from './components/Navbar/navbar'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'



function App() {
  
  const [bookMarked,setBookMarked] = useState([]);
  const [readTime,setReadTime]=useState(0);

  const handleBookMark = (blog) =>{
    // console.log(blog)

    const newBookMarked = [...bookMarked, blog];
    setBookMarked(newBookMarked)
  }

    const handleReadCount = (time) =>{
      const newReadCount = readTime+time;
      setReadTime(newReadCount);
    }
    
  return (
    <>
     
      <Navbar></Navbar>
      

      <div className="main-container flex text-center ">
            <div className="left container w-[70%] ">
                
                <Blogs handleBookMark={handleBookMark} handleReadCount={handleReadCount}></Blogs>
            </div>

            <div 
            className="right-container w-[30%] border-1 border-amber-300 roundedf">
                <h1 className='mt-10'>Reading Time : {readTime}</h1>
                <p>Bookmark Count :0</p> 

                {
                  bookMarked.map((marked) => <p>{marked.title}</p>)
                }
            </div>

        </div>
     
    
    </>
  )
}

export default App
