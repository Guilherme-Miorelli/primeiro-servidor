//requisitando a biblioteca lodash
const { uniq } = require("lodash");
//requisitando o arquivo externo
const { arrayNumeros, arrayLetras } = require("./array.js");
//apresentar elementos sem repeti-los
const arrayNumeroUnico = uniq(arrayNumeros);
const arrayLetrasUnico = uniq(arrayLetras);

console.log(arrayLetrasUnico);
console.log(arrayNumeroUnico);