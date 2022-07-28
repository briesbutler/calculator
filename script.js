const display = document.querySelector('.display');

let keySelect = (k) => {
  timesClicked = 0;
  if (k === '+' || k === '×' || k === '÷') {
    if (!display.innerText.includes('+') && !display.innerText.includes('×') && !display.innerText.includes('÷') && display.innerText.slice(-1) != '.' && display.innerText.slice(-1) != '-' && display.innerText != '0') {
      display.innerText = display.innerText + k;
    };
  } else if (k === '-') {
    if (display.innerText === '0') {
      display.innerText = k;
    } else if (display.innerText.endsWith('-') || display.innerText.split('-').length - 1 > 1 ) {
      display.innerText = display.innerText;
    } else {
      display.innerText += k;
    }
  } else if (k === '.') {
    if (display.innerText === '0') {
      display.innerText = k;
    } else if (display.innerText.split('.').length - 1 > 1 || display.innerText.endsWith('.') || (display.innerText.includes('.') && !display.innerText.includes('0-') && !display.innerText.includes('1-') && !display.innerText.includes('2-') && !display.innerText.includes('3-') && !display.innerText.includes('4-') && !display.innerText.includes('5-') && !display.innerText.includes('6-') && !display.innerText.includes('7-') && !display.innerText.includes('8-') && !display.innerText.includes('9-') && !display.innerText.includes('+') && !display.innerText.includes('×') && !display.innerText.includes('÷'))) { 
      display.innerText = display.innerText;
    } else {
      display.innerText += k;
    }
  } else if (display.innerText === '0' || display.innerText === '_' || display.innerText === 'undefined') {
    display.innerText = (k);
  } else {
    display.innerText = display.innerText + (k);
  }
};

let timesClicked = 0;
let eqSelect = () => {
  timesClicked++;
  if (timesClicked > 1) {
    display.innerText = '0'
  } else {    
    if (display.innerText.includes('×')) {
      let x = display.innerText.replace('×', '*')
      let y = eval(x)
      display.innerText = y
    } else if (display.innerText.includes('÷')) {
      let x = display.innerText.replace('÷', '/');
      let y = eval(x)
      display.innerText = y
    } else {
      let x = display.innerText;
      let y = eval(x)
      display.innerText = y
    }
  }
}  
