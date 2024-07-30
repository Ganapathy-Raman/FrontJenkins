import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./App2.css";
import "./Login.css";
import Header from "./Header";

function ViewInsurance() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:7775/insurance/all")
  //     .then((response) => {
  //       setColumns(Object.keys(response.data[0]));
  //       setRecords(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // let handleSubmit = (insuranceid) => {
  //   const conf = window.confirm("Do you want to delete");
  //   if (conf) {
  //     axios
  //       .delete("http://localhost:7775/insurance/" + insuranceid)
  //       .then((res) => {
  //         alert("Insurance record has been deleted");
  //         navigate("/viewInsurance");
  //         window.location.reload();
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  return (
    <>
      <div>
        <Header />
      </div>
      <div id="body">
        <div className="container ">
          <h1 id="app2" role="heading" className="text-center text-info " >
            Online Vehicle Insurance System
          </h1>

          <div className="text-end">
            
              <Link to="/addinsurance" className="btn btn-warning">
                Add Insurance +
              </Link>
            
          </div>
          <br />
          <table className="table table-bordered  table-info table-hover table-striped w-100 border bg-white shadow px-5 pb-5 rounded ">
            <thead class="table-dark">
              <tr>
                {columns.map((c, i) => (
                  <th key={i}>{c}</th>
                ))}
                <th role="action">Action</th>
              </tr>
            </thead>

            <tbody>
              {records.map((d, i) => (
                <tr key={i}>
                  <td>{d.insuranceid}</td>
                  <td>{d.insurancenumber}</td>
                  <td>{d.insurancetakendate}</td>
                  <td>{d.insurancevaliddate}</td>
                  <td>{d.insuranceamount}</td>
                  <td>{d.customervehicleid}</td>
                  <td>{d.insurancetotal}</td>


                  <td>
                    
                      <Link
                        to={`/updateInsurance/${d.insuranceid}`}
                        className="btn btn-sm btn-primary "
                      >
                        Update
                      </Link>
                    
                    <button 
                      onClick={(e) => handleSubmit(d.insuranceid)}
                      className="btn btn-sm ms-1 btn-info" name="delete"
                      
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ViewInsurance;
