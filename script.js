const fundo = document.getElementById('fundo');
const hero1 = document.getElementById('hero1');
const hero3 = document.getElementById('hero3');
const hero2 = document.getElementById('hero2');

function hero1span(){
   fundo.style.transition='opacity 1s';
   fundo.style.opacity='0';
    
    hero1.style.backgroundImage = 'url("sprites/hero1select.gif")';
    hero2.style.display = 'none';
    hero3.style.display = 'none';
    hero1.classList.remove('hero1');
    hero1.classList.add('hero1Click');

}

function hero2span(){
    fundo.style.transition='opacity 1s';
    fundo.style.opacity='0';
    
    hero2.style.backgroundImage = 'url("sprites/hero2select.gif")';
    hero1.style.display = 'none';
    hero3.style.display = 'none';
    hero2.classList.remove('hero2');
    hero2.classList.add('hero2Click');

}

function hero3span(){
    fundo.style.transition='opacity 1s';
   fundo.style.opacity='0';
    
    hero3.style.backgroundImage = 'url("sprites/hero3select.gif")';
    hero1.style.display = 'none';
    hero2.style.display = 'none';
    hero3.classList.remove('hero3');
    hero3.classList.add('hero3Click');

}