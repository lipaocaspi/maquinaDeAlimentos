// Este problema apareció en el certamen recuperativo 1 del segundo semestre de 2011 en el campus Vitacura.
// Una máquina de alimentos tiene productos de tres tipos, A, B y C, que valen respectivamente $270, $340 y $390. La máquina acepta y da de vuelto monedas de $10, $50 y $100.
// Escriba un programa que pida al usuario elegir el producto y luego le pida ingresar las monedas hasta alcanzar el monto a pagar. Si el monto ingresado es mayor que el precio del producto, el programa debe entregar las monedas de vuelto, una por una.

let productos = ["A", "B", "C"];
let precios = ["270", "340", "390"];
let monedas = ["10", "50", "100"];

let opcion;

function realizarCompra (precio) {
    confirm(precio);
}

do {
    opcion = prompt(`DISPENSADORA DE ALIMENTOS
        Seleccione un producto:
        1. ${productos[0]} - $${precios[0]}
        2. ${productos[1]} - $${precios[1]}
        3. ${productos[2]} - $${precios[2]}
        4. Salir`);

        switch (opcion) {
            case '1':
                realizarCompra(Number(precios[0]))
                break;
            case '2':
                realizarCompra(Number(precios[1]))
                break;
            case '3':
                realizarCompra(Number(precios[2]))
                break;
            case '4':
                confirm("Gracias por usar nuestro servicio");
                break;
            default:
                confirm("Opción no válida. Intente de nuevo.");
        }

} while (opcion !== '4')