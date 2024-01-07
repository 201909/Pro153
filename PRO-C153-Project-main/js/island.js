AFRAME.registerComponent("island-rotation", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation > 5) {
          this.data.speedOfRotation -= 3;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation < -5) {
          this.data.speedOfRotation += 3;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.z += this.data.speedOfRotation;
    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z,
    });
  },
});