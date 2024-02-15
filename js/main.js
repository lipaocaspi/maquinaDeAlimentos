// Este problema apareció en el certamen recuperativo 1 del segundo semestre de 2011 en el campus Vitacura.
// Una máquina de alimentos tiene productos de tres tipos, A, B y C, que valen respectivamente $270, $340 y $390. La máquina acepta y da de vuelto monedas de $10, $50 y $100.
// Escriba un programa que pida al usuario elegir el producto y luego le pida ingresar las monedas hasta alcanzar el monto a pagar. Si el monto ingresado es mayor que el precio del producto, el programa debe entregar las monedas de vuelto, una por una.

let productos = ["A", "B", "C"];
let precios = ["270", "340", "390"];
let monedas = ["10", "50", "100"];
let suma = 0;
let vuelto = 0;
let opcion;

function realizarCompra (precio) {
    while (suma < precio) {
        const moneda = prompt(`Ingrese la moneda (${monedas[0]}, ${monedas[1]} o ${monedas[2]})`);
        if (monedas.includes(moneda)) {
            suma = suma + Number(moneda);
        }
        else {
            alert("No es un valor válido");
        }
    }
    if (suma == precio) {
        alert("No hay vuelto");
    } else {
        vuelto = suma - precio;
        do {
            if (vuelto >= Number(monedas[2])) {
                alert(`Su vuelto : $${monedas[2]}`);
                vuelto = vuelto - Number(monedas[2]);
            } else if (vuelto >= Number(monedas[1])) {
                alert(`Su vuelto : $${monedas[1]}`);
                vuelto = vuelto - Number(monedas[1]);
            } else if (vuelto >= Number(monedas[0])) {
                alert(`Su vuelto : $${monedas[0]}`);
                vuelto = vuelto - Number(monedas[0]);
            }
        } while (vuelto >= Number(monedas[0]));
    }
    suma = 0;
    vuelto = 0;
}

do {
    opcion = prompt(`DISPENSADORA DE ALIMENTOS
        Seleccione un producto :
        A. Producto ${productos[0]} - $${precios[0]}
        B. Producto ${productos[1]} - $${precios[1]}
        C. Producto ${productos[2]} - $${precios[2]}
        0. Salir`).toUpperCase();

        switch (opcion) {
            case 'A':
                realizarCompra(Number(precios[0]))
                break;
            case 'B':
                realizarCompra(Number(precios[1]))
                break;
            case 'C':
                realizarCompra(Number(precios[2]))
                break;
            case '0':
                alert("Gracias por usar nuestro servicio");
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
} while (opcion !== '0')