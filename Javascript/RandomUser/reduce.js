function myReduce(array, callback, initialValue){
    let acc = initialValue;
    for(let i = 0; i < array.length; i++){
        acc = callback(acc, array[i], i, array);
    }

    return acc;
}

let nums = [4,5,7,8,9];

const sum = myReduce(nums, (acc, curr) => acc + curr, 0);
console.log('sum is ', sum);