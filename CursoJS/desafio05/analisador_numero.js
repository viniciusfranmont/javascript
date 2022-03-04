let v = [];
let cont = 0;
let rep = false;

function adicionar() {
    rep = false;
    let txtNum = window.document.getElementById('txtNum');
    if(txtNum.value.length == 0){
        window.alert('Por favor, digite ao menos um número. Tente Novamente.');
    } else{
        numero = Number(txtNum.value);
        for (let i = 0; i < v.length; i++){
            if (numero === v[i]){
                window.alert('[ERRO] ESTE NÚMERO JÁ FOI ACRESCENTADO! TENTE OUTRO!');
                rep = true;
            }
        }
        if (rep == false){
            let add = window.document.querySelector('select#selAdd');
            let item = window.document.createElement('option');
            item.value = `item${cont}`;
            item.text = `Valor ${numero} adicionado.`;
            v[cont] = numero;
            add.appendChild(item);
            cont++;
        }  
    }
}

function finalizar() {
    let n = v.length;
    let soma = 0;
    let maior = 0;
    let menor = 0;
    for(let i = 0; i < n; i++){
        if (i == 0) {
            maior = v[i];
            menor = v[i];
        }
        if (maior < v[i]) {
            maior = v[i];
        }
        if (menor > v[i]) {
            menor = v[i];
        }
        soma += v[i];
    }
    let txtNum = window.document.getElementById('txtNum');
    if(txtNum.value.length == 0){
        window.alert('Por favor, digite ao menos um número. Tente Novamente.');
    } else{
        let res = window.document.querySelector('div#resultado');
        let p1 = window.document.createElement('p');
        let p2 = window.document.createElement('p');
        let p3 = window.document.createElement('p');
        p1.innerHTML = `Ao todo, temos ${n} números cadastrados.`;
        console.log(`Ao todo, temos ${n} números cadastrados.`);
        console.log(`O maior valor informado foi ${maior}.`);
        console.log(`O menor valor informado foi ${menor}.`);
        console.log(`Somando todos os valores, temos ${soma}.`);
        console.log(`A média dos valores digitados é ${soma/n}.`);
    }
}

