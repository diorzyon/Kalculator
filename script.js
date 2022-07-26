let displayValue = '0';
  function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
    if(displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
  }
    function putThisOnDisplay(val) {
    document.getElementById("result").value += val;
    return val;
    }
    function operation() {
    let inputValue = document.getElementById("result").value;
  
    let outputValue = eval(inputValue);
    document.getElementById("result").value = outputValue;
  
    if (outputValue === undefined){
      document.getElementById("result").value = "Error!";
    }
    return outputValue;
    }
    function clearScreen() {
    document.getElementById("result").value = "";
    }
    function removeLastEntry() {
    let val = document.getElementById("result").value;
    document.getElementById("result").value = val.slice(0, -1);
    if (val === ""){
      alert('Cannot be empty entry');
    }
    }
  