import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams, useNavigate } from "react-router-dom";
import { updateMaterial } from "../Reducers/MaterialSlice";
import { useDispatch } from "react-redux";
import moment from "moment/moment";
import Swal from "sweetalert2";

export default function UpdateMaterial() {
  const { materials } = useSelector((state) => state.materials);
  const { categories } = useSelector((state) => state.categories);
  const { units } = useSelector((state) => state.units);
  const { currency } = useSelector((state) => state.currency);
  const { incoTerm } = useSelector((state) => state.incoTerm);
  const { location } = useSelector((state) => state.location);
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

  useEffect(() => {
    setCurrMaterialData(id);
  }, [id]);
  

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
      materialDate: moment().format("DD/MM/YYYY"),
      isArchive: 0,
      id,
    };

    dispatch(updateMaterial(obj));
    navigate("/ViewMaterial");
    Swal.fire({
      icon: "success",
      title: "Material Updated",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div>
      <NavBar />
      <form key={id}>
        <div className="addMaterial">
          <h1 style={{ color: "#fc7e17", textAlign: "center" }}>
            UPDATE MATERIAL
          </h1>
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
                value={currMaterialName}
                onChange={(e) => setCurrMaterialName(e.target.value)}
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
                value={currMaterialShotCode}
                onChange={(e) => setCurrShotCode(e.target.value)}
              />
            </div>
            <div class="col-6">
              <label for="exampleInputPassword1" class="form-label">
                Category
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={currMaterialCategory}
                onChange={(e) => setCurrMaterialCategory(e.target.value)}
              >
                {categories.map((item) => {
                  return (
                    <option
                      key={item.materialCategory}
                      value={item.materialCategory}
                    >
                      {item.materialCategory}
                    </option>
                  );
                })}
              </select>
            </div>
            <div class="col-6">
              <div className="row">
              <div className="col-4">
                <label for="exampleInputPassword1" class="form-label">
                  Currency
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={currMaterialCurrency}
                  onChange={(e) => setCurrMaterialCurrency(e.target.value)}
                >
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
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={currMaterialUnit}
                  onChange={(e) => setCurrMaterialUnit(e.target.value)}
                >
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
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={currMaterialIncoTeam}
                  onChange={(e) => setCurrMaterialIncoTeam(e.target.value)}
                >
                  {incoTerm.map((item) => {
                    return (
                      <option key={item.incoTerms} value={item.incoTerms}>
                        {item.incoTerms}
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
              <select
                class="form-select"
                aria-label="Default select example"
                value={currMaterialLocation}
                onChange={(e) => setCurrMaterialLocation(e.target.value)}
              >
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
              <label for="exampleInputPassword1" class="form-label">
                Basis Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                value={currMaterialBasicName}
                onChange={(e) => setCurrMaterialBasicName(e.target.value)}
              />
            </div>
            <div class="col-12">
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="notes/brief"
                value={currMaterialNotes}
                onChange={(e) => setCurrMaterialNotes(e.target.value)}
              />
            </div>

            <button
              type="submit"
              class="btn btn-success"
              onClick={updateMaterialData}
            >
              Update Material+
            </button>
          </form>
        </div>
      </form>
    </div>
  );
}
