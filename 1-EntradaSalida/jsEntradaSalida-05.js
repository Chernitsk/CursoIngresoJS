/*
Tschernitschek Brian DIV E
E/S Ej5

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
//creo/nombro variables
var nombre
var edad


//defino variable (las dos maneras son correctas de hacerlo)
nombre=document.getElementById("txtIdNombre").value;
edad=txtIdEdad.value;


//activo ventana emergente con la respuesta a el nombre y edad pedidos
alert(nombre + " tiene " + edad + " años");


}