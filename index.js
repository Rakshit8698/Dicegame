const dice = document.querySelector(".image");
const roll = document.querySelector(".roll");

const onhold = document.querySelector(".onhold");

// let value=Math.floor(Math.random()*6)+1;
//    let random="dice"+value+".webp";
//     dice.setAttribute("src",random);

//         if(value>1){
//         score1.innerHTML=value;
//         document.querySelector('.inside').innerHTML=value;
//     }else{
//             score2.innerHTML=value;
//             document.querySelector('.inside2').innerHTML=value;
//         }


let isPlaying, activeplayer, scoreboard, scores;

function init() {
    scores = [0, 0];
    scoreboard = 0;
    isPlaying = true;
    activeplayer = 0;

    document.getElementById('score--0').innerText = 0;
    document.getElementById('score--1').innerText = 0;
    document.getElementById('current--0').innerText = 0;
    document.getElementById('current--1').innerText = 0;
    document.querySelector('.image').style.display='none';


//    document.querySelector('.image').style.display=hidden;
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.player-1').classList.remove('winner');
    document.querySelector('.player-' + activeplayer).classList.add('active');
    
};

init();


roll.addEventListener('click', function () {
  if(isPlaying){

      let value = Math.floor(Math.random() * 6) + 1;
      let random = "dice" + value + ".webp";
      dice.setAttribute("src", random);

      if (value != 1) {
          scoreboard += value;
          document.getElementById("current--" + activeplayer).innerText = scoreboard;
          document.querySelector('.image').style.display='block';
        //   let random = "dice" + value + ".webp";
        //   dice.setAttribute("src", random);
        } else {
            switchPlayer();
        }
        
    }

})



//HOLD

onhold.addEventListener('click', function () {
 if(isPlaying){


    scores[activeplayer] += scoreboard;
    document.getElementById("score--" + activeplayer).innerText = scores[activeplayer];
    //player wins
    if (scores[activeplayer] >= 10) {
        isPlaying = false;
        document.querySelector('.image').style.display='none';
        document.querySelector('.player-' + activeplayer).classList.add('winner');
        document.getElementById('name-' + activeplayer).innerText = 'winner!';
        
    } else {
        // player switch
        switchPlayer(); 

    }
}
});



function switchPlayer() {
    scoreboard = 0;
    document.getElementById("current--" + activeplayer).innerText = scoreboard;
    activeplayer == 0 ? activeplayer = 1 : activeplayer = 0;

    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.player-' + activeplayer).classList.add('active')

}

//new Game
document.querySelector('.newgame').addEventListener('click',init);
