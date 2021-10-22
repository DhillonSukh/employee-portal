import { useObserver } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import {Employee} from '../store/Employee';
import {storeContext} from '../store/Context';


const EmployeeList : React.FC = () =>{
   const store = React.useContext(storeContext);
   if(store==null){
       throw Error('store cant be null');
   }
   const list :Employee[] = store.getEmployeelist();
    return useObserver(() => (<div>
        <h2>Total Employees are {store.totalEmployees}</h2>
        <ul>
            { list  && list.map((emp:Employee) =>
             <li key={emp.id}> <Link to= {`/details/${emp.id}`}>{emp.name}</Link>
             </li>)}
        </ul>
    </div>));
}

export default EmployeeList;