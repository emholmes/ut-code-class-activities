const fs = require('fs');

const data = process.argv.slice(2);

fs.writeFile('message.txt', data[0], (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});


fs.readFile('./message.txt', 'utf8', (err) => {
  if (err) throw err;
  console.log(data[0]);
});
