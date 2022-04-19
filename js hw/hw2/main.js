let x = 10;
let a = 0;
if (a !== 0){
    console.log("false")
}else {
    console.log("true")
}



let time = 59
if (time >= 0 && time <=15){
    console.log("first part of time");
}else if (time >=16 && time<=29){
    console.log("second part of time");
}else if (time >=30 && time<=44){
    console.log("third part of time");
}else if (time >=45 && time<=59){
    console.log("quarter part of time");
}else {
    console.log("????")
}


let day = 31
if (day >= 1 && day <=10){
    console.log('first part of months');
}else if (day >= 11 && day <=20){
    console.log('second part of months');
}else if (day >= 21 && day <=31){
    console.log('third part of months');
}else {
    console.log('????')
}


let week = prompt('number of day of the week')
switch (week){
    case '1': document.write('Monday'); break;
    case '2': document.write('Tuesday'); break;
    case '3': document.write('Wednesday'); break;
    case '4': document.write('Thursday'); break;
    case '5': document.write('Friday'); break;
    case '6': document.write('Saturday'); break;
    case '7': document.write('Sunday'); break;
    default: document.write('???');
}

let answer1 = prompt('Write first number');
let answer2 = prompt('Write second number');
if (answer1 > answer2){
    console.log(answer1);
}else if (answer1 < answer2){
    console.log(answer2);
}else if (answer1 === answer2){
    console.log(answer1 + '=' + answer2 );
}else {
    console.log('???');
}