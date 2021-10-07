import { leerTeclado } from "./entradaTeclado";



export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Averiguar si es primo o no')
    console.log('2.- Comparador de números')
    console.log('3.- Días que quedan para mi cumpleaños')
    console.log('4.- Promedio')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: '))
    return n
}