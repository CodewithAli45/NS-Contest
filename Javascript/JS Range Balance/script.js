const maxSumInput = document.getElementById('input-field');
  const rangeAInput = document.getElementById('range-a');
  const rangeAValue = document.getElementById('range-a-value');
  const rangeBInput = document.getElementById('range-b');
  const rangeBValue = document.getElementById('range-b-value');
  const sumOutput = document.getElementById('sum');

  // Update the max attribute of range inputs and calculate the sum
  function updateRangeAttributes() {
    const maxSum = parseInt(maxSumInput.value);
    rangeAInput.max = rangeBInput.value;
    rangeBInput.max = maxSum;
    calculateSum();
  }

  // Calculate the sum of range values and display it
  function calculateSum() {
    const rangeA = parseInt(rangeAInput.value);
    const rangeB = parseInt(rangeBInput.value);
    const sum = rangeA + rangeB;
    sumOutput.textContent = `Sum: ${sum}`;
  }

  // Display the current value of range A input
  function displayRangeAValue() {
    rangeAValue.textContent = `Range A Value: ${rangeAInput.value}`;
  }

  // Display the current value of range B input
  function displayRangeBValue() {
    rangeBValue.textContent = `Range B Value: ${rangeBInput.value}`;
  }

  // Event listeners
  maxSumInput.addEventListener('input', updateRangeAttributes);
  rangeAInput.addEventListener('input', calculateSum);
  rangeAInput.addEventListener('input', displayRangeAValue);
  rangeBInput.addEventListener('input', calculateSum);
  rangeBInput.addEventListener('input', displayRangeBValue);

  // Initial setup
  updateRangeAttributes();
  displayRangeAValue();
  displayRangeBValue();