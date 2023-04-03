$(document).ready(function () {
    let participantes_num = $("#cars").val();
    let podium = [];
    var ancho_pantalla = $(window).width();
    var lineaMeta = ancho_pantalla - 160;


    //cargamos Array con coches segun numero de participantes

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
            nuevoCoche.className = "coche" + (index + 1) + " coche";
            nuevaPista.append(nuevoCoche);
            participante.append(nuevaPista);
        });
    });

    //ahora vamos con la animacion de los coches


    $("#arrancar").click(function prueba() {
        //ancho de la pantalla



        //longitud a recorrer 


        //definimos numero de participantes y array para podium




        //avance de cada coche
        podium=[];
        avanceCoches();




    });
    function avanceCoches() {
        for (let i = 1; i <= participantes_num; i++) {

            let tirada = Math.floor(Math.random() * 10) + 1;
            let tiempo = tirada * 75;
            $(".coche" + i).animate({ "left": lineaMeta+"px" }, tiempo, llegaMeta(i));


        }

    }

    function llegaMeta(i) {
        podium.push("car" + i + ".png");
        if (podium.length==participantes_num){
            $("#prueba").html(podium);
        }
    }


});
