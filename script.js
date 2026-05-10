let isIntToRoman = true;

function toggleMode() {
  isIntToRoman = !isIntToRoman;
  document.getElementById('title').innerText = isIntToRoman ? 'Integer to Roman' : 'Roman to Integer';
  document.getElementById('userInput').value = '';
  document.getElementById('result').innerText = 'Result will appear here';
}

function toRoman(num) {
  if (isNaN(num) || !Number.isInteger(num) || num <= 0 || num > 3999) {
    return 'Invalid text';
  }
  
  const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let str = '';
  for (let i in map) {
    while (num >= map[i]) {
      str += i;
      num -= map[i];
    }
  }
  return str;
}

function toInt(roman) {
  roman = roman.toUpperCase();
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  // Basic validation regex for Roman Numerals
  const regex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  if (!regex.test(roman) || roman === '') return 'Invalid text';

  let total = 0;
  for (let i = 0; i < roman.length; i++) {
    let current = map[roman[i]];
    let next = map[roman[i + 1]];
    if (next > current) {
      total += (next - current);
      i++;
    } else {
      total += current;
    }
  }
  return total;
}

function handleConversion() {
  const input = document.getElementById('userInput').value.trim();
  const resultBox = document.getElementById('result');

  if (isIntToRoman) {
    const num = Number(input); 
    resultBox.innerText = toRoman(num);
  } else {
    resultBox.innerText = toInt(input);
  }
}

export { toRoman, toInt };
