import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { addCategory } from "../Reducers/CategorySlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { archiveCategory } from "../Reducers/CategorySlice";
import { updateCategories } from '../Reducers/CategorySlice'
import moment from "moment/moment";
import Swal from "sweetalert2";

export default function CategoryList() {
  const [materialCategory, setMaterialCategory] = useState("");
  const [categoryDate, setCategoryDate] = useState("");
  const [currCategory, setCurrCategory] = useState("");
  const [search, setSearch] = useState("");
  const [updateId, setupdateId] = useState("");
  const [modalIsOpen, setIsOpen] = useState("");
  const {categories} = useSelector((state) => state.categories);
  const dispatch = useDispatch();


  useEffect(() => {
    addCategory();
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  const addCategoryHandle = (e) => {
    e.preventDefault();
    let obj = {
      materialCategory: materialCategory,
      categoryDate:moment().format('DD/MM/YYYY'),
      isArchive:0,
    };

    dispatch(addCategory(obj));
    setMaterialCategory("");
    setCategoryDate("");
    Swal.fire({
      icon: "success",
      title: "Category Added",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const updateArchive = (ids) => {
    let obj = {
      isArchive:1,
      id:ids,

    };
    dispatch(archiveCategory(obj));
    Swal.fire({
      icon: "success",
      title: "Category Archived",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  const setCurrCategoriesData = (ids) => {
    let categoryID =
      categories &&
      categories.find((item) => {
        return item.id === ids;
      });
    setCurrCategory(categoryID.materialCategory);
  };

  useEffect(() => {
    if (updateId) setCurrCategoriesData(updateId);
  }, [updateId]);

  const handleUpdateCategory = () => {
    setIsOpen(false);
    let obj = {
      materialCategory: currCategory,
      id: updateId,
      categoryDate: moment().format("DD/MM/YYYY"),
      isArchive: 0,
    };
    dispatch(updateCategories(obj));
    Swal.fire({
      icon: "success",
      title: "Category Updated",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div>
      <NavBar />
      <nav className="navbar bg-body-tertiary">
      <div className="container-fluid row">
          <span className="col-4">
            <h4 style={{ color: "red" }}>ADD CATEGORIES</h4>
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
              type="button"
              class="btn btn-danger col-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add materialCategory +
            </button>
            <button
              className="btn btn-primary mx-3 col-3"
              type="button"
              // onClick={() => Navigate("/AddOrganisation")}
            >
              Upload
            </button>
            <button
              className="btn btn-info col-3"
              type="button"
              // onClick={() => Navigate("/AddOrganisation")}
            >
              Sample SVG
            </button>
          </div>
          </div>
      </nav>

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
                    <h1 class="modal-title fs-5" id="exampleModalLabel" style={{color:'#fc7e17'}}>
                      ADD MATERIAL CATEGORY
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body" style={{width:'100%'}}>
                    <input type="text" value={materialCategory} onChange={(e) => setMaterialCategory(e.target.value)}/>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                      >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-success"
                      onClick={addCategoryHandle}
                      data-bs-dismiss="modal"
                      >
                      Add
                    </button> 
                  </div>
                </div>
              </div>
        </div>
      
      <div>
        <table>
          <tr className="tableHead">
            <th>Category Name</th>
            <th>Active Date </th>
            <th>Material</th>
          </tr>

          {categories &&
            categories.filter((item) => {
              return search.toLowerCase() === '' ? item : item.materialCategory.toLowerCase().includes(search);
            })
            .map ((item) => {
              if(item.isArchive === 0){
              return (
                <tr>
                  <td>{item.materialCategory}</td>
                  <td>{item.categoryDate}</td>
                  <td>
                  <span className="t1">
                          <span
                            onClick={() => {
                              setupdateId(item.id);
                              setIsOpen(true);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-pencil-square"
                              viewBox="0 0 16 16"
                              aria-label="Close"
                              data-bs-toggle="modal"
                             data-bs-target="#exampleModalUpdate"
                             
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
                  </td>
                </tr>
              );
              }
            })}
        </table>
      </div>
      <div
              class="modal fade"
              id="exampleModalUpdate"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel" style={{color:'#fc7e17'}}>
                      UPDATE MATERIAL CATEGORY
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body" style={{width:'100%'}}>
                    <input type="text" value={currCategory} onChange={(e) => setCurrCategory(e.target.value)}/>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                      >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-success"
                      onClick={handleUpdateCategory}
                      data-bs-dismiss="modal"
                      >
                      Update
                    </button> 
                  </div>
                </div>
              </div>
        </div>
    </div>
  );
}
