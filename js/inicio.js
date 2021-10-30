document.addEventListener('DOMContentLoaded',function(){

inicio.iniciarJuego();


},false);


var inicio = {
    iniciarJuego: function(){

        console.log("Juego iniciado");
        dimensiones.iniciar();
        inicio.recargarTiles();
        buclePrincipal.iterar();

    },
    recargarTiles: ()=>{
        document.querySelector("#juego").innerHTML= "";
        for(let y = 0; y<dimensiones.obtenerTilesVerticales();y++){
            for(let x = 0; x<dimensiones.obtenerTilesHorizontales();x++){
                var r = new Rectangulo(x * dimensiones.ladoTiles, y * dimensiones.ladoTiles,dimensiones.ladoTiles,dimensiones.ladoTiles);
            }
        }
    }

};