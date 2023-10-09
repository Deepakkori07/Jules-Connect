import React,{useState, useEffect} from 'react'
import NavBar from './NavBar'
import { useParams,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { update } from '../Reducers/OrganisationSlice'

export default function UpdateSubAdmin() {
  const {organisations} = useSelector((state) => state.organisations)
  const {id} = useParams();
  const [currSubAdminName, setCurrSubAdminName] = useState("")
  const [currSubAdminEmail, setCurrSubAdminEmail] = useState("")
  const [currSubAdminPassword, setCurrSubAdminPassword] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setCurrSubAdminData = (ids) => {
    let SubAdminId = organisations.find((item) => {
      return item.id === ids;
    });
    setCurrSubAdminName(SubAdminId.subAdminName);
    setCurrSubAdminEmail(SubAdminId.email);
    setCurrSubAdminPassword(SubAdminId.password);
  };
  useEffect(() => {
    setCurrSubAdminData(id);
  },[id]);

  const updateSubAdminData = () => {
    let obj = {
      subAdminName: currSubAdminName,
      email: currSubAdminEmail,
      password: currSubAdminPassword,
      id,
    };
    dispatch(update(obj));
    navigate("/SubAdminProfile");
  }
  return (
    <div>
        <NavBar/>
        <form>
        <div className='wrapper'>
        <div className='checkout-step active'>
            <div className='step-title'>
                <h5>Update Sub Admin Profile</h5>
            </div>
            <div className='shipping-adres'>
                <div className='form-wrap'>
                    <ul className='form-list'>
                        <li className='half'>
                            <lable>Sub-Admin Name</lable>
                            <input type='text' value={currSubAdminName} onChange={(e) =>setCurrSubAdminName(e.target.value)}
                            required/>
                        </li>
                        <li className='half'>
                            <lable>Email id</lable>
                            <input type='email'
                            value={currSubAdminEmail} onChange={(e) => setCurrSubAdminEmail(e.target.value)} 
                            required/>
                        </li>
                        <li className='half'>
                            <lable>Password</lable>
                            <input type='password' 
                            value={currSubAdminPassword} onChange={(e) => setCurrSubAdminPassword(e.target.value)}/>
                        </li>
                    </ul>
                    <button type='button' className='btn btn-danger' onClick={updateSubAdminData}>Submit</button>
                </div>
            </div>
        </div>

    </div>
        </form>
    </div>
  )
}
