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
        //si no es la primera carrera hay que cambiar el boton
        $("#arrancar").show();
        $("#reiniciar").hide();
        
        //primero limpiamos por si ya existian pistas
        $(".pistaCarreras").remove();
        //eliminamos tabla previa de podium
        $(".quitame").remove();
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
            nuevoCoche.id = "car" + (index + 1);
            nuevaPista.append(nuevoCoche);
            participante.append(nuevaPista);
        });
    });

    //Iniciamos carrera con el click
    $("#arrancar").click(function () {
        //mostramos el boton de reinicio y ocultamos el de arrancar
        $("#arrancar").hide();
        $("#reiniciar").show();
        //reseteamos podium por si no estaba a cero de carreras previas
        podium = [];
       
        //eliminamos tabla previa
        $(".quitame").remove();
         //funcion para mover los coches
        avanceCoches();

    });
    //boton de reinicio
    $("#reiniciar").click(function () {
        //mostramos arrancar y ocultamos reinicio
        $("#arrancar").show();
        $("#reiniciar").hide();
        //eliminamos tabla previa
        $(".quitame").remove();
        reinicioCoches();

    });
    function reinicioCoches() {
        for (let i = 1; i <= participantes_num; i++) {

            //funcion de animate para volver coches al inicio
            $("#car" + i).animate({ "left": "0px" }, 2000);

        }

    };

    function avanceCoches() {
         //Reajustamos ancho pantalla por si ha cambiado
         ancho_pantalla = $(window).width();
         //linea de meta
         lineaMeta = ancho_pantalla - 160;
        
        for (let i = 1; i <= participantes_num; i++) {
            
            //funcion de animate incluye llegameta conforme acaban la carrera
            $("#car" + i).animate({ "left": lineaMeta + "px" }, aleatorio(), llegaMeta);

        }

    }

    function aleatorio (){
        //tiempo random que cada coche tarda en recorrer el trayecto, 10 tiradas sumadas
        let tirada = 0;
        for(let i=0; i<10;i++){
            tirada+=(Math.floor(Math.random() * 10) + 1);
        }
        return tirada*50;//para hacer la carrera mas vistosa

    }
    //guarda en array los coches segun orden de llegada a meta
    function llegaMeta() {
        podium.push(this.id);
        //crear tabla podium
        if (podium.length == participantes_num) {
            //eliminamos tabla previa
            $(".quitame").remove();
            //la ocultamos para poder hacer efecto de fadeIn
            $('#tablaAqui').hide();
            //creamos tabla de podium
            var table = $('<table>').addClass('quitame');
            var thead=$("<thead>");

            thead.append($("<td>").text("COCHE"));
            thead.append($("<td>").text("POSICIÓN"));
            table.append(thead);
            for (i = 0; i <participantes_num; i++) {
                var row = $('<tr>');
                var td=($("<td>"));
                td.append('<img src="img/'+podium[i]+'.png" class="coche"/>');
                
                row.append(td);
                row.append("<td>"+(i+1)+'º'+"</td>");
                
                table.append(row);
            }

            $('#tablaAqui').append(table);
            $('#tablaAqui').fadeIn(2000);
        }
    }


});
