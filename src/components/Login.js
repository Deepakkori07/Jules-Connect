import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/jules.png";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();

  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState("password");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      //login implementation
      fetch("http://localhost:8000/users/" + adminEmail)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast("wrong email:");
          } else {
            if (resp.adminPassword === adminPassword) {
              localStorage.setItem("adminEmail", adminEmail);
              Swal.fire({
                imageUrl: 'https://icons.veryicon.com/png/128/application/common-icons/connect-36.png',
                title: "Welcome to Jules Connect",
                showConfirmButton: false,
                timer: 2000,
              imageWidth: 200,
              imageHeight: 200,
              imageAlt: 'Custom image',
              });
              navigate("/Home");
            } else {
              toast("wrong password:");
            }
          }
        })
        .catch((error) => {
          toast("login failed due to:" + error.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (adminEmail === "" || adminEmail === null) {
      result = false;
      toast("Please enter email");
    }
    if (adminPassword === "" || adminPassword === null) {
      result = false;
      toast("Please enter password");
    }
    return result;
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

  useEffect(() => {
    let adminEmail = localStorage.getItem("adminEmail");
    if (adminEmail === "" || adminEmail === null) {
      navigate("/Login");
    } else {
      navigate("/Home");
    }
  }, []);

  return (
    <div>
      <div className="auth">
        <h1 style={{ color: "#fc7e17", textAlign: "center" }}>
          <img src={logo} alt="logo" style={{ height: "80px" }}></img>Jules
          Connect
        </h1>
        <hr></hr>
        <form className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <div className="passwrap">
              <input
                type={type}
                className="form-control"
                id="inputPassword4"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                required
              />
              <span onClick={handleToggle}>
                <Icon icon={icon}></Icon>
              </span>
            </div>
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-warning"
              onClick={handleSubmit}
              style={{ width: "100%" }}
            >
              Sign in
            </button>
          </div>
          <div className="col-12">
            <p>New User?</p>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => navigate("/Register")}
              style={{ width: "100%" }}
            >
              Register
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
}
