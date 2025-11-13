package controllers;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import util.DBUtils;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import dao.IAlumnosDAO;
import daolmp.AlumnosDAOImpl;
import dto.AlumnoDTO;

@WebServlet("/alumnos/obtenertodosalumnos")
public class ControladorAlumnos extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static Logger logger = LoggerFactory.getLogger(ControladorAlumnos.class);

	public ControladorAlumnos() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		IAlumnosDAO alumnosDao = new AlumnosDAOImpl();
		ArrayList<AlumnoDTO> listaAlumnos =
		alumnosDao.obtenerTodosAlumnos();
		request.setAttribute("listaAlumnos", listaAlumnos);
		RequestDispatcher d =
		getServletContext().getRequestDispatcher("/WEB-INF/listadoAlumnos.jsp");
		d.forward(request, response);
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doGet(request, response);
	}

}
