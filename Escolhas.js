const heroiMain = document.getElementById('heroiMain')
const currentHeroAt = document.getElementById('currentHeroi');
const escolha1 = document.getElementById('escolha1');
const escolha2 = document.getElementById('escolha2')

function Iniciar(){

    SelectYourHero.style.display = 'none';
    titulo.style.display = 'none';
    hero1.style.display = 'none';
    hero2.style.display = 'none';
    hero3.style.display = 'none';
    btnIniciar.style.display = 'none';
    setatitle.style.display = 'none';
    infohero1.style.display = 'none';
    infohero2.style.display = 'none';
    infohero3.style.display = 'none';
    fundo.style.transition='1s';
    fundo.style.opacity='1';
    fundo.style.backgroundImage = 'url("sprites/bgmasmora2.png")';
    const heroiAt = currentHeroAt.value ;
    if(currentHeroAt.value == 1 || 2 || 3){

    alert(`bora bora herois: ${currentHeroAt.value} aaa ${heroiAt} `);

    heroiMain.style.display = 'block';
     if(currentHeroAt.value == 1){
        heroiMain.style.backgroundImage = 'url("sprites/archer.png")';
         //[vida/armadura/resistenciaMagica/danoFisico/DanoMagico/TaxaDeCritico]
        let heroiAtributos = [100,10,10,20,0,5 ];

     }else if(currentHeroAt.value == 2){
        heroiMain.style.backgroundImage = 'url("sprites/warrior.png")';
           
        let heroiAtributos = [102,10,10,20,0,5 ];

     }else if(currentHeroAt.value ==3){
        heroiMain.style.backgroundImage = 'url("sprites/mage.png")';

        let heroiAtributos = [103,10,10,20,0,5 ];

     }else{
        alert(`erro ao selecionar campeão`);
     }

     let heroiAtributos = [0,0,0,0,0,0 ];

     if(currentHeroAt.value == 1){
        
         //[vida/armadura/resistenciaMagica/danoFisico/DanoMagico/TaxaDeCritico]
         heroiAtributos = [100,10,10,20,0,5 ];

     }else if(currentHeroAt.value == 2){
        
           
         heroiAtributos = [102,10,10,20,0,5 ];

     }else if(currentHeroAt.value ==3){
        

         heroiAtributos = [103,10,10,20,0,5 ];

     }else{
        alert(`erro ao selecionar atributos`);
     }


   escolha1.style.display = 'block';
   escolha2.style.display = 'block';

   alert(`Atributos:${heroiAtributos}`)




































}else{
    alert("deu bosta");
    location.reload();
}

}


