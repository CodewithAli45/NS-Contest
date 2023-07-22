Tax Adder
easy
Problem Statement
You are given a function calculateTotal, which takes two parameter num1 and num2, adds them and returns the tax on them by multiplying the sum with tax stored in thethis object.

The function solve takes 3 arguments taxObj, x and y. taxObj is a object in the format, {tax: 0.2}, where 0.2 is the tax rate.

Your task is to complete this function solve, so that it executes the following tasks in the given order -

Bind the calculateTotal function to the taxObj object, and call the function using the in-built call() function, with x as the first parameter and y as the second parameter

Bind the calculateTotal function to the taxObj object, and call the function using the in-built apply() function, with x as the first parameter and y as the second parameter

Bind the calculateTotal function to the taxObj object, and store it in a new function boundCalculateTotal. Then return this new function boundCalculateTotal

Input
The function solve takes 3 arguments taxObj, x and y. taxObj is a object in the format, {tax: 0.2}, where 0.2 is the tax rate. x and y are parameters which are to be used to call the calculateTotal function.

To test your solution, enter num1, num2 and the tax rate, seperated by commas. The function will be called internally.
Example: 30,30,0.5
Output
The function solve will call the calculateTotal function, twice by binding it to the taxObj object, first with the inbuilt call() function and then with the inbuilt apply() function.
Then it should bind the calculateTotal function to the taxObj object, and store it in a new function boundCalculateTotal. Then the function solve function should return this new function boundCalculateTotal
Example
const taxObj = {
tax: 0.1
}
const boundCalculateTotal = solve(taxObj, 10, 20); // prints 3 3
boundCalculateTotal(10, 20); //prints 3