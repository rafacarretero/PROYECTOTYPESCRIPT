"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const entradaTeclado_1 = require("./util/entradaTeclado");
const menuPral_1 = require("./util/menuPral");
console.log("Funciones");
// Creamos la variable función main que llamamos main
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let n;
    do {
        n = yield (0, menuPral_1.menuPral)();
        switch (n) {
            case 1:
                yield fun1();
                break;
            case 2:
                yield fun2();
                break;
            case 3:
                yield fun3();
                break;
            case 4:
                yield fun4();
                break;
            case 0:
                console.log('\nAdios');
        }
    } while (n != 0);
});
main();
//Números primos
let fun1 = () => __awaiter(void 0, void 0, void 0, function* () {
    let num1;
    let nprim = true;
    num1 = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Introduzca un número'));
    for (let i = 2; i < num1 / 2; i++) {
        if (num1 % i == 0) {
            nprim = false;
        }
    }
    if (nprim == true) {
        console.log("Es primo");
    }
    else {
        console.log("No es primo");
    }
});
//Comparador de números
let fun2 = () => __awaiter(void 0, void 0, void 0, function* () {
    const valorx = yield (0, entradaTeclado_1.leerTeclado)("Introduce el primer número:");
    let valor3 = parseInt(valorx);
    const valora = yield (0, entradaTeclado_1.leerTeclado)("Introduce el segundo número:");
    let valor4 = parseInt(valora);
    const valorb = yield (0, entradaTeclado_1.leerTeclado)("Introduce el tercer número:");
    let valor5 = parseInt(valorb);
    if (valor3 == valor4 && valor3 == valor5) {
        console.log("Numero 1, Numero 2 y Numero 3 son iguales! y valen: " + valor3 + "");
    }
    else {
        if (valor3 > valor4) {
            if (valor3 > valor5) {
                console.log("Numero 1 es Mayor y vale: " + valor3 + "");
            }
            else {
                console.log("Numero 3 es Mayor y vale: " + valor5 + "");
            }
        }
        else {
            if (valor3 < valor4) {
                if (valor4 > valor5) {
                    console.log("Numero 2 es Mayor y vale: " + valor4 + "");
                }
                else {
                    console.log("Numero 3 es Mayor y vale: " + valor5 + "");
                }
            }
        }
    }
});
let fun3 = () => __awaiter(void 0, void 0, void 0, function* () {
    let fecha1 = new Date('2022/01/11');
    let fecha2 = new Date();
    let resta = fecha1.getTime() - fecha2.getTime();
    console.log("Quedan", Math.round(resta / (1000 * 60 * 60 * 24)), "dias");
});
let fun4 = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Promedio");
    const valordx = yield (0, entradaTeclado_1.leerTeclado)("Introduce el primer número");
    let valor7 = parseInt(valordx);
    const valordy = yield (0, entradaTeclado_1.leerTeclado)("Introduce el segundo número");
    let valor8 = parseInt(valordy);
    const valordz = yield (0, entradaTeclado_1.leerTeclado)("Introduce el tercer número");
    let valor9 = parseInt(valordz);
    var p = ((valor7 + valor8 + valor9) / 3);
    console.log("Su promedio es: " + p);
});
