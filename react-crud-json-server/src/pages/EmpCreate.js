import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const EmpCreate = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(true);
  const [validation, setValidation] = useState("");
  const navigate = useNavigate();
  

    const handleSubmit =(e)=>{
        e.preventDefault();
        
        axios.post("http://localhost:8000/employee", {name, email, phone, status}).then()
        .then((res)=>{
            alert("Save Successfully");
            navigate("/");
        })
    }
     return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Create Employee</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disbled"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input value={name} className="form-control"  
                      onChange={e => {
                        setName(e.target.value)
                      }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>email</label>
                      <input value={email} className="form-control"
                      onChange={e => {
                        setEmail(e.target.value)
                      }}
                      onMouseDown={e=>setValidation(true)}
                      />
                      {email.length ===0 && validation && <span className="text-danger"> Please, enter you email</span>}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input value={phone} className="form-control" 
                      onChange={e => {
                        setPhone(e.target.value)
                      }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="checkbox"
                        checked={status}
                        className="form-check-input"
                        onChange={e => {
                        setStatus(e.target.checked)
                      }}
                      />{" "}
                      <label className="form-check-label">Is active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
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

export default EmpCreate;
