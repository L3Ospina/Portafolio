let n = 1;

while(n <= 10){
    if (n == 3) {
        console.log("ya fin");
        n = 10;
        continue;//omite el paso sig.
        //pero de ser necesario continuara
    }
    console.log(n);
    n += 1;
}

n = 1;

while(n <= 10){
    if (n == 3) {
        console.log("ya fin");
        n = 10;
        break;//rompe el ciclo
    }
    console.log(n);
    n += 1;
}

n = 12;

function resta(n){
    n -= 5;
    return n;//retorna y rompe ciclos
}

n = resta(n);
console.log(n);
