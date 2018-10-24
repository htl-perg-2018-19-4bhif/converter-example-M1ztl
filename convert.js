/*
for(var i = 0;i<6;i++){ 
    console.log(process.argv[i]);
}*/
var value = process.argv[2];
var param1 = process.argv[3];
var valueTo = process.argv[4];
var param2 = process.argv[5];

if (!isNaN(value) && (param1 == "m" || param1 == "cm" || param1 == "mm" || param1 == "kg" || param1 == "g") && valueTo == "to" && (param2 == "m" || param2 == "cm" || param2 == "mm" || param2 == "kg" || param2 == "g")) {
    if (param1 == "mm" && param2 == "m" || param1 == "g" && param2 == "kg") {
        console.log(value + " " + param1 + " are " + value / 1000 + " " + param2);
    } else if (param1 == "m" && param2 == "mm" || param1 == "kg" && param2 == "g") {
        console.log(value + " " + param1 + " are " + value * 1000 + " " + param2);
    } else if (param1 == "m" && param2 == "cm") {
        console.log(value + " " + param1 + " are " + value * 100 + " " + param2);
    } else if (param1 == "cm" && param2 == "m") {
        console.log(value + " " + param1 + " are " + value / 100 + " " + param2);
    } else if (param1 == "cm" && param2 == "mm") {
        console.log(value + " " + param1 + " are " + value * 10 + " " + param2);
    } else if (param1 == "mm" && param2 == "cm") {
        console.log(value + " " + param1 + " are " + value / 10 + " " + param2);
    } else if (param1 == param2) {
        console.log(value + " " + param1 + " are " + value + " " + param2);
    } else {
        console.log("Can not convert");
    }
} else {
    console.log("Wrong parameters");
}


