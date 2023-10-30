import React,{useState} from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { archiveMaterial } from "../Reducers/MaterialSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function ViewMaterial() {
  const { materials } = useSelector((state) => state.materials);
  console.log(materials);
  const [search, setSearch] = useState("")
  const navigate = useNavigate();
  console.log(materials);
  const dispatch = useDispatch();

  const updateArchive = (ids) => {
    let obj = {
      isArchive:1,
      id:ids,
    };
    dispatch(archiveMaterial(obj));
    Swal.fire({
      icon: "success",
      title: "Material Archived",
      showConfirmButton: false,
      timer: 2000,
    });
  }
  
  return (
    <div>
      <NavBar />
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid row">
          <span className='col-4'>
            <h4 style={{ color: "red" }}>All Materials</h4>
          </span>

          <div className='col-8 d-flex' >
            <div className='col-3 px-3'>
          <form className="w-auto" role="search" onChange={(e) => setSearch(e.target.value)}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          </div>
          
            <button
              className="btn btn-danger col-3"
              type="button"
              onClick={() => navigate("/AddMaterial")}
            >
              Add Material +
            </button>
        
            <button
              className="btn btn-primary mx-3 col-3"
              type="button"
              // onClick={() => navigate("/AddOrganisation")}
            >
              Upload
            </button>
            <button
              className="btn btn-info col-3"
              type="button"
              // onClick={() => navigate("/AddOrganisation")}
            >
              Sample SVG
            </button>
          </div>
        </div>
      </nav>
      <div>
        <table>
          <tr className="tableHead">
            <th>Category Name</th>
            <th>Material Name</th>
            <th>Active Date </th>
            <th></th>
          </tr>

          {materials && 
            materials.map((item) => {
              if(item.isArchive === 0){

                return (
                  <tr>
                  <td>{item.materialCategory}</td>
                  <td>{item.materialName}</td>
                  <td>{item.materialDate}</td>
                  <>
                    <span className="t1">
                      <span onClick={() => navigate(`/UpdateMaterial/${item.id}`)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                          
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                        </span>
                        <span onClick={() => updateArchive(item.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-box-arrow-in-down"
                          viewBox="0 0 16 16"
                          color='red'
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
                  </>
                </tr>
              );
            }
            })}
        </table>
      </div>
    </div>
  );
}
