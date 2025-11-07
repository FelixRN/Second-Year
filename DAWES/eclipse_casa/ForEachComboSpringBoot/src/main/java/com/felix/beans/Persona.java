package com.felix.beans;

import java.io.Serializable;

public class Persona implements Serializable {
	private static final long serialVersionUID = 1L;
	private String nombre;
	private int saldoCuenta;
	public Persona() {
	super();
	}
	public Persona(String nombre, int saldoCuenta) {
	super();
	this.nombre = nombre;
	this.saldoCuenta = saldoCuenta;
	}
	public String getNombre() {
	return nombre;
	}
	public void setNombre(String nombre) {
	this.nombre = nombre;
	}
	public int getSaldoCuenta() {
	return saldoCuenta;
	}
	public void setSaldoCuenta(int saldoCuenta) {
	this.saldoCuenta = saldoCuenta;
	}

	
	public String getCategoriaSaldo() {
		if (saldoCuenta < 1000) return "BAJO";
		if (saldoCuenta < 10000) return "MEDIO";
		if (saldoCuenta < 100000) return "ALTO";
		return "MUY_ALTO";
		}
}
