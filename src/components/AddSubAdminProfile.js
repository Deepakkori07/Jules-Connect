import React,{useState,useEffect} from 'react'
import { addSubAdmin } from '../Reducers/SubAdminSlice';
import NavBar from './NavBar'
import {useDispatch} from "react-redux";
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

export default function AddSubAdminProfile() {
    const [subAdminName, setSubAdminName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adminDate, setAdminDate] = useState('');
    const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState("password");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        addSubAdmin();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = { 
            subAdminName: subAdminName,
            email: email,
            password: password,
            adminDate:moment().format('DD/MM/YYYY'),
            isArchive:0,
        };
        console.log(obj);
        
        dispatch(addSubAdmin(obj));
        setSubAdminName("");
        setEmail("");
        setPassword("");
        setAdminDate("");
        navigate("/SubAdminProfile")
        Swal.fire({
            icon: "success",
            title: "Sub-admin Added",
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
    <NavBar />

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
              value={subAdminName}
              onChange={(e) => setSubAdminName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleSubmit}
              style={{ width: "100%" }}
            >
              Add Trader
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
