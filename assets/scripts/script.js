let name = prompt("Введите имя");
alert('Привет, ' + name);
let age = parseInt(prompt("Сколько Вам лет?"));
// alert(age + 'лет');

// let age = 101;

// if (age == 18) {
//     alert('Вы совершеннолетний, все можно!');
// } else if (age == 10) {
//     alert('Вам надо учить уроки!');
// } else if(age == 30) {
//         alert('Ложитесь спать, завтра на работу');
// } else {
//     alert('Мы не знаем что Вам делать');
// }

switch (age) {
    case 18: {
        alert("Вы совершеннолетний, все можно!");
        break;
    }
    case 10: {
        alert("Вам надо учить уроки!");
        break;
    }
    case 30: {
        alert("Ложитесь спать, завтра на работу");
        break;
    }
    default: {
        alert("Мы не знаем что Вам делать");
        break;
    }
}