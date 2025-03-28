const fs=require('fs'); //modulo del node para trabajar con archivos

const dbfile="database.json"; //nombre del archivo de json que vamos a tener
if (!fs.existsSync(dbfile)){ //si no existe este file, vamos a crear otro
    fs.writeFileSync(dbfile,JSON.stringify({movies:[]},null,2),"utf8") //verificar si el archov json existe y si no, crearlo con una base
} 

function leerBaseDeDatos() {
    const data=fs.readFileSync(dbfile,"utf8");
    return JSON.parse(data) //lee el codigo y lo va a mandar a data y lo va a transformar con el JSON parse
}

function guardarBaseDeDatos(data) {
    fs.writeFileSync(dbfile, JSON.stringify(data, null,2),"utf8") //convierte en texto formateado JSON y guarda el texto en el archivo
}

function agregarPelicula(nombrePeli, año, genero, director, duracion, actoresPrincipales) {
    const db=leerBaseDeDatos(); //aqui leemos la base de datos y nos trae la lista de peliculas
    const nuevaPelicula={id:db.movies.length+1,nombrePeli, año, genero, director, duracion, actoresPrincipales}; //asigna un id unico a cada peli
    db.movies.push(nuevaPelicula); //con esta agregamos nueva Peli
    guardarBaseDeDatos(db); //guardamos cambios realizados
    console.log("pelicula agregada", nuevaPelicula);
}

function listaDePeliculas() {
    const db=leerBaseDeDatos();
    console.log("Peliculas registradas", db.movies); //imprime lista de peliculas
}

agregarPelicula("Nemo",2003,"infantil","Andrew Staton", "1h40m","Nemo, Dori y Marlin");
agregarPelicula("Titanic", 1998, "drama", "2h", "Steven Spilver", "Leo y Kate");
agregarPelicula("Eterno resplandor de una mente sin recuerdos",2004, "drama romántico", "Michel Gondry", "1h48m","Jim Carrey y Kate Winslet");
agregarPelicula("Scooby doo", 2002, "Misterio", "Raja Gosnell", "1h30m", "Scooby, Dafne, Fred, Vilma, Shaggy");
agregarPelicula("Mulan", "1998", "Animación/Aventura", "Tony Bancroft, Barry Cook", "88m", "Ming-Na Wen, Eddie Murphy, BD Wong, Miguel Ferrer");
agregarPelicula("Monsters, Inc.", 2001, "Comedia/Infantil", "Pete Docter", "1h 32m", "Mike Wazoski, James P. Sullivan, Boo");
agregarPelicula("Shrek", "2001", "Comedia", "Andrew Adamson, Vicky Jenson", "90m", "Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow");
agregarPelicula("Sweeney todd",2007,"Musical terror","Tim Burton","1h56m","Johnny Depp y Helena Bonham");
agregarPelicula("Lilo y Stich", 2002, "Infantil/Comedia", "Chris Sanders", "1h 25m", "Stitch, Lilo, Nani",);
agregarPelicula("Cómo entrenar a tu dragón", 2010, "Comedia/Infantil", "Chris Sanders", "1h 37m", "Jay Baruchel, Gerard Butler, America Ferrera");
agregarPelicula("Los Increíbles", 2004, "Animación/Acción", "Brad Bird", "1h 55m", "Craig T. Nelson, Holly Hunter, Samuel L. Jackson, Jason Lee");

function eliminarPelicula(id) {
    const db=leerBaseDeDatos();
    db.movies=db.movies.filter(u=>u.id!==id);
    guardarBaseDeDatos(db);
    console.log("Pelicula eliminada");
}


//Este es para crear el listado de usuarios
const fsU=require('fs'); //modulo del node para trabajar con archivos

const dbfileusuario="databaseusuario.json"; //nombre del archivo de json que vamos a tener
if (!fsU.existsSync(dbfileusuario)){ //si no existe este file, vamos a crear otro
    fsU.writeFileSync(dbfileusuario,JSON.stringify({usuarios:[]},null,2),"utf8") //verificar si el archov json existe y si no, crearlo con una base
} 

function leerBaseDeDatosU() {
    const data=fsU.readFileSync(dbfileusuario,"utf8");
    return JSON.parse(data) //lee el codigo y lo va a mandar a data y lo va a transformar con el JSON parse
}

function guardarBaseDeDatosU(data) {
    fsU.writeFileSync(dbfileusuario, JSON.stringify(data, null,2),"utf8") //convierte en texto formateado JSON y guarda el texto en el archivo
}

function agregarUsuariosU(nombre, email, teléfono, edad) {
    const dbU=leerBaseDeDatosU(); //aqui leemos la base de datos y nos trae la lista de peliculas
    const nuevoUsuario={idU:dbU.length+1, nombre, email, teléfono, edad}; //asigna un id unico a cada peli
    dbU.usuarios.push(nuevoUsuario); //con esta agregamos nueva Peli
    guardarBaseDeDatosU(dbU); //guardamos cambios realizados
    console.log("usuario agregado", nuevoUsuario);
}

function listaDeNombres() {
    const dbU=leerBaseDeDatosU();
    console.log("Usuarios registrados", dbU.usuarios); //imprime lista de peliculas
}

agregarUsuariosU("Estefanía Leon Rabadan", "estefania.leon.rabadan@gmail.com", "7331023634", 23);
agregarUsuariosU("Montserrat Pineda Díaz", "montse.pidi@gmail.com", "5573307483", 24);
agregarUsuariosU("Ana Karen Godínez Pacheco","anakaren.godinezp@gmail.com", "5564956461",29);
agregarUsuariosU("Daniela Contreras Flores", "danycf98@gmail.com", "2221658218", 26);
agregarUsuariosU("Ana Paola Elizondo Salas", "anaelizondo796@gmail.com", "5572103160", 28);
