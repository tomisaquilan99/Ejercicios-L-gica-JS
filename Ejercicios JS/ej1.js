/* Ejercicio 1*/

export function adicion(array, numero){
    let arrayToNumber = ""
    array.forEach(element => {
        arrayToNumber += element.toString()
    })

    arrayToNumber = (Number(arrayToNumber)+numero);
    arrayToNumber = arrayToNumber.toString().split("").map(elem=>Number(elem))

    return arrayToNumber
}

export function resta(array, numero){
    let arrayToNumber = ""
    array.forEach(element => {
        arrayToNumber += element.toString()
    })

    if((Number(arrayToNumber)-numero) < 0) {
        arrayToNumber=[0]
       } else {
        arrayToNumber = (Number(arrayToNumber)-numero).toString().split("").map(elem=>Number(elem)); 
       }

    return arrayToNumber
}