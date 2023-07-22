const employees = [
    {
        'name' : 'John', 
        'age' : 30, 
        'department': "HR", 
        'salary' : 50000
    },
    {
        'name' : 'Ross', 
        'age' : 40, 
        'department': "IT", 
        'salary' : 60000
    },
    {
        'name' : 'Joe', 
        'age' : 35, 
        'department': "HR", 
        'salary' : 55000
    },
    {
        'name' : 'Rachel', 
        'age' : 20, 
        'department': "Finance", 
        'salary' : 60000
    },
    {
        'name' : 'Monical', 
        'age' : 45, 
        'department': "IT", 
        'salary' : 52000
    },
    {
        'name' : 'Phoebe', 
        'age' : 32, 
        'department': "HR", 
        'salary' : 50000
    },
    {
        'name' : 'Chandler', 
        'age' : 37, 
        'department': "IT", 
        'salary' : 70000
    }
]

function performEmployeeOperations(employees){
    // find employee with highest salary
    const highestSalary = employees.reduce((acc, curr) => {
        if(acc.salary > curr.salary){
            return acc;
        } else {
            return curr;
        }
    });

    // group employee by department
    const groupByDepartment = employees.reduce((acc, curr) => {
        if(acc[curr.department]){
            acc[curr.department].push(curr);
        } else{
            acc[curr.department] = [curr];
        }

        return acc;
    }, {});

    // average age by department

    const averageAgeByDepartment = {};
    for(let department in groupByDepartment){
        let empInDepartment = groupByDepartment[department];
        let totalAge = empInDepartment.reduce((acc, curr) => {
            return acc + curr.age;
        }, 0);

        const average = totalAge / empInDepartment.length;

        averageAgeByDepartment[department] = average;
    }

    const longestName = employees.reduce((acc, curr) => Math.max(acc, curr.name.length), 0);

    const empwithLongestName = employees.filter((emp) => emp.name.length === longestName);
    return {    
        highestSalary,
        groupByDepartment,
        empwithLongestName
    }
}

const operation = performEmployeeOperations(employees);

// console.log(operation.highestSalary);
console.log(operation.groupByDepartment);
