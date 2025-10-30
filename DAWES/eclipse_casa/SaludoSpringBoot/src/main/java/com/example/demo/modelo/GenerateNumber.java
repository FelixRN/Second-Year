package com.example.demo.modelo;

import java.util.Random;

public class GenerateNumber {

	public int generar() {
		Random random = new Random();
		return random.nextInt(100) + 1;
		}

}
