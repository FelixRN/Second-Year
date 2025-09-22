
package ex14;
public class EmpleadoHoras extends Empleado {
    
    private int horas;

    public EmpleadoHoras(int horas, String nombre, int numeroEmpleado, double sueldo) {
        super(nombre, numeroEmpleado, sueldo);
        this.horas = horas;
    }
    
    
}
