Problem Statement
Complete the function repeatWithDelay. You will be given a single argument, count, a number.

This count argument should control the number of times the function should be executed with a 1-second delay. Use the JS inbuilt function, which repeatedly calls a function after a specific interval of time, to call the function after a 1-second delay . The function within the inbuilt function (i.e passed as callback) should print "Interval has been executed " + executionCount + " time(s)" to the console. The executionCount should increment as the function is called after every second. When the executionCount is equal to the count argument, clear the interval.

After executing the above function, use another JS inbuilt function that calls a function after a specific time. This callback function, within the inbuilt function, should print "Interval execution stopped" to the console. Use the built-in method, to clear the interval after the count+1 delay.

Note: You may see "setTimeout was not called" printed on the console. This is because you may have solved the question using loops.
Input
The function takes in a number.
Output
The function prints a string on the console.
Example
let count = 3;

repeatWithDelay(count);

// prints
Interval has been executed 1 time(s)
Interval has been executed 2 time(s)
Interval has been executed 3 time(s)
Interval execution stopped