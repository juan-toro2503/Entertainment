class Item {
    constructor(nombre,año,genero,imagen) {
        this._nombre=nombre,
        this._año=año,
        this._genero=genero,
        this._imagen=imagen


    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get año(){
        return this._año
    }
    set año (año){
        this._año=año
    }
    get genero(){
        return this._genero
    }
    set genero(genero){
        this._genero=genero
    }
    get imagen(){
        return this._imagen
    }
    set imagen(imagen){
        this._imagen=imagen
    }
}


//clase pelicula
class Peliculas extends Item{
    constructor(nombre,año,genero,imagen,sipnosis,duracion){
        super(nombre,año,genero,imagen)
        this._sipnosis=sipnosis,
        this._duracion=duracion
    }
    get sipnosis(){
        return this._sipnosis
    }
    set sipnosis(sipnosis){
        this._sipnosis=sipnosis
    }
    get duracion(){
        return this._duracion
    }
    set duracion(duracion){
        this._duracion=duracion
    }
}

//clase serie
class Serie extends Item{
    constructor(nombre,año,genero,imagen,sipnosis,capitulos){
       super(nombre,año,genero,imagen)
       this._sipnosis=sipnosis,
       this._capitulos=capitulos
    }
    get sipnosis(){
        return this._sipnosis
    }
    set sipnosis(sipnosis){
        this._sipnosis=sipnosis
    }
    get capitulos(){
        return this._capitulos
    }
    set capitulos(capitulos){
        this._capitulos=capitulos
    }

}

// clase libros

class Libro extends Item{
    constructor(nombre,año,genero,imagen,autor){
        super(nombre,año,genero,imagen)
        this.autor=autor
    }
    get autor(){
        return this._autor
    }
    set autor(autor){
        this._autor=autor
    }
}

//arrays

//array peliculas










//funciones para agregar los items a los array items
//peliculas

 function agregarPeliculas(){
    let nombre=document.getElementById("nombre_pelicula")
    let año=document.getElementById("año_pelicula")
    let genero=document.getElementById("genero_pelicula")
    let imagen=document.getElementById("imagen_pelicula")
    let sipnosis=document.getElementById("sipnosis_pelicula")
    let duracion=document.getElementById("duracion_pelicula")
    const movie={nombre:nombre.value,sipnosis:sipnosis.value,duracion:duracion.value,lanzamiento:año.value,imagen:imagen.value,genero:genero.value}
    fetch('http://localhost:3003/api/v1/peliculas/savePeliculas',{
        method:"POST",
        headers:{"Content-Type": "application/json",
    },
    body: JSON.stringify(movie)
    })
    .then(res=>res.json())
    .then(()=>alert("agregada la pelicula"))
    

    

    

} 
//series 
function agregarSeries(){
    let nombre=document.getElementById("nombre_serie").value
    let año=document.getElementById("año_serie").value
    let genero=document.getElementById("genero_serie").value
    let imagen=document.getElementById("imagen_serie").value
    let sipnosis=document.getElementById("sipnosis_serie").value
    let capitulos=document.getElementById("duracion_serie").value
    

}
// libros
function agregarLibros(){
    let nombre=document.getElementById("nombre_libro").value
    let año=document.getElementById("año_libro").value
    let genero=document.getElementById("genero_libro").value
    let imagen=document.getElementById("imagen_libro").value
    let autor=document.getElementById("autor_libro").value
    
    

}

//funciones para crear los items 

//funcion crear peliculas
 const crearPelicula=()=>{
    const peliculas=[];
    fetch("http://localhost:3003/api/v1/peliculas/getPeliculas")
    .then(response => response.json())
    .then(data => {
        for(peli of data){
            peliculas.push(peli);
            
             /* for (var i in peli){
               
            }  */
            
            
            
        }
    let peliculass=` <div class="movies-title"><h1>Peliculas</h1></div>`;

    for(let pelicula of peliculas){
        let objeto=Object.values(pelicula)
                   
                    peliculass+=`<div class="container-item">
                            <img class="img-item " src="${objeto[5]}" alt="">
                            <div class="description-item ">
                                <h3>Nombre:${objeto[1]}</h3>
                                <h4>Sipnosis:${objeto[3]}</h4>
                                <h4>Año:${objeto[4]}</h4>
                                <h4>genero:${objeto[6]}</h4>
                                <h4>Duracion:${objeto[2]}</h4>
                                
                            </div>
                    </div>`
            
                    
        
                    console.log(peliculas)
    }
    document.getElementById("contenedor_peliculas").innerHTML=peliculass
    });
    
    

    
    
    
    
    
 }
 crearPelicula()
 //funcion para crear las series 
 const crearSerie=()=>{
    const series=[];
    fetch("http://localhost:3003/api/v1/series/getSeries")
    .then(response=>response.json())
    .then(data=>{
        for(let serie of data){
            series.push(serie);
        }
        let seriess=`<div class="movies-title"><h1>Series</h1></div>`;
        for(let serie of series){
            let objeto=Object.values(serie)
            seriess+=`<div class="container-item">
            <img class="img-item " src="${objeto[5]}" alt="">
            <div class="description-item ">
                <h3>Nombre:${objeto[1]} </h3>
                <h4>Sipnosis:${objeto[3]}</h4>
                <h4>Año:${objeto[4]}</h4>
                <h4>Genero:${objeto[6]}</h4>
                <h4>Capitulos:${objeto[2]}</h4>
            </div>
        </div>`
        }
        document.getElementById("contenedor_series").innerHTML=seriess;
        


    });
 }
 crearSerie()

 //funcion para crear los libros
 const crearLibro=()=>{
    const libros=[];
    fetch("http://localhost:3003/api/v1/books/getBooks")
    .then(response => response.json())
    .then(data => {
        for(let libro of data){
            libros.push(libro);
            
            /* for (var i in peli){
                console.log(peli[i])
            } */
            
            
        }
    let libross=`<div class="movies-title"><h1>Libros</h1></div>`;

    for(let libro of libros){
        let objeto=Object.values(libro)
                   
                    libross+=`
                    <div class="container-item">
                <img class="img-item " src="${objeto[5]}" alt="">
                <div class="description-item ">
                    <h3>Nombre:${objeto[1]}</h3>
                    <h4>Autor:${objeto[2]}</h4>
                    <h4>Genero:${objeto[3]}</h4>
                    <h4>Año:${objeto[4]}</h4>
                    
                </div>
            </div>`
            
                    
        
                    console.log(objeto[5])
    }
    document.getElementById("contenedor_libros").innerHTML=libross
    });

 }
 crearLibro()
 
 
