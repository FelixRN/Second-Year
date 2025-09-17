package com.holamundo;

import java.util.Scanner;


public class HolaMundo {

    public static void main(String[] args) {
        System.out.println("HolaMundo");
        
        Scanner scanner = new Scanner(System.in);
        
        
        String listaNombres[] = new String[5];
        
        listaNombres[0] = "Juan";
        listaNombres[1] = "Fran";
        listaNombres[2] = "Guti";
        listaNombres[3] = "Felix";
        listaNombres[4] = "Samuel";
        
        System.out.println("["+ listaNombres[0] + "]");
        System.out.println("["+ listaNombres[1] + "]");
        System.out.println("["+ listaNombres[2] + "]");
        System.out.println("["+ listaNombres[3] + "]");
        System.out.println("["+ listaNombres[4] + "]");
        
        
        enum Companero {
            Juan, Fran, Guti, Felix, Samuel
        }
        Companero elegido = Companero.Fran;
        System.out.println("El compañero elegido es " + elegido);
        
        
        int numAle2 = (int) (Math.random()*20+1);
         System.out.println("El número aleatorio entre 1 y 10 es: " + numAleatorio);
         
        
         int numAle3 = (int) (Math.random()* 100)+1;
         
         int j = 1;
         
         for(int i = 1; i <=20; i++){
             if(i <20){
        System.out.println("El número es: "+ i);
        i++;
        j++;
         }else{
        System.out.println("El último número es: "+ i);
        
             }              
    }       
         
    }
}
    

