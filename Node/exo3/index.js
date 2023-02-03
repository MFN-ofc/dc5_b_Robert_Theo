const fs = require( 'fs');
const createCsvParser = require ('csv-parser');
const readStream = fs. createReadStream('/Users/theorobert/Desktop/dc5_b_Robert_Theo/Node/exo3/electronic-card-transactions-december-2022-csv-tables.csv');
const writeStream = fs.createWriteStream('/Users/theorobert/Desktop/dc5_b_Robert_Theo/Node/exo3/result.csv');
const parser = createCsvParser();


const columnsToKeep = ['Period', 'Data_value', 'Series_title_2'];
writeStream.write('Id,Period,Data_value,Series_title_2\n');
var id=0;
fs.createReadStream('/Users/theorobert/Desktop/dc5_b_Robert_Theo/Node/exo3/electronic-card-transactions-december-2022-csv-tables.csv')
  .pipe(createCsvParser())
  .on('data', (data) => {
    // data contient une ligne du fichier CSV parsé en objet JavaScript
    // Extraire uniquement les colonnes qui vous intéressent
    const filteredData = {};
    columnsToKeep.forEach((colonne) => {
      filteredData[colonne] = data[colonne];
    });
    // écrire les données filtrées dans un nouveau fichier
    id++;
    writeStream.write(`${id},${filteredData.Period},${filteredData.Data_value},${filteredData.Series_title_2}\n`);
  })
  .on('end', () => {
    console.log('Extraction terminée');
    writeStream.end();
  });
