function dictionary(numRules, iterations, ogString, array){
  let dictionary = {};
  let key = '';
  let value = '';
  let string = '';
  let newString = '';


  for(let i = 0; i <= array.length - 1; i++){
    key = array[i].toString().charAt(0);
    string = array[i].toString().substring(1);
    dictionary[key] = string;
  }

  for(let j = 0; j <= iterations - 1; j++){
    newString = '';
    for(let k = 0; k <= ogString.length - 1; k++){
      let letter = ogString.charAt(k);
      newString = newString + dictionary[letter];
    }
    ogString = newString;
  }

  console.log(newString.charAt(0) + newString.charAt(newString.length - 1)+ " " + newString.length);
  
}

dictionary(4, 5, 'AD', [['AAC'], ['BACA'], ['CBD'], ['DB']]); 
