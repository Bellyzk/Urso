let imagens = [
    "urso-1.png",
    "urso-2.png",
    "urso-3.png"
];

let index = 0;
contador= 0
const imagemElemento = document.getElementById("imagem");

function trocarImagem() {
    index = (index + 1) % imagens.length; 
    imagemElemento.src = imagens[index]; 
    imagemElemento.style.left = `${contador}px`
    contador+= 10
}



setInterval(trocarImagem, 250);