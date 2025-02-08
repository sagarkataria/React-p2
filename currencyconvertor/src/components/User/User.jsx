import { useParams } from 'react-router-dom'

const User = () => {
    const { userId } = useParams()
    return (
        <div className='bg-gray-700 text-white text-3xl'>User:{userId}</div>
    )
}

export default User

export const GithubInfoLOader = async() =>{
  const data = await fetch('https://api.github.com/users/sagarkataria');
  return data.json();
}