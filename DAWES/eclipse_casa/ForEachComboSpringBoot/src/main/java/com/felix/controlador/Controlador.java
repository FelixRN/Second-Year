package com.felix.controlador;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.felix.beans.Desplegable;
import com.felix.beans.Persona;

@Controller
public class Controlador {
	@GetMapping("/listaPersonas")
	public String mostrarPersonas(Model model) {
	ArrayList<Persona> listaPersonas = new ArrayList<>();
	Persona p1 = new Persona("Paco", 2000);
	Persona p2 = new Persona("Luis", 100000);
	Persona p3 = new Persona("Pedro", 100);
	Persona p4 = new Persona("Alberto", -2989);
	listaPersonas.add(p1);
	listaPersonas.add(p2);
	listaPersonas.add(p3);
	listaPersonas.add(p4);
	model.addAttribute("listaPersonas", listaPersonas);
	ArrayList<Desplegable> opcionesDesplegable = new ArrayList<>();
	Desplegable d1 = new Desplegable(1, "Salamanca");
	Desplegable d2 = new Desplegable(2, "Zamora");
	Desplegable d3 = new Desplegable(3, "Leon");
	opcionesDesplegable.add(d1);
	opcionesDesplegable.add(d2);
	opcionesDesplegable.add(d3);
	model.addAttribute("opcionesDesplegable", opcionesDesplegable);
	return "lista";
	}

}
