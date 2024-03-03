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
    if(currentHeroAt.value == true){


    alert(`bora bora herois: ${currentHeroAt.value} aaa ${heroiAt} `);
































    
}else{
    alert("deu bosta");
    location.reload();
}

}


