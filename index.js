function encode(number, alphabet) {

  let result = number;
  const remainders = [];
  const desiredOutput = [];

  if (result < 0) {
    result *= (-1);
  } else if (result === 0) {
    desiredOutput.splice(0, 0, alphabet[0]);
    return desiredOutput;
  }


  while (result > 0) {
    const remainder = result % alphabet.length;
    result = Math.floor(result / alphabet.length);

    desiredOutput.splice(0, 0, alphabet[remainder]);
  }

  if (number < 0) {
    desiredOutput.splice(0, 0, '-');
  }

  return desiredOutput.join('');
}

function decode(input, alphabet) {

  let result = 0;
  let normalizer = 1;

  if (input[0] === '-') {
    input = input.substring(1);
    normalizer = -1;
  }

  for (let i = 0; i < input.length; i++) {
    const position = alphabet.indexOf(input[input.length - (i + 1)]);
    result += position * Math.pow(alphabet.length, i);
  }

  return result * normalizer;
}

function changeBase(input, sourceAlphabet, targetAlphabet) {
  return encode(decode(input, sourceAlphabet), targetAlphabet);
}

const alphabets = {
  bin: [
    '0', '1'
  ],
  oct: [
    '0', '1', '2', '3', '4', '5', '6', '7'
  ],
  dec: [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ],
  hex: [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'
  ]
};

module.exports = {
  changeBase: changeBase,
  encode: encode,
  decode: decode,
  alphabets: alphabets
};
