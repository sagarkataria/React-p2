import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container,PostCard } from '../components/index'
function Home() {
    const [post,setPost] = useState([]);
    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts) setPost(posts)
        })
    },[])
  if(post.length === 0){
    return (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <div className="text-2xl font-bold hover:text-gray-500">
                            Login to reads posts
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
  }
  return (
     <div className="w-full py-8">
        <Container>
            <div className="flex flex-wrap">
                {post.map((post)=>(
                    <div className="p-2 w-1/4 md:w-1/2 lg:w-1/3" key={post.$id}>
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
     </div>
  )
}

export default Home