import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Home.css";

function EditInsurance() {
  const { insuranceid } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:7775/insurance/" + insuranceid)
  //     .then((response) => setData(response.data))
  //     .catch((err) => console.log(err));
  // }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:7775/insurance", data).then((res) => {
      alert("Insurance Updated Successfully");
      navigate("/ViewInsurance");
    });
  };

  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <h2 id="align">Update Insurance's Data</h2>
            <div>
              <lable htmlFor="insuranceid" role="id">Insurance ID :</lable>
              <input
                type="number"
                disabled
                name="insuranceid"
                className="form-control"
                value={data.insuranceid}
                readOnly
              // onChange={(e) => setData({ ...data, payrollid: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="insurancenumber" role="number">Insurance Number :</lable>
              <input
                type="number"
                name="insurancenumber"
                className="form-control"
                value={data.insurancenumber}
                onChange={(e) => setData({ ...data, insurancenumber: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="insurancetakendate" role="date">Insurance Taken Date :</lable>
              <input
                type="number"
                name="insurancetakendate"
                className="form-control"
                value={data.insurancetakendate}
                onChange={(e) => setData({ ...data, insurancetakendate: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="insurancevaliddate" role="vdate">Insurance Valid Date :</lable>
              <input
                type="number"
                name="insurancevaliddate"
                className="form-control"
                value={data.insurancevaliddate}
                onChange={(e) => setData({ ...data, insurancevaliddate: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="insuranceamount" role="amount">Insurance Amount :</lable>
              <input
                type="number"
                name="insuranceamount"
                className="form-control"
                value={data.insuranceamount}
                onChange={(e) => setData({ ...data, insuranceamount: e.target.value })}
              />
            </div>


            <br />

            <div>
              <lable htmlFor="customervehicleid" role="vid">Customer Vehicle Id :</lable>
              <input
                type="number"
                name="customervehicleid"
                className="form-control"
                value={data.customervehicleid}
                onChange={(e) => setData({ ...data, customervehicleid: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="insurancetotal" role="total">Insurance Total :</lable>
              <input
                type="number"
                name="insurancetotal"
                className="form-control"
                value={parseInt(data.insurancenumber) + parseInt(data.insurancetakendate) + parseInt(data.insurancevaliddate) + parseInt(data.insuranceamount) + parseInt(data.customervehicleid)}
                onBlur={(e) => setData({ ...data, insurancetotal: e.target.value })}
              />
            </div>



            <button id="value" className="btn btn-info " role="update" name = "submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditInsurance;
