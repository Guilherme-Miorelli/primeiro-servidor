//requisitando a biblioteca lodash
const { uniq } = require("lodash");
//requisitando o arquivo externo e desestruturando os objetos arrays
const { arrayNumeros, arrayLetras } = require("./array.js");
//apresentar elementos sem repeti-los e armazenando em uma variável
const arrayNumeroUnico = uniq(arrayNumeros);
const arrayLetrasUnico = uniq(arrayLetras);
//apresentando os valores filtrados
console.log(arrayLetrasUnico);
console.log(arrayNumeroUnico);