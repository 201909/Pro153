AFRAME.registerComponent("turtle",{
    init:function(){
        for(var i = 1; i <= 20; i++){
            const id = `turtle${i}`

            const posX = Math.random()*100+-50
            const posY = Math.random()*5+5
            const posZ = Math.random()*60+-40

            const pos = {x:posX, y:posY, z:posZ}
            this.createTurtles(id, position)
        }
    },
    createTurtles:function(){
        const treasureEntity = document.querySelector("#island")
        const turtleEl = document.createElement("a-entity")
        turtleEl.setAttribute("id", id);
        turtleEl.setAttribute("position", position);
        turtleEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
        turtleEl.setAttribute("gltf-model", "PRO-C153-Project-main/assets/turtle/scene.gltf")
        turtleEl.setAttribute("game-play", {
            elementId: `#${id}`,
          });
        treasureEntity.appendChild(turtleEl);

    }
})