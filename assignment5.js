(function () {
  function rectangleArea(length = 5, width = 4) {
    return length * width;
  }
  const rectangleAreaArrow = (length = 5, width = 4) => length * width;

  console.log("Standard Function Area (Default 5x4): " + rectangleArea());
  console.log("Arrow Function Area (Custom 10x3): " + rectangleAreaArrow(10, 3));
  function functionScopeTest() {
    var insideFunction = "I live only inside this function";
    return insideFunction;
  }
  functionScopeTest();
  try {
    if (true) {
      let blockVar = "I live only inside this block";
    }
    console.log(blockVar);
  } catch (error) {
    console.log("Scope Test Error: " + error.name + ": " + error.message);
  }
})();