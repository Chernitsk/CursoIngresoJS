/*
Tschernitschek Brian DIV E
E/S Ej7

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//creo/nomro variables
	var num1;
	var num2;
    var resultado;

    //defino variables
    num1=txtIdNumeroUno.value;
    num2=txtIdNumeroDos.value;

    //hago que los numeros no se concatenen
    num1=parseInt(num1);
    num2=parseInt(num2);

    //indico que el resultado es igual a num1 + num2
    resultado= num1 + num2;


    //ventana emergente donde dice el resultado de la cuenta hecha
    alert("El resultado es:" + resultado);


}

function restar()
{
	var num1
	var num2
	var resultado

	num1=txtIdNumeroUno.value;
	num2=txtIdNumeroDos.value;

	num1=parseInt(num1)
    num2=parseInt(num2)	

    resultado= num1 - num2;

    alert("El resultado es:" + resultado);
}

function multiplicar()
{ 
	var num1
	var num2
	var resultado

	num1=txtIdNumeroUno.value;	
	num2=txtIdNumeroDos.value;

	num1=parseInt(num1)
    num2=parseInt(num2)	

    resultado= num1 * num2;

    alert("El resultado es:" + resultado);
}


function dividir()
{
	var num1
	var num2
	var resultado
     
    num1=txtIdNumeroUno.value;
    num2=txtIdNumeroDos.value;

    num1=parseInt(num1)
    num2=parseInt(num2)	

    resultado= num1 / num2;

    alert("El resultado es:" + resultado);
}


