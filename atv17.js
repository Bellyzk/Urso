window.onload= function(){ 
let imagens = ["urso-1.png","urso-2.png","urso-3.png"];
let index = 0;
let imagemElemento = document.getElementById ("imagem");
let x = 0;
let y = 26;
let olhandoEsquerda = false;


window.addEventListener('keydown',andar);
window.addEventListener('keyup',parar);
window.addEventListener('keydown',pular);
window.addEventListener('keyup',cair);

function trocarimagem() {
    index = (index+1) % imagens.length;
    imagemElemento.src = imagens[index];

}
function andar (){
    if(event.key == 'd'){
        x += 10
        imagemElemento.style.left = x+"px"
        trocarimagem()
        if (olhandoEsquerda) {
            imagemElemento.style.transform = "scaleX(1)";
            olhandoEsquerda = false;
        }
        
    } 
    else if(event.key == 'a'){
        x -= 10;
        imagemElemento.style.left = x + "px";
        trocarimagem();

        if (!olhandoEsquerda) {
            imagemElemento.style.transform = "scaleX(-1)";
            olhandoEsquerda = true;
        }
    };

}
function pular(){

    if (event.key == 'w'){
        y+=15
        imagemElemento.style.bottom= y+"%"
    }
}
function cair (){
    imagemElemento.style.bottom= "26%"}


function parar(){
    imagemElemento.src = imagens[0];
    y= 26



}

};