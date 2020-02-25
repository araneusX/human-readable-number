module.exports = function toReadable (number) {
  vocabulary = [
    {
       1: 'one',
       2: 'two',
       3: 'three',
       4: 'four',
       5: 'five',
       6: 'six',
       7: 'seven',
       8: 'eight',
       9: 'nine',
      10:'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
    },
    {
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety'
    },
    'hundred',
    'thousand',
    'million',
  ]
  
  if (number === 0) {
    return 'zero';
  }
  
  const level = (Math.ceil(number.toString().length / 3)) - 1;
  const order = level === 0 ? 100 : Math.pow(10, level * 3);
  const head = Math.trunc(number / order);
  const tail = number - (head * order);
  let redableNumber = '';
  if (head > 0) {
    if (head > 99) {
      redableNumber = toReadable(head);
    }else if (head < 20) {
      redableNumber = vocabulary[0][head];
    }else{
      redableNumber = vocabulary[1][Math.trunc(head / 10)];
      if (head % 10 > 0) {
        redableNumber += ` ${vocabulary[0][head % 10]}`;
      } 
    }

    redableNumber += ` ${vocabulary[level + 2]}`;

    if (tail > 0) {
      redableNumber += ` ${toReadable(tail)}`
    }
  }else if (tail < 20) {
    redableNumber = vocabulary[0][tail];
  }else{
    redableNumber = vocabulary[1][Math.trunc(tail / 10)];
    if (tail % 10 > 0) {
      redableNumber += ` ${vocabulary[0][tail % 10]}`;
    } 
  }
  return redableNumber;
}
