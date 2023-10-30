import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTrader } from "../Reducers/TraderSlice";
import moment from "moment/moment";
import MultiSelect from "multiselect-react-dropdown";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Swal from "sweetalert2";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

export default function AddTrader() {
  const { categories } = useSelector((state) => state.categories);
  const navigate = useNavigate();
  const [traderName, setTraderName] = useState("");
  const [traderEmail, setTraderEmail] = useState("");
  const [traderPassword, setTraderPassword] = useState("");
  const [traderCategory, setTraderCategory] = useState([]);
  const [traderDate, setTraderDate] = useState("");
  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState("password");
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
    dispatch(addTrader(obj));
    setTraderName("");
    setTraderEmail("");
    setTraderPassword("");
    setTraderCategory("");
    setTraderDate("");
    navigate("/MyTraders");
    Swal.fire({
      icon: "success",
      title: "Trader Added",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const onSelect = (traderCategory, selectedItem) => {
    console.log("selectedItem", selectedItem);
    setTraderCategory((prev) => [...prev, selectedItem.materialCategory]);
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container-custom">
        <h1 style={{ color: "#fc7e17", textAlign: "center" }}>ADD TRADERS</h1>
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
            <div className="passwrap">
            <input
              type={type}
              class="form-control"
              id="inputPassword4"
              value={traderPassword}
              onChange={(e) => setTraderPassword(e.target.value)}
            />
            <span onClick={handleToggle}>
                <Icon icon={icon}></Icon>
              </span>
            </div>
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
              class="btn btn-success"
              onClick={addTraderHandle}
              style={{ width: "100%" }}
            >
              Add Trader
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
