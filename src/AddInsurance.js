import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function AddInsurance() {
  const [inputData, setInputData] = useState({
    insurancenumber: "",
    insurancetakendate: "",
    insurancevaliddate: "",
    insuranceamount: "",
    customervehicleid: "",
    insurancetotal: ""
  });

  const [total, setTotal] = useState(0);
  function calculatetotal() {
    setTotal(inputData.insurancenumber + inputData.insurancetakendate + inputData.insurancevaliddate + inputData.insuranceamount + inputData.customervehicleid);
  }

  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);

    if (result === true) {
      axios
        .post("http://localhost:7775/insurance", inputData)
        .then((res) => {
          alert("Insurance added Successfully");
          naviget("/viewInsurance");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter the Valid Inputs!!!");
    }
  };

  const validateValues = (inputData) => {
    if (inputData.insurancenumber.length === 0) {
      alert("Please enter Insurance Number !!! ");
      return false;
    }
    else if (inputData.insurancetakendate.length === 0) {
      alert("Please enter Insurance Taken Date !!! ");
      return false;
    } else if (inputData.insurancevaliddate.length === 0) {
      alert("Please enter Insurance Valid Date !!!");
      return false;
    } else if (inputData.insuranceamount.length === 0) {
      alert("Please enter Insurance Amount !!!");
      return false;
    } else if (inputData.customervehicleid.length === 0) {
      alert("Please Enter the Customer Vehicle Id !!!");
      return false;
    }
    else if (inputData.insurancetotal.length === 0) {
      alert("Please Enter the insurance total !!!");
      return false;
    }
    else {
      return true;
    }
  };

  return (
    <div
      id="add2"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <h2 id="align" data-testid="heading">Add Insurance's Data</h2>
          <div>
            <lable htmlFor="insurancenumber" role="num">Insurance Number :</lable>
            <input
              type="number"
              role="insnum"
              name="insurancenumber"
              className="form-control"
              placeholder="Enter insurance number"
              onChange={(e) =>
                setInputData({ ...inputData, insurancenumber: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="insurancetakendate" role="tdate">Insurance Taken Date :</lable>
            <input
              type="insurancetakendate"
              role="instdate"
              name="insurancetakendate"
              className="form-control"
              placeholder="Enter insurance taken date"
              onChange={(e) =>
                setInputData({ ...inputData, insurancetakendate: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="insurancevaliddate" role="vdate">Insurance Valid Date :</lable>
            <input
              type="number"
              role="insvdate"
              name="insurancevaliddate"
              className="form-control"
              placeholder="Enter insurancevaliddate"
              onChange={(e) =>
                setInputData({ ...inputData, insurancevaliddate: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="insuranceamount" role="amount">Insurance Amount :</lable>
            <input
              type="number"
              role="insamount"
              name="insuranceamount"
              className="form-control"
              placeholder="Enter insurance amount"
              onChange={(e) =>
                setInputData({ ...inputData, insuranceamount: e.target.value })
              }
            />
          </div>


          <div>
            <lable htmlFor="customervehicleid" role="vid">Customer Vehicle Id :</lable>
            <input
              type="number"
              role="cusvid"
              name="customervehicleid"
              className="form-control"
              placeholder="Enter customer vehicle id"
              onChange={(e) =>
                setInputData({ ...inputData, customervehicleid: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="insurancetotal" role="total">Insurance Total  :</lable>
            <input
              type="number"
              role="instotal"
              name="insurancetotal"
              className="form-control"
              value={parseInt(inputData.insurancenumber) + parseInt(inputData.insurancetakendate) + parseInt(inputData.insurancevaliddate) + parseInt(inputData.insuranceamount) + parseInt(inputData.customervehicleid)}
              placeholder="Enter insurance total"
              onBlur={(e) =>
                setInputData({ ...inputData, insurancetotal: e.target.value })
              }
            />
          </div>
          <br />


          <button id="value" className="btn btn-info " name = "submit" role="submit">Submit</button>
        </form>


      </div>
    </div>
  );
}

export default AddInsurance;
