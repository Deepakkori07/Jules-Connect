import React,{useState, useEffect} from 'react'
import NavBar from './NavBar'
import { useParams,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { updateSubAdmin } from '../Reducers/SubAdminSlice'
import moment from 'moment'
import Swal from 'sweetalert2';
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

export default function UpdateSubAdmin() {
  const {subAdmin} = useSelector((state) => state.subAdmin)
  const {id} = useParams();
  const [currSubAdminName, setCurrSubAdminName] = useState("")
  const [currSubAdminEmail, setCurrSubAdminEmail] = useState("")
  const [currSubAdminPassword, setCurrSubAdminPassword] = useState("")
  const [currAdminDate, setcurrAdminDate] = useState("");
  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState("password"); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setCurrSubAdminData = (ids) => {
    let SubAdminId = subAdmin.find((item) => {
      return item.id === ids;
    });
    setCurrSubAdminName(SubAdminId.subAdminName);
    setCurrSubAdminEmail(SubAdminId.email);
    setCurrSubAdminPassword(SubAdminId.password);
    setcurrAdminDate(SubAdminId.adminDate);
  };
  useEffect(() => {
    setCurrSubAdminData(id);
  },[id]);

  const updateSubAdminData = () => {
    let obj = {
      subAdminName: currSubAdminName,
      email: currSubAdminEmail,
      password: currSubAdminPassword,
      adminDate: moment().format('DD/MM/YYYY'),
      isArchive:0,
      id,
    };
    dispatch(updateSubAdmin(obj));
    navigate("/SubAdminProfile");
    Swal.fire({
      icon: "success",
      title: "SubAdmin Updated",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div>
        <NavBar/>
        <form>
        {/* <div className='wrapper'>
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

    </div> */}

<div className="container-custom">
        <h1 style={{ color: "#fc7e17", textAlign: "center" }}>ADD SUB-ADMIN PROFILE</h1>
        <hr></hr>

        <form class="row g-3">
          <div class="col-6">
            <label for="inputAddress" class="form-label">
              Sub-Admin Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              value={currSubAdminName}
              onChange={(e) => setCurrSubAdminName(e.target.value)}
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Trader Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              value={currSubAdminEmail}
              onChange={(e) => setCurrSubAdminEmail(e.target.value)}
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <div className="passwrap">
            <input
              type={type}
              class="form-control"
              id="inputPassword4"
              value={currSubAdminPassword}
              onChange={(e) => setCurrSubAdminPassword(e.target.value)}
            />
            <span onClick={handleToggle}>
                <Icon icon={icon}></Icon>
              </span>
            </div>
          </div>

          <div class="col-12">
            <button
              type="submit"
              class="btn btn-success"
              onClick={updateSubAdminData}
              style={{ width: "100%" }}
            >
              Add Trader
            </button>
          </div>
        </form>
      </div>
        </form>
    </div>
  )
}
