
package ex14;


public class Gerente extends Empleado {
    
    private double comision;    

    public Gerente(String nombre, int numeroEmpleado, double sueldo, double comision ) {
        super(nombre, numeroEmpleado, sueldo);
        this.comision = comision;
    }
    
}
