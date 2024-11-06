// Función principal de la calculadora
function calculadora() {
    // Pedir el primer número al usuario
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    
    // Pedir el segundo número al usuario
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));
    
    // Pedir la operación al usuario
    const operacion = prompt("Elija una operación (+, -, *, /):");
    
    let resultado;
    
    // Realizar la operación seleccionada
    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Error: No se puede dividir entre cero";
            }
            break;
        default:
            resultado = "Operación no válida";
            break;
    }
    
    // Mostrar el resultado en una alerta
    alert("Resultado: " + resultado);
}

// Llamar a la función calculadora
calculadora();