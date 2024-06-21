/**
 * Sorts an array using Merge Sort
 * @param {Array} array - the array of numbers to sort
 */
function mergeSort(array) {
	if(array.length === 1) return array;
	const sortedFirstHalf = mergeSort(array.slice(0, Math.ceil(array.length / 2)));
	const sortedSecondHalf = mergeSort(array.slice(Math.ceil(array.length / 2)));

	const sortedArray = []

	while(sortedFirstHalf.length && sortedSecondHalf.length) {
		const currentSmallest = sortedFirstHalf[0] < sortedSecondHalf[0] 
			? sortedFirstHalf.shift() 
			: sortedSecondHalf.shift();
		sortedArray.push(currentSmallest);
	}

	if(sortedFirstHalf.length){
		sortedArray.push(...sortedFirstHalf);
	} else {
		sortedArray.push(...sortedSecondHalf);
	}

	return sortedArray;
}

const arr = [5,2,3,11,6,8,44,908,1,0,5];
console.log(`arr: ${arr}`);
console.log(`mergeSort(arr): ${mergeSort(arr)}`);
