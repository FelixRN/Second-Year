package controller;

import java.io.IOException;
import java.util.List;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import modelo.ConsultaJugadores;
import modelo.ConsultaRoles;
import negocio.JugadorDTO;

/**
 * Servlet implementation class Controlador
 */
@WebServlet({"", "/Controlador"})
public class Controlador extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Controlador() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        ConsultaJugadores consulta = new ConsultaJugadores();
        List<JugadorDTO> lista = consulta.obtenerJugadores();
        

        request.setAttribute("listaJugadores", lista);

        RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/index.jsp");
        dispatcher.forward(request, response);
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 String nombreJugador = request.getParameter("jugador");

	        if (nombreJugador != null && !nombreJugador.isEmpty()) {
	            ConsultaRoles consultaRoles = new ConsultaRoles();
	            String rol = consultaRoles.obtenerRolAleatorio();

	            String mensaje;
	            String color;

	            switch (rol) {
	                case "Lobo":
	                    mensaje = "!Cuidado¡ Este personaje es un lobo";
	                    color = "red";
	                    break;
	                case "Cazador":
	                    mensaje = "Este personaje puede vengarse si se muere";
	                    color = "green";
	                    break;
	                case "Vidente":
	                    mensaje = "Puede ver en la oscuridad";
	                    color = "green";
	                    break;
	                case "Campesino":
	                default:
	                    mensaje = "Este es un npc";
	                    color = "green";
	                    break;
	            }

	            request.setAttribute("jugadorSeleccionado", nombreJugador);
	            request.setAttribute("rolAsignado", rol);
	            request.setAttribute("mensaje", mensaje);
	            request.setAttribute("color", color);
	        }

	        doGet(request, response);
	    }

}
