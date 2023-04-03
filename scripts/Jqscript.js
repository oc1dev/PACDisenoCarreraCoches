$(document).ready(function () {
    
    //definimos variables globales
    
    let participantes_num = $("#cars").val();
    //podium para los que van llegando
    let podium = [];
    //ancho pantalla
    var ancho_pantalla = $(window).width();
    //linea de meta
    var lineaMeta = ancho_pantalla - 160;


    //cargamos Array con coches segun numero de participantes con sus url

    $("#cars").change(function () {
        //primero limpiamos por si ya existian pistas
        $(".pistaCarreras").remove();
        //Obtenemos numero de participantes
        participantes_num = $("#cars").val();
        //declaramos array a rellenar segun ejercicio
        let array_coches = [];
        //rellenamos array
        for (let x = 0; x < participantes_num; x++) {
            let url_coches = "img/car" + (x + 1) + ".png";
            array_coches[x] = url_coches;
        }

        //recorremos el array creando coche y carretera para cada uno en <divs>

        array_coches.forEach(function (url, index) {
            let nuevaPista = document.createElement("div");
            let nuevoCoche = document.createElement("img");
            nuevaPista.className = "pistaCarreras";
            nuevoCoche.src = url;
            nuevoCoche.className = "coche";
            nuevoCoche.id="car" + (index + 1);
            nuevaPista.append(nuevoCoche);
            participante.append(nuevaPista);
        });
    });

    //Iniciamos carrera con el click
    $("#arrancar").click(function prueba() {
        
        //reseteamos podium por si no estaba a cero de anterior carrera
        podium=[];
        //funcion para mover los coches
        avanceCoches();

    });
    function avanceCoches() {
        for (let i = 1; i <= participantes_num; i++) {
            //tiempo random que cada coche tarda en recorrer el trayecto
            let tirada = Math.floor(Math.random() * 10) + 1;
            //modificador para ajustar la velocidad
            let tiempo = tirada * 75;
            //funcion de animate incluye llegameta conforme acaban la carrera
            $("#car" + i).animate({ "left": lineaMeta+"px" }, tiempo, llegaMeta);

        }

    }
    //guarda en array los coches segun orden de llegada a meta
    function llegaMeta() {
        podium.push(this.id);
        if (podium.length==participantes_num){
            $("#prueba").html(podium);
        }
    }


});
