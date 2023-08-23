const solution = (arr) => {
  if (arr.length === 0) return "";
  const [rootIndex, value] = findRootIndex(arr);
  let leftSum = sum(leftNodeList(rootIndex, arr));
  let rightSum = sum(rightNodeList(rootIndex, arr));
  if (leftNodeList(rootIndex, arr).length === rightNodeList(rootIndex, arr).length) return "";
  value === 100 ? rightSum = rightSum + 100 : rightSum = rightSum;
  if (leftSum > rightSum) {
    return "Left";
  } else {
    return "Right";
  }
};

const sum = numbers => numbers.reduce((acc, curr) => acc + curr, 0);

const findRootIndex = (arr) => {
  let rootIndex = undefined;
  let value = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1 || arr[i] === 100) {
      rootIndex = i;
      value = arr[i];
    }
  }
  return [rootIndex, value];
};

const leftNodeList = (rootIndex, arr) => {
  let leftSide = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < rootIndex) {
      leftSide.push(arr[i]);
    }
  }
  return leftSide;
};

const rightNodeList = (rootIndex, arr) => {
  let rightSide = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > rootIndex) {
      rightSide.push(arr[i]);
    }
  }
  return rightSide;
};