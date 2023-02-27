import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EmpDetail = () => {
  const [empData, setEmpData] = useState(null);
  const { empId } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/employee/" + empId)
      .then((res) => {
        setEmpData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    
    <div className="container">
      <div className="card" style={{ float: "center" }}>
        <div className="card-title">
          <h2> Employee Create </h2>
          
        </div>
        <div className="card-body">
          {empData && (
            <div>
              <h2>
                {" "}
                The Employee name is : <b> {empData.name} </b> {empData.id}{" "}
              </h2>
              <h2> Contact Details </h2>
              <h5> Email is : {empData.email} </h5>
              <h5> Phone is : {empData.phone} </h5>

              <Link className="btn btn-danger" to="/">
                {" "}
                Back to Listing{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default EmpDetail;
