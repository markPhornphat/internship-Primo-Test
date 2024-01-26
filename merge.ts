function merge(collection_1: number[], collection_2: number[]): number[] {
  let sorted: number[] = []; //initialize the sorted array to be empty!
  let left = 0;
  let right = 0;
  // 4 8 5    6 1 2
  while (left < collection_1.length && right < collection_2.length) {
    if (collection_1[left] <= collection_2[right]) {
      sorted.push(collection_1[left]);
      left++;
    } else {
      sorted.push(collection_2[right]);
      right++;
    }
  }

  //Insert the remaining number on left partition, if there are any
  while (left < collection_1.length) {
    sorted.push(collection_1[left]);
    left++;
  }

  //Insert the remaining number on right partition, if there are any
  while (right < collection_2.length) {
    sorted.push(collection_2[right]);
    right++;
  }
  return sorted;
}

export { merge };

// console.log(merge([0, 3, 5], [0, 1, 2]));
