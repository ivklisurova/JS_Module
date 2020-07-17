function solve(a) {
  let arr = a;
  let length = arr.length;
  let sumOfNumbers = 0;
  let sumInverceValues = 0;
  let concat = ''
  for (let i = 0; i < length; i++) {
    sumOfNumbers += arr[i];
    sumInverceValues += 1 / arr[i];
    concat += arr[i].toString()
  }
  console.log(sumOfNumbers);
  console.log(sumInverceValues);
  console.log(concat)

}

solve([2, 4, 8, 16]);
