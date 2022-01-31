/*
Tschernitschek Brian DIV E
E/S Ej3

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//creamos/nombramos la variable
	var nombreIngresado;


	//definimos la variable
	//tambien se puede con document.getElementsByTagName/ById
    nombreIngresado=txtIdNombre.value;


    //muestra la ventana de google con el nombre ingresado
	alert("Bienvenido," + nombreIngresado + ".Espero la pases estupendo!");


}



