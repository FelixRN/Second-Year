package daolmp;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import dao.IAlumnosDAO;
import dto.AlumnoDTO;
import util.DBUtils;

public class AlumnosDAOImpl implements IAlumnosDAO{
	private static Logger logger =
			LoggerFactory.getLogger(AlumnosDAOImpl.class);
	@Override
	public ArrayList<AlumnoDTO> obtenerTodosAlumnos() {
		Connection connection = DBUtils.conexion();
		ResultSet alumnos = null;
		ArrayList<AlumnoDTO> listaAlumnos = new ArrayList<>();
		Statement statement;
		try {
			statement = connection.createStatement();
			alumnos = statement.executeQuery("SELECT * FROM alumnos");
			while(alumnos.next()) {
				AlumnoDTO a = new AlumnoDTO(alumnos.getInt(1),
						alumnos.getString(2), alumnos.getString(3));
				logger.debug("Contenido de alumno " + a.getNombre() + " " + a.getId());
						listaAlumnos.add(a);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return listaAlumnos;
	}

}
