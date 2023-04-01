$(document).ready(function () {
    //cargamos Array con coches segun numero de participantes

    $("#cars").change(function () {
        //primero limpiamos por si ya existian pistas
        $(".pistaCarreras").remove();
        //Obtenemos numero de participantes
        let participantes_num = $("#cars").val();
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

    $("#arrancar").click(function () {
        //ancho de la pantalla
        var ancho_pantalla = $(window).width();

        //ancho del coche
        var ancho_coche = $(".coche1").width();
        //longitud a recorrer restamos tb el ancho de la meta
        var lineaMeta = ancho_pantalla - ancho_coche-10;
        
        //definimos numero de participantes y array para podium
        let participantes_num = $("#cars").val();
        
        let podium = [];
        podium.length
        //avance de cada coche
       // while (podium.length < participantes_num) {
            for (let i = 1; i <= participantes_num; i++) {
                if (($(".coche"+i).position().left) >= lineaMeta) { continue }
                let tirada = Math.floor(Math.random() * 10);
                //let marcha = parseInt(tirada) + parseInt($(".coche" + i).css("left"));
                $(".coche" + i).animate({ "left":"+="+tirada+"px"}, 3);
                if (parseInt($(".coche" + i).css("left")) >= lineaMeta) { podium.push("car" + i) };
            }
        //};
    });
});
