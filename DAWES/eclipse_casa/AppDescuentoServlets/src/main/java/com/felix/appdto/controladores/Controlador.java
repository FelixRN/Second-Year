package com.felix.appdto.controladores;

import java.io.IOException;

import com.felix.appdto.negocio.Descuento;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Controlador
 */
@WebServlet("/Controlador")
public class Controlador extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Controlador() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse
			response) throws ServletException, IOException {
			
			String nombre = request.getParameter("nombre");
			
			Descuento d = new Descuento();
			
			int descuento = d.calculaDescuento(nombre);
			
			request.setAttribute("descuento", descuento);
			request.setAttribute("nombre", nombre);
			
			RequestDispatcher dispatcher =
			getServletContext().getRequestDispatcher("/WEB-INF/descuento.jsp");
			dispatcher.forward(request, response);
			}

}
