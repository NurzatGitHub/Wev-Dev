// function showMessage() {
//     let message = "Hello, I'm JavaScript!"; // local variable
  
//     alert( message );
//   }
  
//   showMessage(); // Hello, I'm JavaScript!
  
//   alert( message ); // <-- Error! The variable is local to the function


// let userName = 'John';

//   function showMessage() {
//     let userName = "Bob"; // declare a local variable
  
//     let message = 'Hello, ' + userName; // Bob
//     alert(message);
//   }
  
//   // the function will create and use its own userName
//   showMessage();
  
//   alert( userName ); // John, unchanged, the function did not access the outer variable


// function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
  
//       alert(i);  // a prime
//     }
//   }
  
//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if ( n % i == 0) return false;
//     }
//     return true;
//   }  

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

//   function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
//   }

//   function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
//   }


  function sayHi() {
    alert( "Hello" );
  }
  
  alert( sayHi ); // shows the function code

  let age = prompt("What is your age?", 18);

  let welcome = (age < 18) ?
    () => alert('Hello!') :
    () => alert("Greetings!");
  
  welcome();