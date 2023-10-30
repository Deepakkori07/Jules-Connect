import React from 'react'
import NavBar from './NavBar'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { unarchiveCurrency } from '../Reducers/CurrencySlice'
import Swal from 'sweetalert2'

export default function ArchivedCurrency() {
    const {currency} = useSelector((state) => state.currency)
    const dispatch = useDispatch();

    const unArchive = (ids) => {
        let obj ={
            isArchive: 1,
            id:ids,
        };
        dispatch(unarchiveCurrency(obj));
        Swal.fire({
          icon: "success",
          title: "Currency UnArchived",
          showConfirmButton: false,
          timer: 2000,
        });
    }
  return (
    <div>
        <NavBar/>
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span>
            <h4 style={{ color: "red" }}>Archived Currency</h4>
          </span>
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
              if(item.isArchive === 1){
              return (
                <tr>
                  <td>{item.curr}</td>
                  <td>{item.currencyDate}</td>
                  <td>
                    <span className="t1">
                        <span onClick={ () => unArchive(item.id)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="blue"
                            class="bi bi-box-arrow-up"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
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
  )
}
