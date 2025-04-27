function subSetSum(nums, target) {
  // let sums = [0]; no es eficiente, gasta mucha memoria
  let sums = new Set([0]); // usamos un set para evitar duplicados
  for (let num of nums) {
    const sumsCopy = [...sums];

    for (let sum of sumsCopy) {
      const newSum = num + sum;

      if (newSum === target) {
        return true;
      }
      console.log(sums);
      // sums.push(newSum); para arrays no sets
      sums.add(newSum);
    }
  }

  return false;
}

console.log(subSetSum([1, 2, 3, 4], 9)); // true
