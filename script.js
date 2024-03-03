const fundo = document.getElementById('fundo');
const hero1 = document.getElementById('hero1');
const hero3 = document.getElementById('hero3');
const hero2 = document.getElementById('hero2');
const setatitle = document.getElementById('setatitle');

var heroselect = 0;
function hero1span(){
   fundo.style.transition='opacity 1s';
   fundo.style.opacity='0';
    
    hero1.style.backgroundImage = 'url("sprites/hero1select.gif")';
    hero2.style.display = 'none';
    hero3.style.display = 'none';
    hero1.classList.remove('hero1');
    hero1.classList.add('hero1Click');

    setatitle.style.display = 'block';

     heroselect = 1;

}

function hero2span(){
    fundo.style.transition='opacity 1s';
    fundo.style.opacity='0';
    
    hero2.style.backgroundImage = 'url("sprites/hero2select.gif")';
    hero1.style.display = 'none';
    hero3.style.display = 'none';
    hero2.classList.remove('hero2');
    hero2.classList.add('hero2Click');

    setatitle.style.display = 'block';

    heroselect = 2;

}

function hero3span(){
    fundo.style.transition='opacity 1s';
   fundo.style.opacity='0';
    
    hero3.style.backgroundImage = 'url("sprites/hero3select.gif")';
    hero1.style.display = 'none';
    hero2.style.display = 'none';
    hero3.classList.remove('hero3');
    hero3.classList.add('hero3Click');

    setatitle.style.display = 'block';

    heroselect = 3;

}

function setatitlese(){

  if(heroselect === 1){

        fundo.style.transition='none';
        fundo.style.opacity='1';
         
         hero1.style.backgroundImage = 'url("sprites/archer.png")';
         hero2.style.display = 'block';
         hero3.style.display = 'block';
         hero1.classList.remove('hero1Click');
         hero1.classList.add('hero1');
     
         setatitle.style.display = 'none';

         hero1.addEventListener("mouseenter", function(){
            hero1.style.backgroundImage = 'url("sprites/hero1select.gif")';
         });
         hero1.addEventListener("mouseleave", function(){
            hero1.style.backgroundImage = 'url("sprites/archer.png")';
         });
     
          heroselect = 0;

  

     }else if (heroselect === 2){

        fundo.style.transition='none';
        fundo.style.opacity='1';
        
        hero2.style.backgroundImage = 'url("sprites/warrior.png")';
        hero1.style.display = 'block';
        hero3.style.display = 'block';
        hero2.classList.remove('hero2Click');
        hero2.classList.add('hero2');
    
        setatitle.style.display = 'none';

        
        hero2.addEventListener("mouseenter", function(){
            hero2.style.backgroundImage = 'url("sprites/hero2select.gif")';
         });
         hero2.addEventListener("mouseleave", function(){
            hero2.style.backgroundImage = 'url("sprites/warrior.png")';
         });
    
        heroselect = 0;


     }else if (heroselect === 3){

        fundo.style.transition='none';
        fundo.style.opacity='1';
         
         hero3.style.backgroundImage = 'url("sprites/mage.png")';
         hero1.style.display = 'block';
         hero2.style.display = 'block';
         hero3.classList.remove('hero3Click');
         hero3.classList.add('hero3');
         hero3.classList.add('hero3:hover');
     
         setatitle.style.display = 'none';

         hero3.addEventListener("mouseenter", function(){
            hero3.style.backgroundImage = 'url("sprites/hero3select.gif")';
         });
         hero3.addEventListener("mouseleave", function(){
            hero3.style.backgroundImage = 'url("sprites/mage.png")';
         });
     
         heroselect = 0;

     }else{
        alert("erro ao voltar para tela inicial");

     }

    
} 