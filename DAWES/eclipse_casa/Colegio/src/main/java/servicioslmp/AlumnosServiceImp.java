package servicioslmp;

import java.sql.SQLException;
import java.util.ArrayList;

import dao.IAlumnosDAO;
import daolmp.AlumnosDAOImpl;
import dto.AlumnoDTO;
import servicios.IAlumnosService;

public class AlumnosServiceImp implements IAlumnosService{
	@Override
	public ArrayList<AlumnoDTO> obtenerAlumnos() throws SQLException {
	IAlumnosDAO alumnos = new AlumnosDAOImpl();
	return alumnos.obtenerTodosAlumnos();
	}
}
