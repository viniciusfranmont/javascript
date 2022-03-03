let botao = window.document.querySelector('input#botao');
botao.addEventListener('click', verificar);

function verificar () {
    //Criação das variáveis para Data de Nascimento e Sexo
    let txtAno = window.document.getElementById('txtData');
    let ano_nasc = Number(txtAno.value);
    let data = new Date();
    let ano_atual = data.getFullYear();
    
    //Variável para a div resultado
    let res = window.document.querySelector('div#res');

    //Criação de imagem dinâmica
    let img = window.document.createElement('img');
    img.setAttribute('id', 'imagem');

    if (txtAno.value.length == 0 || ano_nasc > ano_atual) {
        window.alert('[ERRO] Data inválida. Tente Novamente!');
    } 
    else {
        let fsex = window.document.getElementsByName('radSex');
        let idade = ano_atual - ano_nasc;
        let genero = '';
        if (fsex[0].checked) {
            if (idade <= 2) {
                // Bebê
                genero = 'Homem';
                res.innerHTML = `Detectamos um <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/homens/bebe-pq.png');
                res.appendChild(img);
            } else if (idade > 2 && idade <= 12) {
                // Menino
                genero = 'Homem';
                res.innerHTML = `Detectamos um <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`
                img.setAttribute('src', 'imagens/homens/menino-pq.png');
                res.appendChild(img);
            } else if (idade > 12 && idade <= 17) {
                // Adolescente
                genero = 'Homem';
                res.innerHTML = `Detectamos um <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`
                img.setAttribute('src', 'imagens/homens/adolescente-pq.png');
                res.appendChild(img);
            } else if (idade > 17 && idade <= 24) {
                // Jovem 
                genero = 'Homem';
                res.innerHTML = `Detectamos um <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/homens/jovem-pq.png');
                res.appendChild(img);
            } else if (idade > 24 && idade <= 30) {
                // Jovem - Adulto
                genero = 'Homem';
                res.innerHTML = `Detectamos um <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/homens/jovem-adulto-pq.png');
                res.appendChild(img);
            } else if (idade > 30 && idade <= 45) {
                // Adulto
                genero = 'Homem';
                res.innerHTML = `Detectamos um <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/homens/adulto-pq.png');
                res.appendChild(img);
            } else if (idade > 45 && idade <= 65){
                // Meia_idade
                genero = 'Homem';
                res.innerHTML = `Detectamos um <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/homens/meia-idade-pq.png');
                res.appendChild(img);
            } else if (idade > 65 && idade <= 74){
                // Idoso
                genero = 'Homem';
                res.innerHTML = `Detectamos um <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/homens/idoso-pq.png');
                res.appendChild(img);
            } else{
                // Ancião
                genero = 'Homem';
                res.innerHTML = `Detectamos um <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/homens/anciao-pq.png');
                res.appendChild(img);
            }
        } 
        else {
            if (idade <= 2) {
                // Bebê
                genero = 'Mulher';
                res.innerHTML = `Detectamos uma <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/mulheres/bebe-pq.png');
                res.appendChild(img);
            } else if (idade > 2 && idade <= 12) {
                // Menina
                genero = 'Mulher';
                res.innerHTML = `Detectamos uma <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/mulheres/menina-pq.png');
                res.appendChild(img);
            } else if (idade > 12 && idade <= 17) {
                // Adolescente
                genero = 'Mulher';
                res.innerHTML = `Detectamos uma <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/mulheres/adolescente-pq.png');
                res.appendChild(img);
            } else if (idade > 17 && idade <= 24) {
                // Jovem 
                genero = 'Mulher';
                res.innerHTML = `Detectamos uma <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/mulheres/jovem-pq.png');
                res.appendChild(img);
            } else if (idade > 24 && idade <= 30) {
                // Jovem - Adulta
                genero = 'Mulher';
                res.innerHTML = `Detectamos uma <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/mulheres/jovem-adulta-pq.png');
                res.appendChild(img);
            } else if (idade > 30 && idade <= 45) {
                // Adulta
                genero = 'Mulher';
                res.innerHTML = `Detectamos uma <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/mulheres/adulta-pq.png');
                res.appendChild(img);
            } else if (idade > 45 && idade <= 65){
                // Meia_idade
                genero = 'Mulher';
                res.innerHTML = `Detectamos uma <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/mulheres/meia-idade-pq.png');
                res.appendChild(img);
            } else if (idade > 65 && idade <= 74){
                // Idosa
                genero = 'Mulher';
                res.innerHTML = `Detectamos uma <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/mulheres/idosa-pq.png');
                res.appendChild(img);
            } else{
                // Anciã
                genero = 'Mulher';
                res.innerHTML = `Detectamos uma <ins><em>${genero}</em></ins> de <strong>${idade} anos</strong>.`;
                img.setAttribute('src', 'imagens/mulheres/ancia-pq.png');
                res.appendChild(img);
            }
        }
    }
}