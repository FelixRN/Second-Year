package modelo;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import negocio.JugadorDTO;

public class ConsultaJugadores {
	public List<JugadorDTO> obtenerJugadores() throws IOException {
        List<JugadorDTO> jugadores = new ArrayList<>();
        InputStream input = Thread.currentThread()
                .getContextClassLoader()
                .getResourceAsStream("jugadores.txt");

        if (input == null) {
            throw new FileNotFoundException("No se encontró jugadores.txt en resources");
        }

        try (BufferedReader br = new BufferedReader(new InputStreamReader(input))) {
            String linea;
            while ((linea = br.readLine()) != null) {
                String[] partes = linea.split("-");
                if (partes.length == 2) {
                    int id = Integer.parseInt(partes[0].trim());
                    String nombre = partes[1].trim();
                    jugadores.add(new JugadorDTO(id, nombre));
                }
            }
        }
        return jugadores;
    }
}
