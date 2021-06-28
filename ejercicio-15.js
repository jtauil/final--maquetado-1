let numero = prompt("Ingrese un numero");

let parImpar = oddEven(numero);

alert("El número " +numero+ " es " +parImpar );

function oddEven(numero);
    if (numero % 2 == 0) {
        return "par!"
    
    } else if(numero == 0) {
        return "cero!"
    
    } else 
        return "impar!"

        