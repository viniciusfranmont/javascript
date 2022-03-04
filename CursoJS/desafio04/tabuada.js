let botao = window.document.querySelector('input#botao');
botao.addEventListener('click', tabuada);

function tabuada() {
    let txtNum = window.document.getElementById('txtNum');
    let tab = window.document.querySelector('select#selTab');
    numero = Number(txtNum.value);
    if (txtNum.value.length == 0){
        window.alert('Digite um número!');
    } else {
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = window.document.createElement('option');
            item.text = `${numero} x ${c} = ${numero*c}`;
            item.value = `tab${c}`
            tab.appendChild(item);
        }
    }
}