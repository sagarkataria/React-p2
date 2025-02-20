import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/config'
import {PostCard,Container} from '../components'
function AllPost() {
  const [posts,setPosts] = useState([]);
  appwriteService.getAllPosts([]).then((posts) => {
     if(posts){
       setPosts(posts);
     }
  });
  return (
    <div className='w-full py-8'>
      <Container>
         <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard post={post}/>
              </div>
            ))}
         </div>
      </Container>
    </div>
  )
}

export default AllPost