import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">Materialy</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Traders
                  <ul className="dropdown-menu">
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => navigate("/MyTraders")}
                      >
                        My Traders
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => navigate("/AddTrader")}
                      >
                        Add Traders
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        //onClick={() => navigate("/AddTrader")}
                      >
                        Archive
                      </span>
                    </li>
                  </ul>
                </span>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Materials
                  <ul className="dropdown-menu">
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => navigate("/CategoryList")}
                      >
                        My Categories
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => navigate("/AllOrganisation")}
                      >
                        Archived Catergories
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => navigate("/ViewMaterial")}
                      >
                        My Material
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => navigate("/AllOrganisation")}
                      >
                        Archived Material
                      </span>
                    </li>
                  </ul>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={() => navigate("/Payment")}>
                  Payments
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={() => navigate("/Traders")}>
                  Data
                </span>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Master Module
                  <ul className="dropdown-menu">
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => navigate("/Unit")}
                      >
                        Unit
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => navigate("/ArchivedUnit")}
                      >
                        Archived Unit
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => navigate("/AllOrganisation")}
                      >
                        Currency
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => navigate("/AllOrganisation")}
                      >
                        Archived Currency
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => navigate("/AllOrganisation")}
                      >
                        Inco term
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => navigate("/AllOrganisation")}
                      >
                        Archived Inco term
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => navigate("/AllOrganisation")}
                      >
                        Location
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => navigate("/ViewMaterial")}
                      >
                        Archived Location
                      </span>
                    </li>
                    
                  </ul>
                </span>
              </li>
            </ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            <span className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Organisation Admin
              </span>
              <ul className="dropdown-menu">
                <li>
                  <span
                    className="dropdown-item"
                    onClick={() => navigate("/SubAdminProfile")}
                  >
                    Admin Profile
                  </span>
                </li>
                <li>
                  <span
                    className="dropdown-item"
                    onClick={() => navigate("/AddSubAdminProfile")}
                  >
                    Add Sub-Admin
                  </span>
                </li>
                <li>
                  <span
                    className="dropdown-item"
                    onClick={() => navigate("/SubscriptionPlan")}
                  >
                    Subscription Plan
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">Sign Out</span>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
