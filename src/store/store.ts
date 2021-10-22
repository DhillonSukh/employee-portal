import { Employee } from "./Employee";

var employeeList:Employee[] = [];
export const createStore = () =>{
    const store= {
        //get an employees details
        getEmployeeDetails(id: string | undefined) : Employee | undefined{
            return employeeList.find((employee:Employee) => Number(employee.id) === Number(id));
        },

        //get list of all employees
        getEmployeelist() :Employee[] {
            return employeeList;
        },
    
        // total number employees
        get totalEmployees() :number {
            if(employeeList === null){
                return 0;
            }
            return employeeList.length;
        },

        //add employee to list 
        addEmployee(item:Employee){
            if(employeeList === null){
                employeeList = [item];
            }
            else{
                employeeList.push(item);
            }
        },
    }
    return store;
}

export type EStore = ReturnType<typeof createStore>