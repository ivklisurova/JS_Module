function solve(day) {
  let weekDay = day;
  const obj = {
    Monday: "1",
    Tuesday: "2",
    Wednesday: "3",
    Thursday: "4",
    Friday: "5",
    Saturday: "6",
    Sunday: "7",
  };

  if (weekDay in obj) {
    console.log(obj[weekDay]);
  } else {
    console.log("error");
  }
}

solve('inv')