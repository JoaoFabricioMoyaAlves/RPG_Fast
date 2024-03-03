const heroiMain = document.getElementById('heroiMain')
const currentHeroAt = document.getElementById('currentHeroi');

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
     }else if(currentHeroAt.value == 2){
        heroiMain.style.backgroundImage = 'url("sprites/warrior.png")';
     }else if(currentHeroAt.value ==3){
        heroiMain.style.backgroundImage = 'url("sprites/mage.png")';
     }else{
        alert(`erro ao selecionar campeão`);
     }

































}else{
    alert("deu bosta");
    location.reload();
}

}


