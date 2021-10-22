import { useObserver } from "mobx-react";
import React from "react";
import {  Row,Col } from "react-bootstrap";
import { useParams } from "react-router";
import { storeContext } from "../store/Context";
import employeeAvatar from '../images/emp.jpg'; 

const EmployeeDetails : React.FC = () =>{
    const store = React.useContext(storeContext);
    if(store==null){
      throw Error("Something went wrong...");
    }

    type DetailsParams = {
        id: string | undefined ;
      };
      
    const { id } = useParams<DetailsParams>();

    const Employee = store.getEmployeeDetails(id);

    return useObserver(() => (<div className="employee-detail">
      <Row>
        <Col lg={6}> 
          <h3>Name</h3>{Employee && Employee.name}
          <h3>Address</h3>{Employee && Employee.address}
          <h3>Email</h3>{Employee && Employee.email}
          <h3>Contact number</h3>{Employee && Employee.contact}
          <h3>Department</h3>{Employee && Employee.department}
        </Col>
        <Col lg={6}> 
          <img  src={employeeAvatar} alt="employee"/>
        </Col>
      </Row>
    </div>));
};

export default EmployeeDetails;