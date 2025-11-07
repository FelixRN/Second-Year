package com.felix.demo.modelo;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Component;

import com.felix.demo.negocio.Jugador;

@Component
public class ConsultaJugadores {
	public List<Jugador> obtenerJugadores() throws IOException {
        List<Jugador> jugadores = new ArrayList<>();

        try (InputStream input = getClass().getClassLoader().getResourceAsStream("jugadores.txt");
             BufferedReader br = new BufferedReader(new InputStreamReader(input, StandardCharsets.UTF_8))) {

            String linea;
            while ((linea = br.readLine()) != null) {
                String[] partes = linea.split("-");
                if (partes.length == 2) {
                    int id = Integer.parseInt(partes[0].trim());
                    String nombre = partes[1].trim();
                    jugadores.add(new Jugador(id, nombre));
                }
            }
        }
        return jugadores;
    }

    public String obtenerRolAleatorio() throws IOException {
        List<String> roles = new ArrayList<>();

        try (InputStream input = getClass().getClassLoader().getResourceAsStream("roles.txt");
             BufferedReader br = new BufferedReader(new InputStreamReader(input, StandardCharsets.UTF_8))) {

            String linea;
            while ((linea = br.readLine()) != null) {
                roles.add(linea.trim());
            }
        }

        Random rand = new Random();
        return roles.get(rand.nextInt(roles.size()));
    }
}
