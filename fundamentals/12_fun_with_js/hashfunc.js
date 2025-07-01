const crypto = require('crypto');

// const input = "100xdevs";
// const input = "596138";
// const hash = crypto.createHash('sha256').update(input).digest('hex');
// const input = 596138; 
// const hash = crypto.createHash('sha256').update(input.toString()).digest('hex');
// console.log(hash);


function findHashWithPrefix(prefix){
  let input = 0; 
  while(true){
    // let inputStr = input.toString();
    let inputStr = "100xdevs" + input; 
    let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
    if(hash.startsWith(prefix)){
      return {input: inputStr, hash: hash};
    }
    input++; 
  }
}

const result = findHashWithPrefix('0000');
console.log(`Input: ${result.input}`);
console.log(`output: ${result.hash}`)

