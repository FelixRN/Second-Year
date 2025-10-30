package com.example.demo.controlador;

import java.time.LocalDate;
import java.util.Random;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.modelo.GenerateNumber;

@Controller
public class DiscountController {

	@RequestMapping("/descuento")
    public String mostrarDescuento(Model model) {
        Random random = new Random();
        int porcentaje = random.nextInt(19) + 2; 
        LocalDate fecha = LocalDate.now();

        model.addAttribute("fecha", fecha);
        model.addAttribute("porcentaje", porcentaje);
        return "discount";
    }
}
