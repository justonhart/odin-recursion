function fibsRec(count) {
	if(count <= 0) return [];
	if(count === 1) return [0];
	if(count === 2) return [0, 1];
	let recursiveReturn = fibsRec(count - 1);
	return recursiveReturn
		.concat(recursiveReturn
			.slice(-2)
			.reduce((sum, next) => sum + next));
}

console.log(`fibsRec(0): ${fibsRec(0)}`);
console.log(`fibsRec(2): ${fibsRec(2)}`);
console.log(`fibsRec(200): ${fibsRec(200)}`);
