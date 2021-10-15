export function analyze(array) {
  const average = array.reduce((sum, num) => sum + num, 0) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  return { average, min, max, length };
}
