package com.felix.demo.negocio;

import java.io.Serializable;

public class Jugador implements Serializable{

	private static final long serialVersionUID = 1L;

	private int id;
	private String nombre;
	private String rol;   

	public Jugador() {}

	public Jugador(int id, String nombre) {
		this.id = id;
		this.nombre = nombre;
	}

	// Getters y Setters
	public int getId() { return id; }
	public void setId(int id) { this.id = id; }

	public String getNombre() { return nombre; }
	public void setNombre(String nombre) { this.nombre = nombre; }

	public String getRol() { return rol; }
	public void setRol(String rol) { this.rol = rol; }

}
