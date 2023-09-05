function bubbleSort(arr, compareFunction) {
	let swapped = true;

	while (swapped) {
		swapped = false;

		for(let i = 1; i < arr.length; i++) {
			if (compareFunction(arr[i-1], arr[i])) {
				const temp = arr[i - 1];
				arr[i-1] = arr[i];
				arr[i] = temp;
				swapped = true;
			}
		}

	}

	return arr;
}

export default bubbleSort;