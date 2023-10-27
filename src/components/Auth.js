import React,{ useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Auth() {
   
    const navigate = useNavigate();
  
    useEffect(() => {
      let adminEmail=localStorage.getItem('adminEmail');
      if(adminEmail === '' || adminEmail === null){
        navigate("/Login");
      }else{
        navigate("/Home");
      }
    },[]);

  
    return (
      <div>
      </div>
    );
  }
  
