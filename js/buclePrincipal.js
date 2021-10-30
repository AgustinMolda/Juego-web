var buclePrincipal = {
    idEjecucion: null,
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,
    iterar: function(registroTemporal){
        this.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);
        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.dibujar();
        if(registroTemporal - buclePrincipal.ultimoRegistro > 999){
            buclePrincipal.ultimoRegistro = registroTemporal;
                console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
                buclePrincipal.aps = 0;
                buclePrincipal.fps = 0;
                
        }
    },
    detener: function(){

    },

    actualizar: function(registroTemporal){
        this.aps++;
    },
    dibujar: function(registroTemporal){
        this.fps++;

    }
};