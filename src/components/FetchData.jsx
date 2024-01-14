import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FetchData = ({cat}) => {
  const [Data, setData] = useState([]);
  const fetchData =async()=>{
        await axios.get(
          cat?`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=eb4b9d3bc09b4ba1bb5d413272a9e744`
             :"https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=eb4b9d3bc09b4ba1bb5d413272a9e744"

        ).then((res)=> setData(res.data.articles));
    }
    useEffect(() => {
      console.log("Category:", cat);
      fetchData();
    }, [cat]);
    
  return (
    <div className="container my-4">
      <h3>TOP HEADLINES</h3>
      
      <div className='container-fluid d-flex justify-content-center align-items-center flex-column my-3' style={{minHeight:"100vh"}} >
      {Data.length > 0?Data.map((items,index)=>(
      <>
      <div className='container my-3 p-3' style={{width:"600px",  boxShadow:"2px 2px 10px silver", borderRadius:"10px"} }>
      <h5 className='my-1'>{items.title}</h5>
      <div className='d-flex justify-content-center align-items-center'>
      <img src={items.urlToImage}  alt="image not found"  className='img-fluid ' style={{width:"100%", height:"300px",objectFit:'cover'}}/>

      </div>
      <p className='my-1'>{items.description}</p>
      {/* <p>{items.content}</p> */}
      <Link to={items.url} target='blank'>View More</Link>
      </div>
      </>
      )
      ):"Loading...."}</div>

    </div>
   

  )
}

export default FetchData
