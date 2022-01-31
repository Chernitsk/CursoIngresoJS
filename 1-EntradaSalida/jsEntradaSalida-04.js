/* 
Tschernitschek Brian DIV E
E/S Ej4

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'*/
function CliquearAquí()
{
	//declaro la variable
	var nombreIngresado;


	//guardo la variable
	//tambien funciona con document.getElementsByTagName/ById
    nombreIngresado=prompt("Coloque su nombre aqui")


	//asigno nombre a la  caja de texto
	//tambien se puede document.getElementsByTagName/ById
    txtIdNombre.value=nombreIngresado;

   
}

