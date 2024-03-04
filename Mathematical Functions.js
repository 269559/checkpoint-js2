//Function 1 :

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  }
// Function 2:
function Prime(a) {
    
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return a + " n'est pas premier";
        }
    }

    return a + " est premier";
}