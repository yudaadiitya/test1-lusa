const getDuplicate = (arr) => {
  let result = [];
  let sortArr = arr.sort();
  for (let i = 0; i < sortArr.length - 1; i++) {
    if (sortArr[i + 1] == sortArr[i]) {
      result.push(sortArr[i]);
    }
  }
  return result;
};

let arrDuplicate = [1, 2, 3, 4, 2];
console.log(`The duplicate element is ${getDuplicate(arrDuplicate)}`);
