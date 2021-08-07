import React from 'react'

const Posts =({posts,loading})=>{
    if(loading){
        return <h2>loading...</h2>
    }
    return  ( <ul className='list-group mb-4'>
           {
               posts.map(post=>(
                <li key={post.id} className='list-group-item'>
                    <img src={post.avatar} alt='img'></img>
                    <h5>{`email=${post.email}`} </h5>
                    name={`${post.first_name} ${post.last_name}`} 
                </li>
               ))
           }
       </ul>
    )
}

export default Posts