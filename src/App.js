import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';


function App() {
 const [posts,setposts] = useState([])
 const [loading,setloading] =useState(false)
 const [currentpage,setcurrentpage]=useState('')
 const [pagenum,setpagenum]=useState(1)

 useEffect(()=>{
   const fetchpost =async ()=>{
     setloading(true)
     const res = await axios.get(`https://reqres.in/api/users?page=${pagenum}`)
     setposts(res.data.data)
     setcurrentpage(res.data.total_pages)
     console.log(pagenum,"useeffect")
     setloading(false)
   }
   fetchpost()
 },[pagenum])
  const paginate = (number)=>{
    console.log(number,"paginate k andar ")
    setpagenum(number)
  }

 //console.log(posts)
  return (
    <div className="container mt-5">
      <h1>My page</h1>
      <Posts posts={posts} loading={loading}/>
      <Pagination currentpage={currentpage}  paginate={paginate}/>
    </div>
  );
}

export default App;
