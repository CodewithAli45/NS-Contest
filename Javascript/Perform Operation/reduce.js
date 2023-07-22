const nums = [
    {"name": 'ali', 'age': 20, 'depart' : 'IT'},
    {"name": 'jy', 'age': 18, 'depart': 'hr'},
    {"name": 'babita', 'age': 160, 'depart': 'IT'},
];

const sq = nums.reduce((acc, curr) => {
    if(acc.age > curr.age){
        return acc;
    } else{
        return curr;
    }
});
let obj = {};

const groupByDepartment = nums.reduce((acc, curr) => {
    if(acc[curr.depart]){
        acc[curr.depart].push(curr);
    } else {
        acc[curr.depart] = [curr];
    }

    return acc;
}, {});

const groupAverage = {};
for(department in groupByDepartment){
    let employee = groupByDepartment[department];
    let totalAge = employee.reduce((acc, curr) => acc + curr.age, 0);
    const average = totalAge / employee.length;
    groupAverage[department] = average
}

const longestName = nums.reduce((acc, curr) => Math.max(acc, curr.name.length), 0);
const lonestemp = nums.filter((emp) => emp.name.length === longestName);
console.log(lonestemp);
console.log(longestName, 'is longest length');

// console.log(groupAverage);