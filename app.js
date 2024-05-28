let Boxes = document.querySelectorAll(".Box"); 
let Resetbtn = document.querySelector("#reset-button");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;//player O,player X
let count = 0; // To track Draw
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetgame = () => {
    turno = true;
    count = 0;
    enabledboxes();
    msgcontainer.classList.add("hide");
};
Boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
        if(turno) {
        Box.innerText = "o";
        Box.classList.add("col");
        turno = false;
        } else{
            Box.innerText = "X";
            Box.classList.remove("col");
            Box.classList.add("col2");
            turno = true;
        }
        Box.disabled = true;
        count++;
        let iswinner =  checkwinner();
         if(count === 9 && !iswinner) {
            gameDraw();
        }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.add("hide");
    disabledboxes();
  };
  const disabledboxes = () => {
    for(let Box of Boxes) {
        Box.disabled = true;
    }
};
const enabledboxes = () => {
    for(let Box of Boxes) {
        Box.disabled = false;
        Box.innerText = "";
    }
};

const showWinner = (winner) =>
{
    msg.innerText = `congratulation , winner is = ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
};
const checkwinner = () => {
    for(let pattern of winPatterns)  {
     let pos1val = Boxes[pattern[0]].innerText;
     let pos2val =  Boxes[pattern[1]].innerText;
     let pos3val = Boxes[pattern[2]].innerText;
     if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val) {
            showWinner (pos1val);
            return true ;
        }
    }
   }
};
newbtn.addEventListener("click",resetgame);
Resetbtn.addEventListener("click",resetgame);





