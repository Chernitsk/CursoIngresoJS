/*
Tschernitschek Brian DIV E
E/S Ej2

Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()

{   

	//creo/nombro variable
	var nombreIngresado;


    //defino variable
    //prompt da una ventana emergente para "Ingresar su Nombre
	nombreIngresado = prompt("Ingrese su Nombre");


    //muestra cuadro emergente de "Bienvenido Brian(var nombreIngresado)
    //alert("texto antes del nombreIngresado ")Siempre un espacio despues de la ultima palabra antes de cerrar comillas
    //con el simbolos + se hacen los concatenados
    alert("Bienvenido, " + nombreIngresado + " .¿Como estas?");
}

