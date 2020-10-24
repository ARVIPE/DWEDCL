var numRepeticiones=(cadena, texto)=>{
    // pos será la posición a partir de la cual voy a buscar el texto en la cadena
    let pos = 0;
    let contarRepeticiones = 0;
    while(pos!= -1){
        pos = cadena.indexOf(texto, pos);
        if(pos != -1){
            contarRepeticiones++;
            pos++;
        }
    }
    return contarRepeticiones;

}

console.log(numRepeticiones("Miguel", "l"));