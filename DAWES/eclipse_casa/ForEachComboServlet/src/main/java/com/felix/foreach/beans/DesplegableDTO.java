package com.felix.foreach.beans;

import java.io.Serializable;

public class DesplegableDTO implements Serializable{

		private Integer id;

		private String nombre;
		public DesplegableDTO(Integer id, String nombre) {
		super();
		this.id = id;
		this.nombre = nombre;
		}
		public DesplegableDTO() {
		super();
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
