let gameSeq =[];
let userSeq= [];
let btns = ["yellow" ,"red", "blue", "green"];
let start = false;
let level =0;
let score = 0;
let h3 = document.querySelector("h3");
let btn = document.querySelector(".btn");
let highScoreValue = 0;
document.addEventListener("keypress", function(){
    if(start == false){
        // console.log("game started ");
        start = true;
        levelUp();  
    }
    
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
};

function levelUp() {
    level++;
    
    //  let b = document.querySelector("b");
    // b.innerText = score +=5;
    // highScore = score;
    // console.log(highScore)
    h3.innerText = `level ${level}`;
            
            let randInx = Math.floor(Math.random()*4)
            let randColor = btns[randInx];
            let randBtn = document.querySelector(`.${randColor}`);
            gameSeq.push(randColor);
            console.log(gameSeq);
            gameFlash(randBtn);
            userSeq =[];
            
        }
        
        
        function result(idx){
            // console.log("current Level :", level);
            // let idx = level-1;
            if(userSeq[idx] == gameSeq[idx]){
                let b = document.querySelector("b");
                b.innerText = score +=2;
                if(userSeq.length == gameSeq.length){
                    setTimeout(levelUp,1000);
                }
            }else{
            
                h3.innerText = `Game Over! Your Score is ${score} Press any key to start`;
                highScore()
            document.querySelector('body').style.backgroundColor = "red";
            setTimeout(function(){
                document.querySelector('body').style.backgroundColor = "white"
            },200)
            reset();
       
      
        
    }
}
function btnPress(){
    // console.log("button pressed")
    let btn = this; 
 //   console.dir(this)
    let userflash = ()=> {
        btn.classList.add("user-flash");
        setTimeout(() => {
            btn.classList.remove("user-flash")
            }, 250)
    };
    userflash()
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userColor);
     console.log("user Seq : ",userSeq);
    result(userSeq.length -1);
};

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns ){
    btn.addEventListener('click', btnPress);
}

function reset(){
    start = false;
        gameSeq =[];
        userSeq=[];
        level = 0;
        score = 0;
        let b = document.querySelector("b");
        b.innerText = 0;
}
function highScore(){
    let hs= document.querySelector("#highScore")
    if(highScoreValue < score){
        console.log(highScoreValue)
        highScoreValue = score;
       hs.innerText = highScoreValue;
    }
}
