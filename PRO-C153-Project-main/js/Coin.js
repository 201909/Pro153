AFRAME.registerComponent("coin",{
    init:function(){
        for(var i = 0; i <= 20; i++){
            const id = `coin${i}`

            const posX = Math.random()*0+5
            const posY = Math.random()*15+2
            const posZ = Math.random()*-40+1

            const pos = {x:posX, y:posY, z:posZ}
            this.createCoins(id, position)
        }
    },
    createCoins:function(){
        const treasureEntity = document.querySelector("#island")
        const coinEl = document.createElement("a-entity")
        coinEl.setAttribute("id", id);
        coinEl.setAttribute("position", position);
        //coinEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
        coinEl.setAttribute("geometry", {primitive:"circle", radius:1})
        coinEl.setAttribute("animation",{
            property:"rotation",
            to:"0 360 0",
            loop:"true",
            dur:1000
        })
       // coinEl.setAttribute("game-play", {
         //   elementId: `#${id}`
          //});
        treasureEntity.appendChild(coinEl);

    }
})