function escribirTablaMultiplicar(numero){

	document.write("<h2>Tabla de multiplicar del "+ numero +"</h2>");

	document.write("<ul>");
	//i++ significa i=i+1;

	for(i = 1;i<=10;i++){
		document.write("<li>");
		document.write(numero + "x " + i + "= " + numero * i);
		document.write("</li>");
	}

	document.write("</ul>");
}
