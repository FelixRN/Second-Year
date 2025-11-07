package com.felix.beans;

import java.io.Serializable;

public class Desplegable implements Serializable{
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String nombre;
	public Desplegable() {
	super();
	}
	public Desplegable(Integer id, String nombre) {
	super();
	this.id = id;
	this.nombre = nombre;
	}
	public Integer getId() {
	return id;
	}
	public void setId(Integer id) {
	this.id = id;
	}
	public String getNombre() {
	return nombre;
	}
	public void setNombre(String nombre) {
	this.nombre = nombre;
	}
}
