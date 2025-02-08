import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetchData();
    // }, [])
    // const fetchData = async () => {
    //     const data = await fetch('https://api.github.com/users/sagarkataria')
    //     const json = await data.json();
    //     console.log(json)
    //     setData(json);
    // }
    return (
        <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>Github followers : {data.followers}
         <img src={data.avatar_url} alt="img"/>
        </div>
    )
}

export default Github