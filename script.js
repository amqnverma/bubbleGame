let timer = 30;
let rn = 0;
let score = 0;
function makeBubble(){
    let clutter = "";

for(let i = 1 ; i<=152 ;i++){
    clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
}
document.querySelector(".panel-bottom").innerHTML = clutter;
};
function runTimer(){
    let timerint = setInterval(function(){
        if (timer > 0){
            timer--;

            document.querySelector("#timer .score-box").innerHTML = timer
        }else {
            clearInterval(timerint);
            document.querySelector(".panel-bottom").innerHTML = "<h1>Game Over</h1>";
        }
    }, 1000)
}
function getNewHit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval .score-box").innerHTML = rn;
}
function increaseScore(){
    score += 10;
    document.querySelector("#score").innerText = score;
}

document.querySelector(".panel-bottom").addEventListener("click",
    function (evt){
        let clickedNumber = Number(evt.target.innerText);
        if (clickedNumber === rn){
            increaseScore();
            makeBubble();
            getNewHit();
        }
    }
)


getNewHit();
runTimer();
makeBubble();