const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});

const addNumbers = function(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('Gimme a number', response => {
      let num = parseInt(response);
      sum += num;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    }) 
  }
  if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  }
}


addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
