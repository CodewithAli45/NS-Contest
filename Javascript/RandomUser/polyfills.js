// polyfills of map functions

let students = [10,20,47,45,63];


// Array.prototype.myMap = function (callback){
//     let myArr = [];
//     for(let i = 0; i < this.length; i++){
//         myArr.push(callback(this[i], i, this))
//     }

//     return myArr;
// }


// filter
// Array.prototype.myFilter  = function(callback, thisArg){
//     let filteredArr = [];
//     for(let i = 0; i < this.length; i++){
//         if(callback.call(thisArg, this[i])){
//             filteredArr.push(this[i]);
//         }
//     }
//     return filteredArr;
// }

// const result = students.myFilter((item) => item % 2 === 0);
// console.log(result);

// Reduce method

Array.prototype.myReduce = function(callback, initialValue){
    let accumulator = initialValue !== undefined ? initialValue : 0;
    const startIndex = initialValue !== undefined ? 0 : 1;

    for(let i = startIndex; i < this.length; i++){
        accumulator = callback(accumulator, this[i], i, this)
    }

    return accumulator;
}

const result = students.myReduce((acc, curr) => acc + curr);

console.log(result);