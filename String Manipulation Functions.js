//Function 1 :

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

  //Function 2 :

  function countCharacters(str) {
    return str.length;
  }


    //Function 3 :

    function CapitalizeWords(str) {
        let CapitalizeWords = str[0].toUpperCase();
    
        for (let i = 1; i < str.length; i++) {
            if (str[i - 1] === ' ') {
                CapitalizeWords += str[i].toUpperCase();
            } else {
                CapitalizeWords += str[i];
            }
        }
    
        return CapitalizeWords;
    }
