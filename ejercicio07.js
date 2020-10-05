function parImpar(numero) {
  if(numero % 2 == 0) {
    document.write("par\n");
    if(numero > 10){
        document.write("El número es mayor de 10"); 
    }else{
        document.write("El número no es mayor de 10");
    }
  }
  else {
    document.write("impar\n");
    if(numero > 10){
        document.write("El número es mayor de 10"); 
    }else{
        document.write("El número no es mayor de 10");
    }
  }
  
}
