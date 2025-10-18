import './App.css'
import Navbar from './components/Navbar/navbar'
import Blogs from './components/Blogs/Blogs'


function App() {
  

  return (
    <>
     
      <Navbar></Navbar>
      

      <div className="main-container flex text-center ">
            <div className="left container w-[70%] ">
                
                <Blogs></Blogs>
            </div>

            <div 
            className="right-container w-[30%] ">
                <h1>Reading Time : 0</h1>
                <p>Bookmark Count :0</p>
            </div>

        </div>
     
    
    </>
  )
}

export default App
