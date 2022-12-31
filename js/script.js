

const man = document.querySelector('.man');



const pipe  = document.querySelector('.pipe');
const audio = document.querySelector('.audio');
const bird = document.querySelector('.aviao');
const ninja = document.querySelector('.ninja');
const passarop = document.querySelector('.passaro')




function counts (count, entrada) {
        let resul = count + entrada;
        return resul
}




const jump = () =>{
    
    man.classList.add('jump');
        setTimeout(()=>{
            man.classList.remove('jump');

       },800);

}    
         

const loop = setInterval (()=>{

    const pipePosition = pipe.offsetLeft;
    const manPosition = +window.getComputedStyle(man).bottom.replace("px", "");


    if(pipePosition <= 70 && pipePosition >0 && manPosition <80){

        pipe.style.animation = 'none';
        pipe.src='./imagens/ninja-bomb.gif'
        pipe.style.left = `${pipePosition}px`;
        pipe.style.width='250px'

    
        bird.src='./imagens/gameover.png';

        man.style.animation = 'none';
        man.style.bottom = `${manPosition}px`;
        man.style.width = '80px';
        man.style.marginLeft = '50px';
        man.src='./imagens/naruto-sad.gif';
        man.style.width='400px'
        ninja.src='./imagens/hoko.png';
        ninja.style.width='400px';
        passarop.src='./imagens/gameover.png';
        passarop.style.animation = 'none';
        
        

        
        audio.src="./audios/meuaudio2.mp3";
        
        
        
        clearInterval(loop);
        
            

        }
    }


, 10)

document.addEventListener('keydown', jump);



