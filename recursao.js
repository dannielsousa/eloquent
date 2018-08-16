//recursão

//é quando uma função incova a si mesma.

function power(base, exponent) {
    if (exponent == undefined) {
        exponent = 2;
    }
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }
    console.log(result);
}

//a mesma função escrita recursivamente

function powerRecursive(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * powerRecursive(base, exponent - 1);
}

function printFarmInventory(cows, chickens) {
    var cowString = String(cows);
    while (cowString.length < 3)
        cowString = '0' + cowString;
    console.log(cowString + ' Cows');
    var chickenString = String(chickens);
    while (chickenString.length < 3)
        chickenString = '0' + chickenString;
    console.log(chickenString + ' Chickens');
}
printFarmInventory(7, 11);