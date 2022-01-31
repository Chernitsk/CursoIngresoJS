/*
Tschernitschek Brian DIV E
E/S Ej6

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
 //creo/nombro las variables
 var num1;
 var num2;
 var resultado;


//defino las variables por Id
 num1=txtIdNumeroUno.value;
 num2=txtIdNumeroDos.value;


 //cambia la variable a numero
 num1=parseInt(num1);
 num2=parseInt(num2);


//doy a entender que el resultado es las suma/resta de las variables creadas
resultado= num1 + num2;


//muestro el resultado de la cuenta realizada
alert("El resultado es=" + resultado);




}

