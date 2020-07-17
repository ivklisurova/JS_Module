function solve(a) {
  let num = a;
  let result=''
  if (num) {
    if (num > 5) {
      num = 5;
    } 
  } else {
    num = 5;
    }
    for (let i = 1; i <= num; i++) {
        result += `${"* ".repeat(num)}`;
        if(i<num){
            result += "\n";
        }
        
  }
  console.log(result);
}

solve(7);
