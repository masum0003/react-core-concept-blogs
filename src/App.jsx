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

    const handleReadCount = (time,id) =>{
      const newReadCount = readTime+time;
      setReadTime(newReadCount);
      handleRemoveMark(id)
      
    }

    const handleRemoveMark = (id) =>{
        const remainingBookMark = bookMarked.filter((mark) => mark.id !== id);
        setBookMarked(remainingBookMark)


    }
    
  return (
    <>
     
      <Navbar></Navbar>
      

      <div className="main-container flex text-center ">
            <div className="left container w-[70%] ">
                
                <Blogs handleBookMark={handleBookMark} handleReadCount={handleReadCount}></Blogs>
            </div>

            <div 
            className="right-container w-[30%] border-1 border-amber-300 rounded">
                <h1 className='mt-10'>Reading Time : {readTime}</h1>
                <p>Bookmark Count :{bookMarked.length}</p> 

                {
                  bookMarked.map((marked) => <p className='bg-amber-300 shadow  rounded-xl p-2 m-2'>{marked.title}</p>)
                }
            </div>

        </div>
     
    
    </>
  )
}

export default App
