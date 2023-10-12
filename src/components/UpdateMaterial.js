import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams,useNavigate } from "react-router-dom";
import { updateMaterial } from "../Reducers/MaterialSlice";
import { useDispatch } from "react-redux";
import moment from "moment/moment";


export default function UpdateMaterial() {
  const { materials } = useSelector((state) => state.materials);
  const { id } = useParams();
  const [currMaterialName, setCurrMaterialName] = useState("");
  const [currMaterialShotCode, setCurrShotCode] = useState("");
  const [currMaterialCategory, setCurrMaterialCategory] = useState("");
  const [currMaterialCurrency, setCurrMaterialCurrency] = useState("");
  const [currMaterialUnit, setCurrMaterialUnit] = useState("");
  const [currMaterialIncoTeam, setCurrMaterialIncoTeam] = useState("");
  const [currMaterialLocation, setCurrMaterialLocation] = useState("");
  const [currMaterialBasicName, setCurrMaterialBasicName] = useState("");
  const [currMaterialNotes, setCurrMaterialNotes] = useState("");
  const [currDate, setCurrDate] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setCurrMaterialData = (ids) => {
    let materialId = materials.find((item) => {
      return item.id === ids;
    });
    setCurrMaterialName(materialId.materialName);
    setCurrShotCode(materialId.materialShotCode);
    setCurrMaterialCategory(materialId.materialCategory);
    setCurrMaterialCurrency(materialId.materialCurrency);
    setCurrMaterialUnit(materialId.materialUnit);
    setCurrMaterialIncoTeam(materialId.materialIncoTeam);
    setCurrMaterialLocation(materialId.materialLocation);
    setCurrMaterialBasicName(materialId.materialBasicName);
    setCurrMaterialNotes(materialId.materialNotes);
    setCurrDate(materialId.materialDate);
  };

  // console.log("hiiii");
  // console.log(materials);

  useEffect(() => {
      console.log("hiiii");

    console.log("organisation==",id);

    setCurrMaterialData(id);
  }, [id]);
  // console.log("curr data");

  const updateMaterialData = () => {
    let obj = {
      materialName: currMaterialName,
      materialShotCode: currMaterialShotCode,
      materialCategory: currMaterialCategory,
      materialCurrency: currMaterialCurrency,
      materialUnit: currMaterialUnit,
      materialIncoTeam: currMaterialIncoTeam,
      materialLocation: currMaterialLocation,
      materialBasicName: currMaterialBasicName,
      materialNotes: currMaterialNotes,
      materialDate:moment().format('DD/MM/YYYY'),
      id,
      
    };
    
    dispatch(updateMaterial(obj));
    navigate("/ViewMaterial");
  };

  return (
    <div>
      <NavBar />
      <form key={id}>
        <div>
          <label htmlFor="materialName">Material Name</label><br></br>
          <input
            type="text"
            value={currMaterialName}
            onChange={(e) => setCurrMaterialName(e.target.value)}
          />
          <label htmlFor="Shot Code">Shot Code</label><br></br>
          <input
            type="text"
            value={currMaterialNotes}
            onChange={(e) => setCurrShotCode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="materialCategory">Category Name</label>
          <input
            type="text"
            value={currMaterialCategory}
            onChange={(e) => setCurrMaterialCategory(e.target.value)}
          />
          <span>
            <label htmlFor="Currency">Currency</label>
            <select
              name="Currency"
              value={currMaterialCurrency}
              onChange={(e) => setCurrMaterialCurrency(e.target.value)}
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
            </select>
          </span>
          <span>
            <label htmlFor="Unit">Unit</label>
            <select
              name="Unit"
              value={currMaterialUnit}
              onChange={(e) => setCurrMaterialUnit(e.target.value)}
            >
              <option value="mt">mt</option>
              <option value="kg">kg</option>
              <option value="pounds">pounds</option>
              <option value="tons">tons</option>
            </select>
          </span>
          <span>
            <label htmlFor="Inco term">Inco term</label>
            <select
              name="Inco term"
              value={currMaterialIncoTeam}
              onChange={(e) => setCurrMaterialIncoTeam(e.target.value)}
            >
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
          <select
            name="Location"
            value={currMaterialLocation}
            onChange={(e) => setCurrMaterialLocation(e.target.value)}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Japan">Japan</option>
            <option value="Dubai">Dubai</option>
          </select>
          <label htmlFor="Basis Name">Basis Name</label>
          <input
            type="text"
            value={currMaterialBasicName}
            onChange={(e) => setCurrMaterialBasicName(e.target.value)}
          />
        </div>
        <div>
          <input type="textfield" placeholder="Notes/TradesBrief" />
        </div>
        <button className="btn btn-danger" onClick={updateMaterialData}>
          Update Material
        </button>
      </form>
    </div>
  );
}
