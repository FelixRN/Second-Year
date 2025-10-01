package hora;

import java.text.SimpleDateFormat;
import java.util.Calendar;


public class FechaHora {

	public FechaHora() {
		
	}
	
	public String getFecha() {
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat fecha = new SimpleDateFormat("dd/MM/YYYY");
		return fecha.format(calendar.getTime());
	}
	
	public String getHora() {
		
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat hora = new SimpleDateFormat("hh:mm:ss a");
		return hora.format(calendar.getTime());
		
	}
	
}
