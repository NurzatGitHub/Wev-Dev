// let i = 3;

// while (i) {
//   alert( i-- );
// }

// let i = 0;
// while (++i < 5) alert( i );

// let i = 0;
// while (i++ < 5) alert( i );

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }
// let i = 0;
// while(i < 3){
//     alert( `number ${i}!` );
//     ++i;
// }

// let num;
// do{
//     num = prompt('number greater than 100?',0);
// }
// while(num <= 100);

let n = prompt('write n:',10);
for(let i = 2; i < n; i++) {
    let flag = true;
    for(let j = 2; j < i; j++) {
        if(i % j == 0) {
            flag = false;
        }
    }
    if(flag) {
        alert(i);
    }
}