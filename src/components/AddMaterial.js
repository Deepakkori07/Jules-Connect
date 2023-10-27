import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { addMaterial } from "../Reducers/MaterialSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

export default function AddMaterial() {
  const [materialName, setmaterialName] = useState("");
  const [materialShotCode, setShotCode] = useState("");
  const [materialCategory, setmaterialCategory] = useState("");
  const [materialCurrency, setmaterialCurrency] = useState("");
  const [materialUnit, setmaterialUnit] = useState("");
  const [materialIncoTeam, setmaterialIncoTeam] = useState("");
  const [materialLocation, setmaterialLocation] = useState("");
  const [materialBasicName, setmaterialBasicName] = useState("");
  const [materialNotes, setmaterialNotes] = useState("");
  const [materialDate, setMaterialDate] = useState("");
  const { categories } = useSelector((state) => state.categories);
  const { units } = useSelector((state) => state.units);
  const { currency } = useSelector((state) => state.currency);
  const { incoTerm } = useSelector((state) => state.incoTerm);
  const { location } = useSelector((state) => state.location);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    addMaterial();
  }, []);

  const addMaterialHandle = (e) => {
    e.preventDefault();
    let obj = {
      materialName: materialName,
      materialShotCode: materialShotCode,
      materialCategory: materialCategory,
      materialCurrency: materialCurrency,
      materialIncoTeam: materialIncoTeam,
      materialUnit: materialUnit,
      materialLocation: materialLocation,
      materialBasicName: materialBasicName,
      materialNotes: materialNotes,
      materialDate: moment().format("DD/MM/YYYY"),
      isArchive: 0,
    };
    console.log(obj);

    dispatch(addMaterial(obj));
    setmaterialName("");
    setShotCode("");
    setmaterialCategory("");
    setmaterialCurrency("");
    setmaterialUnit("");
    setmaterialIncoTeam("");
    setmaterialLocation("");
    setmaterialBasicName("");
    setmaterialNotes("");
    setMaterialDate("");
    navigate("/ViewMaterial");
  };
  return (
    <div>
      <NavBar />
      
      <div className="addMaterial">
        <h1 style={{ color: "#fc7e17", textAlign: "center" }}>ADD MATERIAL</h1>
        <hr></hr>
        <form className="row g-3">
          <div class="col-6">
            <label for="exampleInputEmail1" class="form-label">
              Material Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={materialName}
            onChange={(e) => setmaterialName(e.target.value)}
            />
          </div>
          <div class="col-6">
            <label for="exampleInputPassword1" class="form-label">
              Shot Code
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={materialShotCode}
            onChange={(e) => setShotCode(e.target.value)}
            />
          </div>
          <div class="col-6">
            <label for="exampleInputPassword1" class="form-label">
              Category
            </label>
            <select class="form-select" aria-label="Default select example" value={materialCategory}
            onChange={(e) => setmaterialCategory(e.target.value)}>
            {categories.map((item) => {
                  return (
                    <option key={item.materialCategory} value={item.materialCategory}>
                      {item.materialCategory}
                    </option>
                  );
                })}
            </select>
          </div>
          <div class="col-6 ">
            <div className="row">
            <div className="col-4">
              <label for="exampleInputPassword1" class="form-label">
                Currency
              </label>
              <select class="form-select" aria-label="Default select example" value={materialCurrency}
            onChange={(e) => setmaterialCurrency(e.target.value)}>
                {currency.map((item) => {
                  return (
                    <option key={item.curr} value={item.curr}>
                      {item.curr}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-4">
              <label for="exampleInputPassword1" class="form-label">
                Unit
              </label>
              <select class="form-select" aria-label="Default select example" value={materialUnit}
            onChange={(e) => setmaterialUnit(e.target.value)}>
              {units.map((item) => {
                  return (
                    <option key={item.unit} value={item.unit}>
                      {item.unit}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-4">
              <label for="exampleInputPassword1" class="form-label">
                Inco Term
              </label>
              <select class="form-select" aria-label="Default select example" value={materialIncoTeam}
            onChange={(e) => setmaterialIncoTeam(e.target.value)}>
              {incoTerm.map((item) => {
                  return (
                    <option key={item.incoT} value={item.incoT}>
                      {item.incoT}
                    </option>
                  );
                })}
              </select>
            </div>
            </div>
          </div>
          <div class="col-6">
            <label for="exampleInputPassword1" class="form-label">
              Location
            </label>
            <select class="form-select" aria-label="Default select example" value={materialLocation}
            onChange={(e) => setmaterialLocation(e.target.value)}>
            {location.map((item) => {
                  return (
                    <option key={item.loc} value={item.loc}>
                      {item.loc}
                    </option>
                  );
                })}
            </select>
          </div>
          <div class="col-6">
            <label for="exampleInputPassword1" class="form-label" >
              Basis Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={materialBasicName}
            onChange={(e) => setmaterialBasicName(e.target.value)}
            />
          </div>
          <div class="col-12">
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="notes/brief"
              value={materialNotes}
            onChange={(e) => setmaterialNotes(e.target.value)}
            />
          </div>

          <button type="submit" class="btn btn-success" onClick={addMaterialHandle}>
            Add Material+
          </button>
        </form>
      </div>
    </div>
  );
}
