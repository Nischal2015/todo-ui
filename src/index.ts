export const isPalindrome = (data: string) => {
  let left = 0;
  let right = data.length - 1;

  while (left < right) {
    if (data[`${left}`] === data[`${right}`]) {
      left += 1;
      right -= 1;
    } else return false;
  }
  return true;
};
