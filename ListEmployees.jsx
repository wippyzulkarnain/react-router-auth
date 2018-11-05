import React, { Component } from 'react';

class ListEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            employees:[]
        }
    }
    render() { 
        return ( 
            <div><h1>List of Employees</h1></div>
         );
    }
}
 
export default ListEmployees;