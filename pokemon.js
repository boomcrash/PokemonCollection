var div=document.getElementById("contenedorPokemon");
var pokedex=document.getElementById("btnpokedex");
pokedex.addEventListener("click",misPokemones);

var namePoke=document.getElementById("nombre");
var li=document.getElementById("tipo");
li.style.display="none";
var li2=document.getElementById("ataque");
li2.style.display="none";
var li3=document.getElementById("velocidad");
li3.style.display="none";
var li4=document.getElementById("afinidad");
li4.style.display="none";


class Pokemon{
        constructor(nombre,tipo,foto){
            this.foto=new Image();
            this.foto2=new Image();
            this.nombre=nombre;
            this.tipo=tipo;
            this.ataque=Math.floor(Math.random()*(90-30+1))+30;
            this.velocidad=Math.floor(Math.random()*(90-30+1))+30;
            this.afinidad=Math.floor(Math.random()*(90-30+1))+30;
            this.foto.src=foto;
            this.foto2.src=foto;
        }
        getFoto(){
            return this.foto;
        }
        getNombre(){
            return this.nombre;
        }
        cambiarAtributos(){
            this.ataque=Math.floor(Math.random()*(90-30+1))+30;
            this.velocidad=Math.floor(Math.random()*(90-30+1))+30;
            this.afinidad=Math.floor(Math.random()*(90-30+1))+30;
        }
        mostrar(){
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
            var namePoke=document.getElementById("capturado");
            namePoke.innerText="¡¡ CAPTURADO !!";
            var namePoke=document.getElementById("nombre");
            var li=document.getElementById("tipo");
            li.style.display="";
            var li2=document.getElementById("ataque");
            li2.style.display="";
            var li3=document.getElementById("velocidad");
            li3.style.display="";
            var li4=document.getElementById("afinidad");
            li4.style.display="";

            namePoke.innerText=this.nombre;
            
            div.appendChild(this.foto);
            
            li.innerText= "TIPO:      "+this.tipo;
            li2.innerText="ATAQUE:    "+this.ataque;
            li3.innerText="VELOCIDAD: "+this.velocidad;
            li4.innerText="SALUD:  "+this.afinidad;

            //document.body.appendChild(this.foto);
        }

        mostrarMisPokes(){
            this.foto.style="width:100px;height:100px;position:relative;   display: block; margin: 0 auto; background:#FF0000;";
            document.write("<center> <br /><strong>" + this.nombre + "</strong><br /> <br /><strong> Velocidad: " + this.velocidad + "</strong><br /> <br /><strong> Ataque:"+ this.ataque +"</strong><br /> <br /><strong> Salud:"+ this.ataque +"</strong><br /> </center>");
            document.body.appendChild(this.foto);
            document.write("<hr/>");
        }
}

var pokemon = [ 
 {pokemon: new Pokemon("Bulbasaur","PLANTA","img/Bulbasaur.png")}
,{pokemon: new Pokemon("Charmander","FUEGO","img/Charmander.png")}
,{pokemon: new Pokemon("Squirtle","AGUA","img/Squirtle.png")}
,{pokemon: new Pokemon("Caterpie","BICHO","img/Caterpie.png")}
,{pokemon: new Pokemon("Weedle","BICHO","img/Weedle.png")}
,{pokemon: new Pokemon("Pidgey","NORMAL","img/Pidgey.png")}
,{pokemon: new Pokemon("Rattata","NORMAL","img/Rattata.png")}
,{pokemon: new Pokemon("Spearow","NORMAL","img/Spearow.png")}
,{pokemon: new Pokemon("Ekans","VENENO","img/Ekans.png")}
,{pokemon: new Pokemon("Pikachu","ELECTRICO","img/Pikachu.png")}
,{pokemon: new Pokemon("Sandshrew","TIERRA","img/Sandshrew.png")}
,{pokemon: new Pokemon("Nidoran","VENENO","img/Nidoran.png")}
,{pokemon: new Pokemon("Clefairy","HADA","img/Clefairy.png")}
,{pokemon: new Pokemon("Vulpix","FUEGO","img/Vulpix.png")}
,{pokemon: new Pokemon("Jigglypuff","HADA","img/Jigglypuff.png")}
,{pokemon: new Pokemon("Zubat","VENENO","img/Zubat.png")}
,{pokemon: new Pokemon("Oddish","PLANTA","img/Oddish.png")}
,{pokemon: new Pokemon("Paras","BICHO","img/Paras.png")}
,{pokemon: new Pokemon("Diglett","TIERRA","img/Diglett.png")}
,{pokemon: new Pokemon("Meowth","NORMAL","img/Meowth.png")}
,{pokemon: new Pokemon("Psyduck","AGUA","img/Psyduck.png")}
];

//pokemon[19].pokemon.mostrar();

var boton=document.getElementById("pokeBoton");
boton.addEventListener("click",generarPoke);

var pokemones=[];

function generarPoke(){
    var carta=document.getElementById("carta");
    carta.style.display="";
    var numero=Math.floor(Math.random()*(19-0+1))+0;
    pokemon[numero].pokemon.cambiarAtributos();
    var nuevoPokemon=new Pokemon(pokemon[numero].pokemon.nombre,pokemon[numero].pokemon.tipo,pokemon[numero].pokemon.foto.src.toString());
    pokemones.push(nuevoPokemon);
    pokemon[numero].pokemon.mostrar();
}

function misPokemones(){
    location.href="atrapados.html";
    document.write("<center><h5 style='font-size: 80px; margin-bottom: 10px; '>¡MIS POKEMONES!</h5></center>");
    for(var paki of pokemones){
            paki.mostrarMisPokes();
    }
}
