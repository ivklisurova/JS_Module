function solve(a) {
  let type = typeof (a);
  if (type  === "number") {
    let result = Math.PI * Math.pow(a,2);
    console.log(result.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}

solve(5);
solve("name");
