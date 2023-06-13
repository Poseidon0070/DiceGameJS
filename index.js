let button = document.querySelector(".button");
button.addEventListener("click",function(){
    let n1 = Math.floor(Math.random()*6+1);
    let n2 = Math.floor(Math.random()*6+1);
    console.log(n1);
    console.log(n2);
    document.querySelector('.Dice-1').setAttribute("src",'./images/dice'+n1+'.png');
    document.querySelector('.Dice-2').setAttribute("src",'./images/dice'+n2+'.png');
    if(n1 > n2){
        document.querySelector('.player-1').textContent="player-1";
        document.querySelector('.player-2').textContent="player-2";
        document.querySelector('.player-1').style.backgroundColor="green";
        document.querySelector('.player-2').style.backgroundColor="red";
    }else if(n2 > n1){
        document.querySelector('.player-1').textContent="player-1";
        document.querySelector('.player-2').textContent="player-2";
        document.querySelector('.player-1').style.backgroundColor="red";
        document.querySelector('.player-2').style.backgroundColor="green";
    }else{
        document.querySelector('.player-1').style.backgroundColor="blue";
        document.querySelector('.player-2').style.backgroundColor="bluE";
        document.querySelector('.player-1').textContent="DRAW";
        document.querySelector('.player-2').textContent="DRAW";
    }
})