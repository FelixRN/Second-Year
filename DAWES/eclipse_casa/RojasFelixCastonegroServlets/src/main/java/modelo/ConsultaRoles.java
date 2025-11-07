package modelo;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class ConsultaRoles {
	public List<String> obtenerRoles() throws IOException {
        List<String> roles = new ArrayList<>();
        
        InputStream input = Thread.currentThread().getContextClassLoader().getResourceAsStream("roles.txt");
        if (input == null) {
            throw new FileNotFoundException("No se encontró roles.txt en resources");
        }

        try (BufferedReader br = new BufferedReader(new InputStreamReader(input, StandardCharsets.UTF_8))) {
            String linea;
            while ((linea = br.readLine()) != null) {
                roles.add(linea.trim());
            }
        }

        return roles;
    }
        
        

    public String obtenerRolAleatorio() throws IOException {
        List<String> roles = obtenerRoles();
        Random rand = new Random();
        return roles.get(rand.nextInt(roles.size()));
    }
}
