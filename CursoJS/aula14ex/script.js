function contar() {
    let txtIni = window.document.getElementById('txtIni');
    let txtFim = window.document.getElementById('txtFim');
    let txtPasso = window.document.getElementById('txtPasso');
    let res = window.document.querySelector('div#res');
    res.innerHTML = '';
    if (txtIni.value.length == 0 || txtFim.value.length == 0){
        res.innerHTML = `<strong>Impossível contar!</strong>`
    } else{
        let inicio = Number(txtIni.value);
        let fim = Number(txtFim.value);
        let passo = Number(txtPasso.value);     
        // Se a contagem for estacionária
        if(inicio == fim) {
            res.innerHTML = `<strong>Progressão estacionária: permanecerá no valor ${inicio}.</strong>`;
        } // Se a contagem for crescente
        else if (inicio < fim) {
            if (passo === 0){
                window.alert('Passo Inválido. Considerando Passo = 1:');
                passo = 1;
            }
            while (inicio <= fim){
                res.innerHTML += `${inicio} \u{1F449}`
                inicio += passo;
            }
            res.innerHTML += '\u{1F3C1}';
        } // Se a contagem for decrescente
        else {
            if (passo === 0){
                window.alert('Passo Inválido. Considerando Passo = -1:');
                passo = 1;
            }
            while (inicio >= fim){
                res.innerHTML += `${inicio} \u{1F449}`
                inicio -= passo;
            }
            res.innerHTML += '\u{1F3C1}';
        }
    }
}