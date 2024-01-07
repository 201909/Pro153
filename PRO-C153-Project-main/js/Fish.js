/*AFRAME.registerComponent("fish",{
    init:function(){
        for(var i = 1; i <= 20; i++){
            const id = `fish${i}`

            const posX = Math.random()*100+-50
            const posY = Math.random()*5+5
            const posZ = Math.random()*60+-40

            const pos = {x:posX, y:posY, z:posZ}
            this.createfishs(id, position)
        }
    },
    createfishs:function(){
        const obstacleEntity = document.querySelector("#island")
        const fishEl = document.createElement("a-entity")
        fishEl.setAttribute("id", id);
        fishEl.setAttribute("position", position);
        fishEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
        fishEl.setAttribute("gltf-model", "PRO-C153-Project-main/assets/fish/scene.gltf")
        fishEl.setAttribute("game-play", {
            elementId: `#${id}`,
          });
        obstacleEntity.appendChild(fishEl);

    }
})*/