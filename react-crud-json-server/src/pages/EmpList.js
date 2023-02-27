import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const EmpList = () => {
  const [empData, setEmpData] = useState(null); 
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/employee")
      .then((res) => {
        setEmpData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const loadEdit = (id) =>{
    navigate("/employee/edit/"+id);
  }
  const loadDetail = (id) =>{
    navigate("/employee/detail/"+id);
  };
  const removeEmp = (id) =>{
   if(window.confirm("Do you want to delete this employee?")) {
    axios.delete("http://localhost:8000/employee/"+id)
    .then((res) => {

        alert('Remove successfully');
        window.location.reload();
        } )
        .catch((err) => {
            console.log(err);
        });;
    }
   }
  

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee List</h2>
        </div>
        <div className="card-body">
          <Link
            to="/employee/create"
            className="btn btn-success"
            style={{ float: "left" }}
          >
            Add new (+)
          </Link>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empData && empData.map(item =>{
                return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <a className="btn btn-success" onClick={() =>{loadEdit(item.id)}}>Edit</a>
                    <a className="btn btn-danger" onClick={() =>{removeEmp(item.id)}}>Remove</a>
                    <a className="btn btn-primary" onClick={() =>{loadDetail(item.id)}}>Detail</a>
                  </td>
                </tr> );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default EmpList;
