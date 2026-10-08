(function () {
  
  console.log("-- Multiplication Table of 5 --");
  for (let i = 1; i <= 5; i++) {
    console.log("5 x " + i + " = " + 5 * i);
  }
  console.log("\n-- First number > 10 divisible by 6 --");
  let n = 11;
  while (true) {
    if (n % 6 === 0) {
      console.log("Found: " + n);
      break; // stop the loop
    }
    n++;
  }
  console.log("\n-- do...while loop (skips 3) --");
  let j = 0;
  do {
    j++;
    if (j === 3) continue; // skip this round
    console.log("Number: " + j);
  } while (j < 5);
})();