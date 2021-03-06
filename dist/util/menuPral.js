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
exports.menuPral = void 0;
const entradaTeclado_1 = require("./entradaTeclado");
const menuPral = () => __awaiter(void 0, void 0, void 0, function* () {
    let n;
    console.log('\n');
    console.log('1.- Averiguar si es primo o no');
    console.log('2.- Comparador de números');
    console.log('3.- Días que quedan para mi cumpleaños');
    console.log('4.- Promedio');
    console.log('0.- Salir');
    n = parseInt(yield (0, entradaTeclado_1.leerTeclado)('opción: '));
    return n;
});
exports.menuPral = menuPral;
