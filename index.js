var rec = require("./rectangle");

function Rectangle(length, breadth) {
  if (length <= 0 || breadth <= 0)
    consolde.log("Length and Breadth should be greater than 0");
  else {
    console.log("Perimeter " + rec.perimeter(length, breadth));
    console.log("Area " + rec.area(length, breadth));
  }
}

Rectangle(1, 2);
