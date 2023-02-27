import React, { useState, useEffect } from "react";
import { Navigate, Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EmpEdit = () => {
  const [empData, setEmpData] = useState(null);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(true);
  const [validation, setValidation] = useState("");
  const navigate = useNavigate();
  const {empId} = useParams();

 useEffect(() => {
    axios
      .get("http://localhost:8000/employee/"+empId)
      .then((res) => {
        //console.log(res);
        setId(res.data.id);
        setEmail(res.data.email);
        setName(res.data.name);
        setPhone(res.data.phone);
        setStatus(res.data.status);

      })
      .catch((err) => {
        console.log(err);
      }); ;
 }, []);



  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/employee/"+empId, { name, email, phone, status })
      .then((res) => {
        alert("Save successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2> Create Employee</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disable"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        value={name}
                        className="form-control"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={email}
                        className="form-control"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        onMouseDown={(e) => setValidation(true)}
                      />
                      {email.length === 0 && validation && (
                        <span className="text-danger">กรุณากรอก email</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        value={phone}
                        className="form-control"
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="checkbox"
                        value={status}
                        className="form-check-input"
                      />
                      <label className="form-check-label">is active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        {" "}
                        Save
                      </button>{" "}
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpEdit;


