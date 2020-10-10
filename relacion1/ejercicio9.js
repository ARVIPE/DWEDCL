var numerom = Math.random()*(100-0) + 0; 
numerom = parseInt(numerom);
var contador = 0;

while(true){ 
      var usuario = prompt("COLOCA UN NUMERO PARA ADIVINAR EL NUMERO MAGICO"); 

if(usuario == numerom){ 
  alert("HAS GANADO");
  alert("Has necesitado " + contador + " intentos");
  break;
}
else if(usuario < numerom){

  alert("EL NUMERO ES MENOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO" );
  contador++;
}
else if(usuario > numerom){

  alert("EL NUMERO ES MAYOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO");
  contador++;
}
if(contador == 10){
    alert("Has perdido :(");
    break;
}

} 
