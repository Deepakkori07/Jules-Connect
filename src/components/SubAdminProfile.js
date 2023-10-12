import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { archiveSubAdmin } from "../Reducers/SubAdminSlice";
import { useDispatch } from "react-redux";

import NavBar from "./NavBar";

export default function SubAdminProfile() {
  const { subAdmin } = useSelector((state) => state.subAdmin);
  console.log(subAdmin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateArchive = (ids) => {
    let obj = {
      isArchive:1,
      id:ids,
    };
    dispatch(archiveSubAdmin(obj));
  }
  return (
    <div>
      <NavBar />

      <div>
        <table>
          <tr className="tableHead">
            <th>Sub-Admin Name</th>
            <th>Email </th>
            <th>Created on Date</th>
            <th></th>
          </tr>

          {subAdmin.length &&
            subAdmin.map((item) => {
              if(item.isArchive === 0){
              return (
                <tr>
                  <td>{item.subAdminName}</td>
                  <td>{item.email}</td>
                  <td>
                    <b>{item.adminDate}</b>
                  </td>
                  <td>
                    <span className="t1">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                          onClick={() => navigate(`/UpdateSubAdmin/${item.id}`)}
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                        </span>
                        <span onClick={() => {updateArchive(item.id)}}> 
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-box-arrow-in-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                          />
                        </svg>
                      </span>
                    </span>
                  </td>
                  <td></td>
                </tr>
              );
              }
            })}
        </table>
      </div>
    </div>
  );
}
