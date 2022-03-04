let botao = window.document.querySelector('input#botao');
botao.addEventListener('click', contar);

function contar() {
    let txtIni = window.document.getElementById('txtIni');
    let txtFim = window.document.getElementById('txtFim');
    let txtPasso = window.document.getElementById('txtPasso');
    let inicio = Number(txtIni.value);
    let fim = Number(txtFim.value);
    let passo = Number(txtPasso.value);
    let res = window.document.querySelector('div#res');
    
    if (txtIni.value.length == 0 || txtFim.value.length == 0 || inicio == fim) {
        res.innerHTML = 'Impossível contar!';
    }
    if ( inicio > fim) {
        if (passo == 0) {
            window.alert('Passo Inválido! Considerando PASSO 1');
            passo = 1;
        }
        let p2 = window.document.createElement('p');
        res.innerHTML = 'Contando:';
        res.appendChild(p2);
        while(inicio >= fim) {
            p2.innerHTML += `${inicio} 👉 `;
            inicio -= passo;
        }
        p2.innerHTML += ' 🏁'
    } else {
        if (passo == 0) {
            window.alert('Passo Inválido! Considerando PASSO 1');
            passo = 1;
        }
        let p2 = window.document.createElement('p');
        res.innerHTML = 'Contando:';
        res.appendChild(p2);
        while(inicio <= fim) {
            p2.innerHTML += `${inicio} 👉 `;
            inicio += passo;
        }
        p2.innerHTML += ' 🏁'
    }   
}