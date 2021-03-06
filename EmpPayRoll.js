class EmployeePayRollData{
    //property
    id;
    salary;
    gender;
    startDate;
    //constructor
    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    //getter And setter method

    get name() {return this._name; }
    set name(name) {
    let nameRegex = RegExp('^[A-z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
        this._name = name;
        else throw 'Name is incorrect';
    }

    //method
    toString(){
    
        
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary + ",gender=" + this.gender + ", startDate=" + this.startDate;

    }
}
let employeePayRollData = new EmployeePayRollData(1, "lak", 30000);
console.log(employeePayRollData.toString());
employeePayRollData.name = "prasanna";
console.log(employeePayRollData.toString());
const date = new Date();
let newEmployeePayRollData = new EmployeePayRollData(1, "Terissa", 30000, "F", date.toLocaleDateString());
console.log(newEmployeePayRollData.toString());