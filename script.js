const display = document.querySelector('.display');
let n1

let keySelect = (k) => {
  timesClicked = 0;
  if (k === '+' || k === '×' || k === '÷') {
    if (!display.innerText.includes('+') && !display.innerText.includes('×') && !display.innerText.includes('÷') && display.innerText.slice(-1) != '.' && display.innerText.slice(-1) != '-' && display.innerText != '0' && display.innerText.split('-').length -1 < 2) {
      if (display.innerText.includes('-')) {
        if (display.innerText[0] === '-') {
          n1 = display.innerText;
          display.innerText += k;
        }
      } else {
        n1 = display.innerText;
        display.innerText += k;
      }
    };
  } else if (k === '-') {
    if (display.innerText.split('-').length - 1 < 2 && display.innerText.slice(-1) != '-') {
      if (display.innerText === '0') {
        display.innerText = k;
      } else if (display.innerText[0] === k) {
        if (display.innerText.includes('+') || display.innerText.includes('×') || display.innerText.includes ('÷')) {
          if (display.innerText.slice(-1) === '+' || display.innerText.slice(-1) === '×' || display.innerText.slice(-1) === '÷') {
            display.innerText += k;
          }
        } else {
          n1 = display.innerText;
          display.innerText += k;
        }
      } else if (display.innerText[0] != k) {
        if (display.innerText.split('-').length - 1 < 1) {
          if (display.innerText.includes('+') || display.innerText.includes('×') || display.innerText.includes ('÷')) {
            if (display.innerText.slice(-1) === '+' || display.innerText.slice(-1) === '×' || display.innerText.slice(-1) === '÷') {
              display.innerText += k;
            }
          } else {
            n1 = display.innerText;
            display.innerText += k;
          }
        }
      }
    }
  } else if (k === '.') {
    if (display.innerText.split('.').length - 1 < 2 && display.innerText.slice(-1) != '.') {
      if (display.innerText === '0') {
        display.innerText = k;
      } else if (n1.includes('.')) {
        display.innerText += k;
      } else if (display.innerText.split('.').length - 1 < 1) {
          display.innerText += k;
      }
    }
  } else if (display.innerText === '0' || display.innerText === '_' || display.innerText === 'undefined') {
    display.innerText = (k);
  } else {
    display.innerText = display.innerText + (k);
  }
};

let timesClicked = 0;
let eqSelect = () => {
  n1 = ''
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
