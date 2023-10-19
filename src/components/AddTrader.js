import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTrader } from "../Reducers/TraderSlice";
import moment from "moment/moment";
import MultiSelect from "multiselect-react-dropdown";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function AddTrader() {
  const { categories } = useSelector((state) => state.categories);
  console.log(categories);
  const navigate = useNavigate();
  const [traderName, setTraderName] = useState("");
  const [traderEmail, setTraderEmail] = useState("");
  const [traderPassword, setTraderPassword] = useState("");
  const [traderCategory, setTraderCategory] = useState([]);
  const [traderDate, setTraderDate] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    addTrader();
  }, []);

  const addTraderHandle = (e) => {
    e.preventDefault();
    let obj = {
      traderName: traderName,
      traderEmail: traderEmail,
      traderPassword: traderPassword,
      traderCategory: traderCategory,
      isArchive: 0,
      traderDate: moment().format("DD/MM/YYYY"),
    };
    console.log("obj", obj);
    dispatch(addTrader(obj));
    setTraderName("");
    setTraderEmail("");
    setTraderPassword("");
    setTraderCategory("");
    setTraderDate("");
    navigate("/MyTraders");
  };

  const onSelect = (traderCategory, selectedItem) => {
    console.log("selectedItem", selectedItem);
    setTraderCategory((prev) => [...prev, selectedItem.materialCategory]);
  };

  return (
    <div>
      <NavBar />
      <div className="container-custom">

      <form class="row g-3">
        <div class="col-6">
          <label for="inputAddress" class="form-label">
            Trader Name
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            value={traderName}
            onChange={(e) => setTraderName(e.target.value)}
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
            value={traderEmail}
            onChange={(e) => setTraderEmail(e.target.value)}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-md-6">
          <label htmlFor="AssignCategory">Assign Category</label>
          <MultiSelect
            options={categories}
            displayValue="materialCategory"
            onSelect={(a, b) => onSelect(a, b)}
          />
        </div>

        <div class="col-12">
          <button
            type="submit"
            class="btn btn-primary"
            onClick={addTraderHandle}
          >
            Add Trader
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}
