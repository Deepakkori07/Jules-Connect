import React, { useState,useEffect } from "react";
import NavBar from "./NavBar";
import { addCurrency } from "../Reducers/CurrencySlice";
import { updateCurrency } from "../Reducers/CurrencySlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import moment from "moment";
import { archiveCurrency } from "../Reducers/CurrencySlice";
import Modal from "react-modal";


export default function Currency() {
  const { currency } = useSelector((state) => state.currency);
  const [curr, setCurrency] = useState("");
  const [currentCurrency, setCurrentCurrency] = useState("");
  const [updateId, setUpdateId] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currencyDate, setCurrencyDate] = useState("");
  const dispatch = useDispatch();

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function closeModal() {
    setIsOpen(false);
  }

  const handleCurrency = (e) => {
    e.preventDefault();
    let obj = {
      curr: curr,
      currencyDate: moment().format("DD/MM/YYYY"),
      isArchive: 0,
    };
    dispatch(addCurrency(obj));
    setCurrency("");
    setCurrencyDate("");
  };

  const updateArchive = (ids) => {
    let obj = {
      isArchive: 1,
      id: ids,
    };
    dispatch(archiveCurrency(obj));
  };

  const setCurrData = (ids) => {
    let currID =
      currency &&
      currency.find((item) => {
        return item.id===ids
      });
    setCurrentCurrency(currID.unit);
  };

  useEffect(() => {
    if(updateId)
    setCurrData(updateId);
  }, [updateId]);

  const updateCurr = () => {
    let obj = {
      curr: currentCurrency,
      id:updateId,
      currencyDate: moment().format("DD/MM/YYYY"),
      isArchive: 0,
    };
    console.log(obj);
    dispatch(updateCurrency(obj));
  };
  return (
    <div>
      <NavBar />
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span>
            <h4 style={{ color: "red" }}>All Currency</h4>
          </span>
          <div>
            <span className="t1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>

              <span>
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add Currency +
                </button>
              </span>
            </span>
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
                      Add Currency
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <input
                      type="text"
                      value={curr}
                      onChange={(e) => setCurrency(e.target.value)}
                    />
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
                      onClick={handleCurrency}
                      data-bs-dismiss="modal"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>

              <Modal isOpen={modalIsOpen}  style={customStyles}>
                <div>Update Unit</div>
                <form>
                  <input
                    type="text"
                    value={currentCurrency}
                    onChange={(e) => setCurrentCurrency(e.target.value)}
                  />
                </form>
                <button onClick={closeModal}>close</button>
                <button onClick={updateCurr}>Update</button>
              </Modal>

            </div>
          </div>
        </div>
      </nav>
      <div>
        <table>
          <tr className="tableHead">
            <th>Currency Name</th>
            <th>Created Date </th>
            <th></th>
          </tr>

          {currency &&
            currency.map((item) => {
              if (item.isArchive === 0) {
                return (
                  <tr>
                    <td>{item.curr}</td>
                    <td>{item.currencyDate}</td>
                    <td>
                      <span className="t1">
                        <span
                        onClick={() => {
                          setUpdateId(item.id);
                          setIsOpen(true);
                         }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                            aria-label="Close"
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
