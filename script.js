// Não sei se compreendi muito bem o enunciado da questão, mas o código
// abaixo lê os arquivos de texto contendo os números e os printa na tela
// divididos em arrays (por cada arquivos).

const folder = './numeros/';
const fs = require('fs');

fs.readdirSync(folder).map((file) => {
   try {
      const data = fs.readFileSync(folder + file, 'utf-8');
      const phonesArray = data.split(",");
      console.log(phonesArray);
   } catch (err) {
      console.error(err);
   }
});