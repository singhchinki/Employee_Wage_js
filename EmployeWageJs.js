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
    const NUM_OF_WORKING_DAYS = 20;
    MAX_HRS_IN_MONTH = 160;

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
    function calcDailyWage(empHrs) {
        return empHrs * WAGE_PER_HOUR;
    }   
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array(); 
    let empDailyWageMap = new Map();
    let empDailyHrsMap = new Map();
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
    } 
    let empWage = calcDailyWage(totalEmpHrs);
        console.log("Uc-6- Total Days: "+totalWorkingDays+ "Total Hrs: " + totalEmpHrs + "Emp Wage " +empWage);

//Array Helper Function
//UC7A- Calc Total Wage using Array forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A -Total Days: "+ totalWorkingDays + "Total Hrs:" + totalEmpHrs+ " Emp Wage: " +totEmpWage);
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC 7A-Emp wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));
//UC-7B- show the Day along With Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = "+dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B-Daily Wage Map");
console.log(mapDayWithWageArr);
//UC 7C - Show Days when full time wage full time wage of 160 were earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily wage filter when fulltime wage Earned");
console.log(fullDayWageArr);
//UC7D -Find the first occurennce when full time wage was earned using function
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7D First time Fulltime wage was earned on Day: "+ mapDayWithWageArr.find(findFulltimeWage));
//UC7E - check if every element of full time wage is truly holding full time wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7E - Check all Element have Full time wage: "+ fullDayWageArr.every(isAllFulltimeWage));
//UC7F - Check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7F - Check if any part time: "+ mapDayWithWageArr.some(isAnyPartTimeWage));
//UC 7G -Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G - Number of Days Emp Woeked: "+ empDailyWageArr.reduce(totalDaysWorked, 0));
//UC 8 MAP Function
 console.log("UC8A - EMP wage map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

 // UC9- Arrow Function
 const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;

 }
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC9- Emp wage with arrow: " + " Total Hours: "+ totalHours + " Total Wages: " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: "+fullWorkingDays +" Part Working Days: "+partWorkingDays+ " Non Working Days: "+ nonWorkingDays);
// UC10 - object Creation 
let empDailyHrsAndwageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndwageArr.push(
        {
            dayNum:totalWorkingDays,
            dailyHOurs:empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString(){
                return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHOurs + 'And Wage Earned = ' + this.dailyWage
            },
        });
}
console.log("UC 10 showing Daily Hours Worked and Wage Earned: " + empDailyHrsAndwageArr);
//uc-11A to 11D using object function along with Arrow Functions
let totalWage = empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let totalHrs = empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                .reduce((totalHrs, dailyHrsAndWage) => totalHrs += dailyHrsAndWage.dailyHours, 0);  
console.log("UC 11A Total Hours:- " + totalHours + " Total Wages:-" + totalWages);  
process.stdout.write("UC 11B Logging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                      .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));   
let partTimeWorkingDayStrArr = empDailyHrsAndWageArry
                               .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                               .map(dailyHrsAndWage => dailyHrsAndWage.toString());   
console.log("\nUC 11c partTimeWorkingDayStrArr:- " + " "+partTimeWorkingDayStrArr); 
let nonWorkingDayNums = empDailyHrsAndWageArr
                         .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                         .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC 11D NonWorkingDayNums: " + nonWorkingDayNums);


