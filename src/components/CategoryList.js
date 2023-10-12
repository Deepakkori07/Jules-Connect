import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { addCategory } from "../Reducers/CategorySlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { archiveCategory } from "../Reducers/CategorySlice";
import moment from "moment/moment";

export default function CategoryList() {
  const [materialCategory, setMaterialCategory] = useState("");
  const [categoryDate, setCategoryDate] = useState("");
  const {categories} = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(addCategory);

  useEffect(() => {
    addCategory();
  }, []);
  const addCategoryHandle = (e) => {
    e.preventDefault();
    let obj = {
      materialCategory: materialCategory,
      categoryDate:moment().format('DD/MM/YYYY'),
      isArchive:0,
    };
    console.log(obj);

    dispatch(addCategory(obj));
    setMaterialCategory("");
    setCategoryDate("");
  };

  const updateArchive = (ids) => {
    let obj = {
      isArchive:1,
      id:ids,
    };
    dispatch(archiveCategory(obj));
  }

  return (
    <div>
      <NavBar />
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span>
            <h4 style={{ color: "red" }}>All materialCategory</h4>
          </span>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add materialCategory +
            </button>
            <button
              className="btn btn-primary"
              type="button"
              // onClick={() => Navigate("/AddOrganisation")}
            >
              Upload
            </button>
            <button
              className="btn btn-info"
              type="button"
              // onClick={() => Navigate("/AddOrganisation")}
            >
              Sample SVG
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Add materialCategory
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <input type="text" value={materialCategory} onChange={(e) => setMaterialCategory(e.target.value)}/>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={addCategoryHandle}
                      data-bs-dismiss="modal"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <table>
          <tr className="tableHead">
            <th>Category Name</th>
            <th>Active Date </th>
            <th>Material</th>
          </tr>

          {categories.length &&
            categories.map((item) => {
              if(item.isArchive === 0){
              return (
                <tr>
                  <td>{item.materialCategory}</td>
                  <td>{item.categoryDate}</td>
                  <td>
                    <span className="t1">
                      <span onClick={() => navigate(`/UpdateCategory/${item.id}`)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-eye-fill"
                        viewBox="0 0 16 16"
                        
                      >
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
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
                </tr>
              );
              }
            })}
        </table>
      </div>
    </div>
  );
}
