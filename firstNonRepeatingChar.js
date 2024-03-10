function firstNonRepeatingLetter(s) {
    let a= s.toLowerCase();
    let strArray = [...a];
    let results = '';
  
    for (let i = 0; i < strArray.length; i++) {
      let count = 1;
      for (let j = 0; j < strArray.length; j++) {
        if (i != j) {
          if (strArray[i] == strArray[j]) {
            count = count + 1;
            break;
          }
        }
      }
      if (count == 1) {
        return  s[i]
  
      }
    }
    return results 
  }

console.log(firstNonRepeatingLetter('a'))
console.log(firstNonRepeatingLetter('stress'))
console.log(firstNonRepeatingLetter('moonmen'))