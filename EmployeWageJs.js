///uc1---------
{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT) {
        console.log("Uc1 - Employee is absent");
        return;
        
    }
    else{
        console.log("Uc1- Employee is Present");

    }
}
///-----Uc2-------------
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    
        
        
        function getWorkingHours(empCheck) {
            switch(empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
        
            default:
                return 0;        
        }
    }
       
    let empHrs = 0;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs = getWorkingHours(empCheck);
        let empWage = empHrs * WAGE_PER_HOUR;
        console.log("Hour: "+empHrs)
        console.log("Uc3 - Emp Wage: " + empWage);

