import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTrader } from "../Reducers/TraderSlice";
import MultiSelect from "multiselect-react-dropdown";
import Swal from "sweetalert2";

export default function UpdateTrader() {
  const { traders } = useSelector((state) => state.traders);
  const { categories } = useSelector((state) => state.categories);
  console.log("categories",categories);
  const { id } = useParams();
  const [currTraderName, setCurrTraderName] = useState("");
  const [currTraderEmail, setCurrTraderEmail] = useState("");
  const [currTraderPassword, setCurrTraderPassword] = useState("");
  const [currTraderCategory, setCurrTraderCategory] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setCurrTraderData = (ids) => {
    let traderID = traders.find((item) => {
      return item.id === ids;
    });
    setCurrTraderName(traderID.traderName);
    setCurrTraderEmail(traderID.traderEmail);
    setCurrTraderPassword(traderID.traderPassword);
    // setCurrTraderCategory
    setCurrTraderCategory( traderID.traderCategory.map((item)=>{
        return {materialCategory:item}
    }))
    // setCurrTraderCategory(traderID.traderCategory);
  };

  useEffect(() => {
    setCurrTraderData(id);
  }, [id]);

  const updateTraderData = () => {
    let obj = {
      traderName: currTraderName,
      traderEmail: currTraderEmail,
      traderPassword: currTraderPassword,
      tradercategory: currTraderCategory,
      isArchive:0,
      id,
    };
    dispatch(updateTrader(obj));
    navigate("/MyTraders");
    Swal.fire({
      icon: "success",
      title: "Trader updated",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  const onSelect = (tradercategory, selectedItem) => {
    console.log("selectedItem", selectedItem);
    setCurrTraderCategory((prev) => [...prev, selectedItem.tradercategory]);
  };
  return (
    <div>
      <NavBar />
      <form key={id}>
        <div className="container-custom">
          <h1 style={{ color: "#fc7e17", textAlign: "center" }}>
            UPDATE TRADERS
          </h1>
          <hr></hr>

          <form class="row g-3">
            <div class="col-6">
              <label for="inputAddress" class="form-label">
                Trader Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                value={currTraderName}
                onChange={(e) => setCurrTraderName(e.target.value)}
              />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Trader Email
              </label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                value={currTraderEmail}
                onChange={(e) => setCurrTraderEmail(e.target.value)}
              />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                value={currTraderPassword}
                onChange={(e) => setCurrTraderPassword(e.target.value)}
              />
            </div>
            <div class="col-md-6">
              <label htmlFor="AssignCategory">Assign Category</label>
              <MultiSelect
                options={categories}
                displayValue="materialCategory"
                onSelect={(a, b) => onSelect(a, b)}
                selectedValues={currTraderCategory}
              />
            </div>

            <div class="col-12">
              <button
                type="submit"
                class="btn btn-success"
                onClick={updateTraderData}
                style={{ width: "100%" }}
              >
                Add Trader
              </button>
            </div>
          </form>
        </div>
      </form>
    </div>
  );
}
