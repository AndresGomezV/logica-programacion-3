const prompt = require("prompt-sync")();

const askNumber = (message) => {
    let n;
    do {
        n = prompt(message);
        if (!/^\d+$/.test(n)) {
            console.log("El valor ingresado debe ser un entero positivo\n");
        }
    } while (!/^\d+$/.test(n));
    return n;
};

const factorial = (n) => {
    let result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return `\n El factorial de ${n} es ${result} \n`;
};

const n = askNumber("Ingrese un número para calcular su factorial: ");
console.log(factorial(n));
