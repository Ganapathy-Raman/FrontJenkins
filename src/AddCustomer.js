import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";


function Add() {


  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [inputData, setInputData] = useState({
    customerid: "-1",
    customername: "",
    customerage: "",
    customeraddress: "",
    customergender: "",
    insurance: {
      insuranceid: "",
      insurancenumber: "",
      insurancetakendate: "",
      insurancevaliddate: "",
      insuranceamount: "",
      customervehicleid: "",
      insurancetotal: ""
    }
  });

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:7775/insurance/all")
  //     .then((response) => {
  //       setColumns(Object.keys(response.data[0]));
  //       setRecords(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const naviget = useNavigate();


  const handleSelectChange = async (e) => {
    const insuranceId = e.target.value;
    console.log(`Selected insurance ID: ${insuranceId}`);
    try {
      const response = await axios.get("http://localhost:7775/insurance/" + insuranceId);
      console.log('insurance data fetched:', response.data);
      setInputData(prevState => ({
        ...prevState,
        insurance: {
          ...prevState.insurance,
          ...response.data,
          qid: insuranceId
        }
      }));
    } catch (err) {
      console.error("Error fetching insurance data:", err);
    }
  };

  useEffect(() => {
    console.log('Updated inputData:', inputData);
  }, [inputData]);



  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    // setSubmitting(true);

    if (result === true) {
      axios
        .post("http://localhost:7775/customer", inputData)
        .then((res) => {
          alert("customer added Successfully");
          naviget("/viewCustomer");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter the Valid Inputs!!!");
    }
  };

  const validateValues = (inputData) => {
    if (inputData.customername.length === 0) {
      alert("Please enter  customername !!!");
      return false;
    } else if (inputData.customerage.length === 0) {
      alert("Please enter customerage !!!");
      return false;
    } else if (inputData.customeraddress.length === 0) {
      alert("Please enter customeraddress !!!");
      return false;
    } else if (inputData.customergender.length === 0) {
      alert("Please Enter the Valid customergender!!!");
      return false;
    } else {
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
          <h2 id="align" data-testid="heading">Add Customer's Data</h2>

          <div>
            <lable htmlFor="customername" role="name">Customer Name :</lable>
            <input
              type="text"
              role="cusname"
              name="customername"
              className="form-control"
              placeholder="Enter customername"
              onChange={(e) =>
                setInputData({ ...inputData, customername: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="customerage" role="age">Customer Age :</lable>
            <input
              type="text"
              role="cusage"
              name="customerage"
              className="form-control"
              placeholder="Enter customerage"
              onChange={(e) =>
                setInputData({ ...inputData, customerage: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="customeraddress" role="address">Customer Address :</lable>
            <input
              type="text"
              role="cusaddress"
              name="customeraddress"
              className="form-control"
              placeholder="Enter customeraddress"
              onChange={(e) =>
                setInputData({ ...inputData, customeraddress: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="customergender" role="gender">Customer Gender :</lable>
            <input
              type="text"
              role="cusgender"
              name="customergender"
              className="form-control"
              placeholder="Enter customergender"
              onChange={(e) =>
                setInputData({ ...inputData, customergender: e.target.value })
              }
            />
          </div>

          <div>
            <label role="record">Select Insurance Record :</label>
            <select onChange={handleSelectChange} className="form-control" name="insuranceid">
              <option value="" role="fetch">Select a record</option>
              {records.map((record) => (
                <option key={record.insuranceid} value={record.insuranceid}>
                  {record.insuranceid}
                </option>
              ))}
            </select>
          </div>
          <br />

          <button id="value" className="btn btn-info " name="submit" role="submit">Submit</button>
        </form>


      </div>
    </div>

  );

}


export default Add;
