import React, { Component } from "react";
import axios from "axios"
import {Redirect} from "react-router-dom"
class ListEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }
  componentDidMount=() =>{
    this.getData();
  }
  getData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/employees`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
      .then(res => {
        if (res.data.data) {
          this.setState({ employees: res.data.data });
        }
      })
      .catch(err => console.log(err));
  };
  render() {
    if (this.props.isAuthenticated === false){
      return <Redirect to="/login" />
    }else{
    return (
      <div>
        <h1>List of Employees</h1>
        {this.state.employees.map((employee,index)=>(
           <div>employee Number : {employee.emp_no} <br />
           Name : {`${employee.first_name} ${employee.last_name}`} <br />
           Birth date : {employee.birth_date} <br />
           Gender : {employee.gender} <br /> <br /> 
           <hr/>
           </div>
        ))}
      </div>
    )};
  }
}

export default ListEmployees;
