
//  FCB -Simple Javascript Program

// W.D.Vihari Gunarathna 

function appendValue(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function backspace() {
      let display = document.getElementById('display');
      if (display.value.length > 0) {
          display.value = display.value.slice(0, -1);
      }
  }

  function calculateResult() {
    try {
      let inputValue = document.getElementById('display').value;

      // Check if the input contains a percentage sign
      if (inputValue.includes('%')) {
        // Remove the percentage sign and calculate the percentage
        let percentageValue = parseFloat(inputValue) / 100;
        document.getElementById('display').value = percentageValue;
      } else {
        // If no percentage sign, use eval for other calculations
        document.getElementById('display').value = eval(inputValue);
      }
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
