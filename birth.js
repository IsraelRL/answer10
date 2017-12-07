function birth(n)
{ var fecha_hoy = new Date();
	//obtenemos el año actual
	var ahora_year = fecha_hoy.getYear() + 1900;
	//realizamos la resta para obtener la edad
	var edad = ahora_year - n;
	//comparamos si es numero 
	if (!isNaN(edad)) {
		//comparamos que no sea un numero negativo
		if (Math.sign(edad)!=-1) {
			//comparamos que sea una edad valida humanamente posible
			if (edad<=110) {
				return(edad);
			}else return(alert("Fecha Incorrecta, edades fuera de rango de la vida humana"));
		}else return(alert("Fecha Incorrecta. el valor ingresado es negativo"));
	}else return(alert("Fecha Incorrecta, el valor ingresado no es un numero"));
	
}
birth('1991');