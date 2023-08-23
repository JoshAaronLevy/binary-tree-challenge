const solution = (arr) => {
  if (arr.length === 0) return "";
  const { leftSum, rightSum } = arr.reduce((acc, value, index) => {
    if (index === 0) return acc;
    index % 2 === 1 ? acc.leftSum += value : acc.rightSum += value;
    return acc;
  }, { leftSum: 0, rightSum: 0 });
  if (leftSum === rightSum) return "";
  return leftSum > rightSum ? "Left" : "Right";
};

export default solution;