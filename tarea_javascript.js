const fs = require("fs");

function FuncionFibonacci(n) {
  var x0 = 0;
  var x1 = 1;
  var r = 0;
  for (let i = 1; i < n; i++) {
    r = x1 + x0;
    x0 = x1;
    x1 = r;
  }
  return console.log(r);
}

fs.readFile("input__.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  let start = FuncionFibonacci(data);
  console.log(start);

});
