let user = {};
user.name = "Jhone";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//2

let menu = {
    width:200,
    height:300,
    title:"My menu"
};

multiplyNumeric(menu);

menu = {
    widht:400,
    height:600,
    title:"My menu"
};

function multiplyNumeric(obj) {
    for(let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}