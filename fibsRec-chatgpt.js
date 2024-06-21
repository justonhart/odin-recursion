/**
 * I fed my initial fibRec.js function to ChatGPT and asked if there was a more concise implementation, and this is what it returned. This code is far more performant than my initial naive implementation.
 */
function fibsRec(count, sequence = [0, 1]) {
  if (count <= 1) return sequence.slice(0, count);
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  return count === 2 ? sequence : fibsRec(count - 1, sequence);
}

console.log(`fibsRec(0): ${fibsRec(0)}`);
console.log(`fibsRec(2): ${fibsRec(2)}`);
console.log(`fibsRec(200): ${fibsRec(200)}`);

