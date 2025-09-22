
package ex14;

public class Empleado {
    
    private String nombre;
    private int numeroEmpleado;
    private double sueldo;

    public Empleado(String nombre, int numeroEmpleado, double sueldo) {
        this.nombre = nombre;
        this.numeroEmpleado = numeroEmpleado;
        this.sueldo = sueldo;
    }
    
    public double calcularSalario(){
        return sueldo; 
    }

    public String getNombre() {
        return nombre;
    }

    public int getNumeroEmpleado() {
        return numeroEmpleado;
    }

    public double getSueldo() {
        return sueldo;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setNumeroEmpleado(int numeroEmpleado) {
        this.numeroEmpleado = numeroEmpleado;
    }

    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }
    
    
}
