import React,{useEffect} from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { organisations } = useSelector((state) => state.organisations);
  console.log(organisations);
  const navigate = useNavigate();
  useEffect(() => {
    let adminEmail=localStorage.getItem('adminEmail');
    if(adminEmail === '' || adminEmail === null){
      navigate("/");
    }
  },[]);
  return (
    <div>
      <NavBar />
      {/* {organisations.length &&
        organisations.map((item) => {
          return ( */}
            <div className="wrapper">
              <div className="row">
                <div className="col30">
                  <div className="carddata1">
                    <ul className="card-detail">
                    <li>
                        <select className="year">
                          <option> year</option>
                          <option> 2022</option>
                          <option> 2023</option>
                        </select>
                      </li>
                      <li>
                        <select className="year">
                        <option> month</option>
                          <option> Jan</option>
                          <option> Feb</option>
                          <option>Mar</option>
                          <option>Apr</option>
                          <option>May</option>
                          <option>Jun</option>
                          <option>Jul</option>
                          <option>Aug</option>
                          <option>Sep</option>
                          <option>Oct</option>
                          <option>Nov</option>
                          <option>Dec</option>
                        </select>
                      </li>
                    </ul>
                    <hr></hr>
                    <div className="data">
                      <div className="circle">22</div>
                      <div className="title">Total Assiged Organisation</div>
                    </div>
                  </div>
                </div>
                <div className="col30">
                  <div className="carddata">
                    <ul className="card-detail">
                    <li>
                        <select className="year">
                          <option> year</option>
                          <option> 2022</option>
                          <option> 2023</option>
                        </select>
                      </li>
                      <li>
                        <select className="year">
                        <option> month</option>
                          <option> Jan</option>
                          <option> Feb</option>
                          <option>Mar</option>
                          <option>Apr</option>
                          <option>May</option>
                          <option>Jun</option>
                          <option>Jul</option>
                          <option>Aug</option>
                          <option>Sep</option>
                          <option>Oct</option>
                          <option>Nov</option>
                          <option>Dec</option>
                        </select>
                      </li>
                    </ul>
                    <hr></hr>
                    <div className="data">
                      <div className="circle">34</div>
                      <div className="title">Total Assigned Traders</div>
                    </div>
                  </div>
                </div>
                <div className="col30">
                  <div className="carddata3">
                    <ul className="card-detail">
                    <li>
                        <select className="year">
                          <option> year</option>
                          <option> 2022</option>
                          <option> 2023</option>
                        </select>
                      </li>
                      <li>
                        <select className="year">
                        <option> month</option>
                          <option> Jan</option>
                          <option> Feb</option>
                          <option>Mar</option>
                          <option>Apr</option>
                          <option>May</option>
                          <option>Jun</option>
                          <option>Jul</option>
                          <option>Aug</option>
                          <option>Sep</option>
                          <option>Oct</option>
                          <option>Nov</option>
                          <option>Dec</option>
                        </select>
                      </li>
                    </ul>
                    <hr></hr>
                    <div className="data">
                      <div className="circle">20</div>
                      <div className="title">Total Assigned Categories</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* );
        })} */}
    </div>
  );
}
