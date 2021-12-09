var botonConvertir = document.getElementById("botonConvertir");

var botonBorrar = document.getElementById("botonBorrar");


function convertirUnidad(medida,unidad1,unidad2){

    var medida = parseFloat(document.getElementById("medida").value);

    var unidad1 = document.getElementById("unidad1").value;

    var unidad2 = document.getElementById("unidad2").value;

    if (!(unidad1==unidad2 || unidad1=="Seleccione una unidad" || unidad2=="Seleccione una unidad")){

    switch (unidad1){

        case "celsius":

            if (unidad2=="fahrenheit"){

                resultado=(1.8*medida+32).toFixed(2)+" ºF";

            } else resultado = (medida +273.15).toFixed(2)+" K";

            break;

        case "fahrenheit":

            if (unidad2=="celsius"){

                resultado= ((medida-32)*5/9).toFixed(2)+" ºC";

            } else resultado = ((medida-32)*5/9+273.15).toFixed(2) + " K";

            break;

        case "kelvin":

            if (unidad2=="celsius"){

                resultado= (medida-273.15).toFixed(2)+" ºC";

            } else resultado = ((medida-273.15)*5/9+32).toFixed(2) + " ºF";
        
    } 
    } else resultado = "Algo ha salido mal, por favor revise sus entradas";

    if (resultado.includes("NaN")){
        resultado = "¡Algo salio mal. Por favor revise los datos ingresados";
    }

    return resultado;

};

function mostrarResultado(){

    var resultado = convertirUnidad(medida,unidad1,unidad2);

    document.querySelector("h4").textContent= resultado;
}



botonConvertir.onclick = () => {

    var resultado = convertirUnidad(medida,unidad1,unidad2);

    document.querySelector("h4").textContent= resultado;
};

botonBorrar.onclick = () => {

    document.querySelector("h4").textContent= "";
};
