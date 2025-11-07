package com.felix.foreach.beans;

import java.io.Serializable;

public class Persona implements Serializable {
	private static final long serialVersionUID = 1L;
	String nombre;
	int saldoCuenta;
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
}