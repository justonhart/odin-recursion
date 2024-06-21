function fibs(count) {
	if(count <= 0) return [];
	if(count === 1) return [0];

	let out = [0, 1];

	for(let i = 2; i < count; i++) {
		out[i] = out[i-1] + out[i-2];
	}

	return out;
}

console.log(`fibs(0): ${fibs(0)}`);
console.log(`fibs(2): ${fibs(2)}`);
console.log(`fibs(8): ${fibs(8)}`);
