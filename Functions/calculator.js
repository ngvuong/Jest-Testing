// export function calculator(num1, num2) {

// }

export const calculator = {
  add: (...operands) => {
    return operands.reduce((acc, op) => acc + op, 0);
  },

  subtract: (...operands) => {
    return operands.slice(1).reduce((acc, op) => acc - op, operands[0]);
  },

  multiply: (...operands) => {
    return operands.reduce((acc, op) => acc * op, 1);
  },

  divide: (...operands) => {
    return operands.slice(1).reduce((acc, op) => acc / op, operands[0]);
  },
};
