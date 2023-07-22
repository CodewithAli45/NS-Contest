function repeatwithCount(count){
    let executionCount = 0;

    function timer(){
        executionCount++;
        console.log("Interval has been executed " + executionCount + " time(s)");
        if(executionCount === count){
           clearInterval(intervalId);
        }
    };

    let intervalId = setInterval(timer, 1000);

    setTimeout(() => {
        console.log("Interval execution stopped");
    }, (count + 1) * 1000);
}
repeatwithCount(5)