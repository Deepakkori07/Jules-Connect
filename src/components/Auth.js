import React,{ useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Auth() {
   
    const navigate = useNavigate();
  
    useEffect(() => {
  sessionStorage.clear()
  navigate("/Login");
},[])

  
    return (
      <div>
      </div>
    );
  }
  
