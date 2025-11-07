package com.felix.demo.controlador;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.felix.demo.modelo.ConsultaJugadores;
import com.felix.demo.negocio.Jugador;

@Controller
public class Controlador {
	 @Autowired
	    private ConsultaJugadores consulta;

	    private List<Jugador> jugadores;
	    
	    @GetMapping("/listaPersonas")    
	    public String mostrarFormulario(Model model) {
	        try {
	            jugadores = consulta.obtenerJugadores();
	            model.addAttribute("jugadores", jugadores);
	            
	            // Debug
	            System.out.println("Jugadores cargados: " + jugadores.size());
	            jugadores.forEach(j -> System.out.println("ID: " + j.getId() + ", Nombre: " + j.getNombre()));
	            
	            return "lista"; 
	        } catch (IOException e) {
	            e.printStackTrace();
	            model.addAttribute("error", "Error al cargar jugadores: " + e.getMessage());
	            return "error";
	        }
	    }

	    @PostMapping("/asignarRol")
	    public String asignarRol(@RequestParam("jugadorId") int jugadorId, Model model) {
	        try {
	            if (jugadores == null) {
	                jugadores = consulta.obtenerJugadores();
	            }

	            Jugador jugadorSeleccionado = jugadores.stream()
	                    .filter(j -> j.getId() == jugadorId)
	                    .findFirst()
	                    .orElse(null);

	            if (jugadorSeleccionado != null) {
	                String rol = consulta.obtenerRolAleatorio();
	                jugadorSeleccionado.setRol(rol);
	                model.addAttribute("jugadorSeleccionado", jugadorSeleccionado);
	                model.addAttribute("mensaje", obtenerMensajeRol(rol));
	            }

	            model.addAttribute("jugadores", jugadores);
	            return "lista";
	            
	        } catch (IOException e) {
	            e.printStackTrace();
	            model.addAttribute("error", "Error: " + e.getMessage());
	            return "error";
	        }
	    }

	    private String obtenerMensajeRol(String rol) {
	        switch (rol.toLowerCase()) {
	            case "lobo":
	                return "¡Cuidado! Este personaje es un lobo";
	            case "cazador":
	                return "Este personaje puede vengarse si se muere";
	            case "vidente":
	                return "Puede ver en la oscuridad";
	            case "campesino":
	                return "Este es un npc";
	            default:
	                return "";
	        }
	    }
}
