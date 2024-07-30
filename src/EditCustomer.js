import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Home.css";

function Edit() {
  const { customerid } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:7775/customer/" + customerid)
  //     .then((response) => setData(response.data))
  //     .catch((err) => console.log(err));
  // }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:7775/customer", data).then((res) => {
      alert("customer Updated Successfully");
      navigate("/viewCustomer");
    });
  };

  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div id="update" className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <h2 empid="align">Update  Customer's  Data</h2>
            <div>
              <lable htmlFor="customerid" role="id">Customer ID :</lable>
              <input
                type="number"
                disabled
                name="customerid"
                className="form-control"
                value={data.customerid}
                onChange={(e) => setData({ ...data, customerid: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="customername" role="name">Customer Name :</lable>
              <input
                type="text"
                name="customername"
                className="form-control"
                value={data.customername}
                onChange={(e) => setData({ ...data, customername: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="customerage" role="age">Customer Age : </lable>
              <input
                type="text"
                name="customerage"
                className="form-control"
                value={data.customerage}
                onChange={(e) => setData({ ...data, customerage: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="customeraddress" role="address">Customer Address :</lable>
              <input
                type="text"
                name="customeraddress"
                className="form-control"
                value={data.customeraddress}
                onChange={(e) => setData({ ...data, customeraddress: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="customergender" role="gender">Customer Gender :</lable>
              <input
                type="text"
                name="customergender"
                className="form-control"
                value={data.customergender}
                onChange={(e) => setData({ ...data, customergender: e.target.value })}
              />
            </div>

            <br />

            <button id="value" className="btn btn-info " role="update" name="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
