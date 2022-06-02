// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/*
let employee = {};
employee.code = 10;
employee.name = "John"; 

Solução:

*/

type Employee = {
    code: number,
    name: string
}

let employee: Employee = {
    name: "John",
    code: 10
};

// *******

interface EmployeeAlt {
    code: number,
    name: string
}

let employeeAlt = {} as EmployeeAlt;
employeeAlt.code = 10;
employeeAlt.name = "John";