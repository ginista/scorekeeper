let player1=document.querySelector('.player1');
let player2=document.querySelector('.player2');
let reset=document.querySelector('.Reset');
let points1=document.querySelector("#one");
let points2=document.querySelector("#two");
let max=document.querySelector("#maxScore");
let score1=0;
let score2=0;
let maximum=1;
max.addEventListener('click',()=>{
console.log(max.value);
 maximum=max.value;
})
player1.addEventListener('click',()=>{
    
    score1++;
    console.log(maximum);
    console.log(score1);
    if(score1==maximum){
        player1.disabled=true;
        player2.disabled=true;
        console.log("equal");
        result();
    }
    points1.innerText=score1;

})
player2.addEventListener('click',()=>{
    score2++;
    if(score2==maximum){
        player1.disabled=true;
        player2.disabled=true;
        console.log("equal");
        result();
    }
    points2.innerText=score2;
})
function result(){
    if(score1==maximum){
        alert("Player 1 Wins!!!");

    }
    else{
        alert("Player 2 Wins!!!");
    }
}
reset.addEventListener('click',()=>{
    player1.disabled=false;
    player2.disabled=false;
    score1=0;
    score2=0;
    points1.innerText=score1;
    points2.innerText=score2;
})