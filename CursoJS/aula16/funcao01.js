function parImpar(n) {
    if (n % 2 == 0) {
        return 'PAR!';
    } else {
        return 'ÍMPAR!';
    }
}

let res = parImpar(5);
console.log(res);