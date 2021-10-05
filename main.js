import Scene from "./webgl/Scene.js";
import Ellipse from "./webgl/Ellipse.js";
import Vector3 from "./webgl/Vector3.js";
import Color from "./webgl/Color.js";
import Geometry from "./webgl/Geometry.js";

let scene;

const createBottle = (x, y) => {
  const topBottle = [];
  for (let i = 0; i < 20; i++) {
    topBottle.push({
      centerX: x,
      centerY: y + 0.35 - (i * (0.3 - 0.1)) / 20,
      centerZ: 0,
      radiusX: 8 + Math.pow(i * 0.15, 2),
      radiusY: 4 + (i * (12 - 4)) / 20,
      numberOfSides: 120,
      uniformColors: new Color(1,1,1, 1.0),
    });
  }

  const bottomBottle = [
    {
      centerX: x,
      centerY: y + -0.29,
      centerZ: 0,
      radiusX: 17,
      radiusY: 12,
      numberOfSides: 120,
      uniformColors: new Color(1,1,1, 1.0),
    },
    {
      centerX: x,
      centerY: y + 0.1,
      centerZ: 0,
      radiusX: 17,
      radiusY: 12,
      numberOfSides: 120,
      uniformColors: new Color(1,1,1, 1.0),
    },
  ];

  return [...bottomBottle, ...topBottle];
};

function main() {
  const canvas = document.getElementById("myCanvas");
  scene = new Scene(canvas);

  const bgColor = new Color(0,0,0, 1.0);
  scene.setBgColor(bgColor);

  const bottle1 = createBottle(-0.5, 0);
  const bottle2 = createBottle(0.5, 0);

  const bottles = [...bottle1, ...bottle2];

  bottles.forEach((item) => {
    const ellipse = new Ellipse(
      new Vector3(item.centerX, item.centerY, item.centerZ),
      item.radiusX,
      item.radiusY,
      item.numberOfSides,
      item.uniformColors
    );

    scene.addGeometry(ellipse);
  });

  var col = new Color(1,1,1,1)
  var kotak1 = new Ellipse(
    new Vector3(-0.5, -0.08, 0), 20, 34, 100, col
  );
  var kotak2 = new Ellipse(
    new Vector3(0.5, -0.06, 0), 20, 34, 100, col
  );

  scene.addGeometry(kotak1);
  scene.addGeometry(kotak2);

  scene.render();
  
  animate();
}
var speed = 0.0166;

function update() {
  scene.render();
}

function animate() {
  

  requestAnimationFrame(animate);
  update();
}

window.onload = main();
