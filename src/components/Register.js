import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/jules.png"
import Swal from "sweetalert2";

export default function Register() {
    const [adminName, setAdminName] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();
  
    const IsValidate = () => {
      let isproceed = true;
      let errormessage='Please enter value in';
      if(adminName === null || adminName === ''){
        isproceed = false;
        errormessage += 'name';
      }
      if(adminPassword === null || adminPassword === ''){
        isproceed = false;
        errormessage += 'password';
      }
      if(id===null || id===''){
        isproceed=false;
        errormessage += 'adminName';
      }else{
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(id)){
          navigate("/Login")
        }else{
          isproceed = false;
          alert(errormessage)
  
        }
      }
      return isproceed;
    }
    const handleSubmit = (e) => {
      if(IsValidate())
      e.preventDefault();
      let userobj = {
    id,adminName,adminPassword
      };
      fetch("http://localhost:8000/users",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(userobj)
      }).then((res) => {
        localStorage.setItem("adminName", adminName);
        navigate("/Login");
      }).catch((error) => {
        // alert("failed:"+error.message);
      });
      Swal.fire({
        position: 'relative',
        icon: 'success',
        title: 'Registration Successfull',
        showConfirmButton: false,
        timer: 1500
      })
    }
    return (
      <div>
        <div className="auth">
        <h1 style={{color:'#fc7e17',textAlign:'center'}}>
        <img src={logo} alt="logo" style={{height:'70px'}}></img>Create Account</h1>
            <hr></hr>
          <form class="row g-3">
            <div class="col-md-12">
              <label for="inputEmail4" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
              />
            </div>
            <div class="col-md-12">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div class="col-md-12">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-warning" onClick={handleSubmit} style={{width:'100%'}}>
                Sign up
              </button>
            </div> 
          </form>
        </div>
      </div>
    );
  }
  
