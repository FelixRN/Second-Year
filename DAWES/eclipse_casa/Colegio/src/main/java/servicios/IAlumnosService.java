package servicios;

import java.sql.SQLException;
import java.util.ArrayList;

import dto.AlumnoDTO;

public interface IAlumnosService {
	public ArrayList<AlumnoDTO> obtenerAlumnos() throws SQLException;
}
