let user=0;
let comp=0;

const choices=document.querySelectorAll('.choice');
const mssg=document.querySelector("#msg");

let userScore=document.querySelector("#user");
let compScore=document.querySelector("#comp");

const gencompChoice=()=>{
    const options=['rock','paper','scissors'];
    const random=Math.floor(Math.random()*3);
    return options[random];
}

const drawGame=()=>{
    
    mssg.innerText='Game Drawn';
    mssg.style.backgroundColor='rgb(21, 21, 34)';
}

const showWinner=(userWin,userChoice,getComp)=>{
    if(userWin){
         user++;
         userScore.innerText=user;
       
        mssg.innerText=`You Win!! Your ${userChoice} beats ${getComp}`;
        mssg.style.backgroundColor="rgb(23, 129, 9)";
    }
    else{
        comp++;
        compScore.innerText=comp;
    
    mssg.innerText=`You lose!! ${getComp} beats your ${userChoice}`;
    mssg.style.backgroundColor='rgb(168, 12, 12)';
}
};
const playGame=(userChoice)=>{
    
    //computer choice
     const getComp=gencompChoice();
    

     if(userChoice===getComp)
     {
     drawGame();
     }
    else{
        let userWin=true;
        if(userChoice==='rock')
          {
            //scissors,paper
            userWin=getComp==='paper' ? false:true;
            
          }
          else if(userChoice==='paper')
          {
            //rock,scissors
            userWin=getComp==='scissors' ?false:true;
            
          }
          else{
            //rock,paper
            userWin=getComp==='rock' ? false:true;
           
          }
          showWinner(userWin,userChoice,getComp);
    }
};

choices.forEach((choice)=>{ 
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
     
    });
});

