/* Ejercicio 2*/

export function hayParOPareja(array){
    let b=false
    let pares = array.filter(
        (numero) => numero % 2 == 0 && numero!==0)
        if(pares.length===0)
        {
            return b
        }
        for(let m=0;m<array.length;m++)
        {
            for(let j=m+1;j<array.length;j++)
            {
                for(let k=0;k<pares.length;k++)
                {
                    if(array[m] + array[j] === pares[k])
                    b=true
                }
            }
        }
    return b
}