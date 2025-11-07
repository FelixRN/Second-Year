package com.felix.appdto.negocio;

import java.io.IOException;

import com.felix.appdto.modelo.ConsultaDatos;

public class Descuento {

	public int calculaDescuento(String nombre) throws IOException {
		//Consultar datos
		ConsultaDatos consultaDatos = new ConsultaDatos();
		if(consultaDatos.consultaEdad(nombre) < 20) {
			return 5;
		}else {
			return 10;
		}
	}

}
