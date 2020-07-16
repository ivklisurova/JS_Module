function stringLength(a, b, c) {
    let length;
    let average;

  let aLenght = a.length;
  let bLenght = b.length;
  let cLenght = c.length;
  length = aLenght + bLenght+cLenght;
  average = Math.floor(length / 3);
  console.log(length);
  console.log(average);
}

stringLength("chocolate", "ice cream", "cake");
stringLength("pasta", "5", "22.3");
