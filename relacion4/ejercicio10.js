class Pelicula {
    //destructuracion de los campos del objeto película
    constructor(id, titulo, director, estreno, pais, genero, clasificacion) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.genero = genero;
        this.clasificacion = clasificacion;
        //Ejecutamos el metodo validarid()
        this.validarid(id);
        this.validartitulo(titulo);
        this.validarestreno(estreno);
        this.validarpaises(pais);
        this.validargeneros(genero);

    }

    //metodo para validar ID 
    validarid(id) {
        if (/^([a-z]){2}([0-9]{7})$/.test(id)) {
            document.writeln("id validado correctamente");

        } else {
            document.writeln("id no valido");
        }
    }

    //metodo para validar titulo
    validartitulo(titulo) {
        if (/^([a-z]){1,100}$/i.test(titulo)) {
            document.writeln("titulo valido");
        } else {
            document.writeln("titulo no valido");
        }
    }

    //metodo para validar estreno
    validarestreno(estreno){
        if(/^([0-9]){4}$/.test(estreno)){
            document.writeln("el año de estreno es valido");
        }else{
            document.writeln("el año de estreno no es valido");
        }
    }

    //metodo para validar pais o paises
    validarpaises(pais){
        var pais = ['España', 'Francia', 'Alemania', 'Portugal', 'Italia'];
        
        let escogido = 'Francia';       

        if(pais.includes(escogido)){
            document.writeln("el país es válido");
        }
    }

    //metodo para validar generos
    validargeneros(genero){
        var genero = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];

        var introducido = 'Action';

        if(genero.includes(introducido)){
            document.writeln("el género es válido");
        }
        

    }



}


const Pelicula1 = new Pelicula("ab3567863", "JurassicWorld", "J.Bayona", "2018", 'Action', "Ficcion", "+12");









