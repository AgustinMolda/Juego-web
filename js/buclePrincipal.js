var buclePrincipal = {
    idEjecucion: null,
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,
    iterar: function(registroTemporal){
        this.idEjecucion = window.requestAnimationFrame(this.iterar);
    },
    detener: function(){

    },

    actualizar: function(registroTemporal){

    },
    dibujar: function(registroTemporal){


    }
};