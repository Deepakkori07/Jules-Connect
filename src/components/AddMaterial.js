import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { add } from "../Reducers/OrganisationSlice";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  useEffect(() => {
    add();
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
    };
    console.log(obj);

    dispatch(add(obj));
    setmaterialName("");
    setShotCode("");
    setmaterialCategory("");
    setmaterialCurrency("");
    setmaterialUnit("");
    setmaterialIncoTeam("");
    setmaterialLocation("");
    setmaterialBasicName("");
    setmaterialNotes("");
  };
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <label htmlFor="materialName">Material Name</label>
          <input
            type="text"
            value={materialName}
            onChange={(e) => setmaterialName(e.target.value)}
          />
          <label htmlFor="Shot Code">Shot Code</label>
          <input
            type="text"
            value={materialShotCode}
            onChange={(e) => setShotCode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="materialCategory">Category Name</label>
          <input
            type="text"
            value={materialCategory}
            onChange={(e) => setmaterialCategory(e.target.value)}
          />
          <span>
            <label htmlFor="Currency">Currency</label>
            <select name="Currency"
            value={materialCurrency}
            onChange={(e) => setmaterialCurrency(e.target.value)}>
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
            </select>
          </span>
          <span>
            <label htmlFor="Unit">Unit</label>
            <select name="Unit"
            value={materialUnit}
            onChange={(e) => setmaterialUnit(e.target.value)}>
              <option value="mt">mt</option>
              <option value="kg">kg</option>
              <option value="pounds">pounds</option>
              <option value="tons">tons</option>
            </select>
          </span>
          <span>
            <label htmlFor="Inco term">Inco term</label>
            <select name="Inco term"
            value={materialIncoTeam}
            onChange={(e) => setmaterialIncoTeam(e.target.value)}>
              <option value="EXW">EXW</option>
              <option value="FCA">FCA</option>
              <option value="CPT">CPT</option>
              <option value="CIP">CIP</option>
              <option value="DAT">DAT</option>
              <option value="DAP">DAP</option>
              <option value="DDP">DDP</option>
            </select>
          </span>
        </div>
        <div>
        <label htmlFor="Location">Location</label>
            <select name="Location"
            value={materialLocation}
            onChange={(e) => setmaterialLocation(e.target.value)}>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Japan">Japan</option>
              <option value="Dubai">Dubai</option>
            </select>
            <label htmlFor="Basis Name">Basis Name</label>
            <input type="text" value={materialBasicName} onChange={(e) => setmaterialBasicName(e.target.value)}/>
        </div>
        <div>
            <input type="textfield" placeholder="Notes/TradesBrief"/>
        </div>
        <button className="btn btn-danger" onClick={addMaterialHandle}>Add Material</button>
      </div>
    </div>
  );
}