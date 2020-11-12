// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
  
//   // slide to see how detailY works
//   let detailY;
//   function setup() {
//     createCanvas(100, 100, WEBGL);
//     detailY = createSlider(2, 24, 6);
//     detailY .position(10, height + 5);
//     detailY .style('width', '80px');
//   }
  
//   function draw() {
//     background(205, 105, 9);
//     rotateY(millis() / 1000);
//     ellipsoid(30, 40, 40, 12, detailY .value());
//   }

// slide to see how detailY works
let detailY;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  detailY = createSlider(2, 24, 6);
  detailY.position(10, height + 5);
  detailY.style('width', '80px');
}

function draw() {
  background(205, 105, 9);
  rotateY(millis() / 1000);
  ellipsoid(30, 40, 40, 12, detailY.value());
}








