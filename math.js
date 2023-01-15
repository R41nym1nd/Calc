const sumar = (...n) => redondear(n.reduce((a, b)=>a+b));
const restar = (...n) => redondear(n.reduce((a, b)=>a-b));

const multiplicar = (...n) => redondear(n.reduce((a, b)=>a*b));
const dividir = (...n) => redondear(n.reduce((a, b)=>a/b));

const potencia = (base, exponente) => redondear(Math.pow(base, exponente));
const raiz = (indice, n) => redondear(Math.pow(n, 1/indice));

const porcentaje = (valor, porcentaje) => redondear(porcentaje * (valor/100));

const cambiarSigno = num => -num;

function redondear (numero) {
    const rounded = Math.round(numero * Math.pow(10, 3)) / Math.pow(10, 3);
    return rounded;
};

export default { sumar, restar, multiplicar, dividir, potencia, raiz, redondear, porcentaje, cambiarSigno }
