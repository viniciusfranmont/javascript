function carregar() {
    let msg = window.document.querySelector('div#msg');
    let img = window.document.querySelector('img#imagem');
    data = new Date();
    hora = data.getHours();
    if (hora <= 12) {
        msg.innerHTML = `Agora são ${hora} horas da manhã.`;
        img.src = "imagens/manha-pq.png";
        window.document.body.style.background = '#dfcfb8';
    } else if (hora > 12 && hora <= 17) {
        msg.innerHTML = `Agora são ${hora} horas da tarde.`;
        img.src = "imagens/tarde-pq.png";
        window.document.body.style.background = '#aa6d6b'
    } else {
        msg.innerHTML = `Agora são ${hora} horas da noite.`;
        img.src = "imagens/noite-pq.png";
        window.document.body.style.background = '#151924'
    }
}