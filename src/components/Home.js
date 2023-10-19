import React from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Home() {
  const { organisations } = useSelector((state) => state.organisations);
  console.log(organisations);
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
                          <option> 2022</option>
                          <option> 2023</option>
                        </select>
                      </li>

                      <li className="month">
                        <span>march</span>
                      </li>
                      <li className="weekly">
                        weekly
                        <p>55</p>
                      </li>
                      <li className="montly">
                        montly
                        <p>55</p>
                      </li>
                      <li className="yearly">
                        yearly
                        <p>55</p>
                      </li>
                    </ul>
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
                          <option> 2022</option>
                          <option> 2023</option>
                        </select>
                      </li>

                      <li className="month">
                        <span>march</span>
                      </li>
                      <li className="weekly">
                        weekly
                        <p>55</p>
                      </li>
                      <li className="montly">
                        montly
                        <p>55</p>
                      </li>
                      <li className="yearly">
                        yearly
                        <p>55</p>
                      </li>
                    </ul>
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
                          <option> 2022</option>
                          <option> 2023</option>
                        </select>
                      </li>

                      <li className="month">
                        <span>march</span>
                      </li>
                      <li className="weekly">
                        weekly
                        <p>55</p>
                      </li>
                      <li className="montly">
                        montly
                        <p>55</p>
                      </li>
                      <li className="yearly">
                        yearly
                        <p>55</p>
                      </li>
                    </ul>
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
