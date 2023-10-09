import React,{useState,useEffect} from 'react'
import { add } from '../Reducers/OrganisationSlice'
import NavBar from './NavBar'
import {useDispatch} from "react-redux";

export default function AddSubAdminProfile() {
    const [subAdminName, setSubAdminName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        add();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = { 
            subAdminName: subAdminName,
            email: email,
            password: password,
        };
        console.log(obj);
        
        dispatch(add(obj));
        setSubAdminName("");
        setEmail("");
        setPassword("");
    };
  return (
    <div>
    <NavBar />
    <div className='wrapper'>
        <div className='checkout-step active'>
            <div className='step-title'>
                <h5>Ad Sub Admin Profile</h5>
            </div>
            <div className='shipping-adres'>
                <div className='form-wrap'>
                    <ul className='form-list'>
                        <li className='half'>
                            <lable>Sub-Admin Name</lable>
                            <input type='text' value={subAdminName} onChange={(e) =>setSubAdminName(e.target.value)}
                            required/>
                        </li>
                        <li className='half'>
                            <lable>Email id</lable>
                            <input type='email'
                            value={email} onChange={(e) => setEmail(e.target.value)} 
                            required/>
                        </li>
                        <li className='half'>
                            <lable>Password</lable>
                            <input type='password' 
                            value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </li>
                    </ul>
                    <button type='button' className='btn btn-danger' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}
