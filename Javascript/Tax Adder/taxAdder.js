taxObj = {
    tax: 0.1
}

function calculateTotal(num1, num2){
    console.log(this.tax * (num1 + num2));
}


function solve(taxObj, x, y){
    calculateTotal.call(taxObj, x, y);
    calculateTotal.apply(taxObj, [x,y]);
    const bound = calculateTotal.bind(taxObj,x,y);
    return bound();
}

// const total = solve(taxObj, 10, 20);

console.log(Math.floor(20/3));
