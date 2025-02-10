const prompt = require("prompt-sync")();

//Funcion para pedir el número al usuario
const askNumber = (message) => {
    let n;
    do {
        n = prompt(message);
        //Expresión regular para evaluar que la entrada sea un entero positivo
        if (!/^\d+$/.test(n)) {
            console.log("El valor ingresado debe ser un entero positivo\n");
        }
    // El bucle seguirá imprimiendo el mensaje hasta que el usuario ingrese un entero positivo
    } while (!/^\d+$/.test(n));
    return n;
};

const factorial = (n) => {
    let result = 1;
    //El iterador se asigna al mismo valor de n y disminuye hasta llegar a 1, se guarda la suma de cada iteración en la variable result
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return `\n El factorial de ${n} es ${result} \n`;
};

const n = askNumber("Ingrese un número para calcular su factorial: ");
console.log(factorial(n)); // n = 5, El facotrial de 5 es 120
