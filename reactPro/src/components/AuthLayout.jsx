import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({
    children,authetication=true
}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
      if(authetication && authStatus !== authetication){
        navigate("/login")
      }else if(!authetication && authStatus !== authetication){
        navigate("/")   
      }else{
        setLoading(false);
      }
    }, [authStatus,navigate,authetication])

  return loading ? <div>Loading...</div> : {children};
}
