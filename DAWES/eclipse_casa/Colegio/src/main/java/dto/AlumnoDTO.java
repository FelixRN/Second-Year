package dto;

public class AlumnoDTO {

	private int id;
	private String nombre;
	private String apellido;
	private String municipio;
	public AlumnoDTO(int id, String nombre, String apellido, String municipio) {
		super();
		this.id = id;
		this.nombre = nombre;

		this.apellido = apellido;
		this.municipio = municipio;
	}
	public AlumnoDTO(int id, String nombre, String apellido) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;

	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public String getMunicipio() {
		return municipio;
	}
	public void setMunicipio(String municipio) {
		this.municipio = municipio;
	}
}
