let boxes=document.querySelectorAll(".box");
let msg=document.getElementById("msg");
let hide=document.getElementsByClassName("hide")[0];
let reset=document.getElementById("res");
let newbtn=document.getElementById("new-btn");
let con=document.getElementsByClassName("con")[0];
let h=document.getElementsByTagName("h1")[0];


let turnno=true;
let count=0;
const winpatterns=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnno){
            box.innerText="0";
            turnno=false;
        }
        else{
            box.innerText="X"
            turnno=true;
        }
        count++;
        box.disabled=true;
        let isWinner=checkWinner();

          if(count==9 && !isWinner){
                  gameDeaw();
          }
    })
});

const enableboxes=()=>{

    for(let b of boxes){
        b.disabled=false;
        b.innerText="";
    }

}

const disableboxes=()=>{
    for(let b of boxes){
        b.disabled=true;
        
    }
}

const showwinner=(win)=>{
    msg.innerText=`Congtrulation winner is ${win}`;
    hide.classList.remove("hide")
    reset.classList.add("hide");
    con.classList.add('hide');
    h.classList.add('hide');
    disableboxes();
 
}
const checkWinner=()=>{
      for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1);
                return true;
            }
        }
      }
}
const gameDeaw=()=>{
    msg.innerText=`Game is Draw`;
    hide.classList.remove("hide")
    reset.classList.add("hide");
    con.classList.add('hide');
    h.classList.add('hide');
    disableboxes();
}

const resetgame=()=>{
     count=0;
     
     hide.classList.add("hide");
     reset.classList.remove("hide");
    con.classList.remove('hide');
    h.classList.remove('hide');
    enableboxes();
}

reset.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);