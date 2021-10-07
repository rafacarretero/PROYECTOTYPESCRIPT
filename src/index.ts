import { leerTeclado } from "./util/entradaTeclado";
import {menuPral} from './util/menuPral'

console.log("Funciones");
// Creamos la variable función main que llamamos main
const main = async () => {
  let n: number
  
  do {
      n = await menuPral()
      switch(n){
          case 1:
              await fun1()
              break
          case 2:
              await fun2()
              break
          case 3:
              await fun3()
              
              break
          case 4:
            await fun4();
            break    
          case 0:
              console.log('\nAdios')
      }
  }while (n != 0)
}
main();
//Números primos
let fun1 = async () => {
  let num1: number
                let nprim=true
                num1 =  parseInt( await leerTeclado('Introduzca un número')) 
                for (let i = 2; i < num1 / 2 ; i++) {
                    if (num1 % i == 0) {
                        nprim=false
                    }
                }
                if (nprim==true) {
                console.log("Es primo")
                } else {
                    console.log("No es primo")
                }
};

//Comparador de números
let fun2 = async () => {
  const valorx = await leerTeclado("Introduce el primer número:");
  let valor3 =parseInt(valorx);
  const valora = await leerTeclado("Introduce el segundo número:");
  let valor4 =parseInt(valora); 
  const valorb = await leerTeclado("Introduce el tercer número:");
  let valor5 =parseInt(valorb);
  if (valor3 == valor4 && valor3 == valor5){
    console.log("Numero 1, Numero 2 y Numero 3 son iguales! y valen: "+valor3+"");
    }
    else{
      
       if (valor3 > valor4){
          if (valor3 > valor5){
             console.log("Numero 1 es Mayor y vale: "+valor3+"");
             }
             else{
                console.log("Numero 3 es Mayor y vale: "+valor5+"");
                }
       }
       else{
          if(valor3 < valor4){
             if (valor4 > valor5){
                console.log("Numero 2 es Mayor y vale: "+valor4+"");
                }
                else{
                   console.log("Numero 3 es Mayor y vale: "+valor5+"");
                   }
             }
          }
    }
  }; 
  let fun3 = async () => {
    let fecha1 = new Date('2022/01/11');
let fecha2 = new Date()

let resta = fecha1.getTime() - fecha2.getTime()
console.log("Quedan", Math.round(resta/ (1000*60*60*24)),"dias")
  
};


let fun4 = async () => {
  console.log("Promedio")
  const valordx = await leerTeclado("Introduce el primer número");
  let valor7 =parseInt(valordx);
  const valordy = await leerTeclado("Introduce el segundo número");
  let valor8 =parseInt(valordy);
  const valordz = await leerTeclado("Introduce el tercer número");
  let valor9 =parseInt(valordz);
  var p = ((valor7+valor8+valor9)/3);
console.log("Su promedio es: "+p);
};
