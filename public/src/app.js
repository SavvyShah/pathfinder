/*
  ____ ___  ______   ______  ___ ____ _   _ _____
  / ___/ _ \|  _ \ \ / /  _ \|_ _/ ___| | | |_   _|
 | |  | | | | |_) \ V /| |_) || | |  _| |_| | | |
 | |__| |_| |  __/ | | |  _ < | | |_| |  _  | | |
  \____\___/|_|    |_| |_| \_\___\____|_| |_| |_|

  ____  _   _ _   _ ____  _   _    _    __  __
 / ___|| | | | | | | __ )| | | |  / \  |  \/  |
 \___ \| |_| | | | |  _ \| |_| | / _ \ | |\/| |
  ___) |  _  | |_| | |_) |  _  |/ ___ \| |  | |
 |____/|_| |_|\___/|____/|_| |_/_/   \_\_|  |_|

*/

//CONSTANTS

const SIZE=30
const ANIMATION_DELAY=1;
//CONSTANTS

import Grid from './grid'
import '../styles.css'
import addOpenNodes from './addOpenNodes'
import assignCurrentNode from './assignCurrentNode'

let nineByNine=new Grid(SIZE)
document.getElementById('root').innerHTML=nineByNine.join("");

//SELECT NODE
let NODE_A;
let NODE_B;
//X and Y coordinates of NODE_A and NODE_B respectively
let xA,yA,xB,yB;
let timers=[];

function handleClick({target}){
  if(NODE_A&&NODE_B)return true;
  if(target.className=='cell'){
   if(document.getElementById('A')){
    target.setAttribute('id','B')
    target.innerText="B"
    NODE_B=target;
    [xB,yB]=NODE_B.getAttribute('coords').split(",")
  }
  else{
    NODE_A=target;
    target.className="cell current"
    target.innerText="A"
    target.setAttribute('id','A');
    [xA,yA]=NODE_A.getAttribute('coords').split(",")
  } 
  }
}

document.addEventListener('click',handleClick)

//EOF-SELECT NODE

//START RESET

const START_BUTTON=document.getElementById('start');
const RESET_BUTTON=document.getElementById('reset');
const BLOCK_BUTTON=document.getElementById('block')
let block_state=false;

function handleStart(){
  if(!NODE_B)return false;
  for(let i=0;i<1000;i++){
    timers[i]=setTimeout(()=>{
      addOpenNodes(document.querySelector('.current'));
      let current=document.querySelector('.current')
      if(!current.getAttribute('id'))current.className="cell closed"
      if(current.getAttribute('id')=="A") current.className="cell"
      if((document.getElementById("B").className)=="cell current") return;
  
      assignCurrentNode();
    },i*1000)
  }

}

function handleReset(){
  for(let i=0;i<1000;i++){
    clearTimeout(timers[i])
  }
  if(NODE_A)NODE_A.removeAttribute('id')
  if(NODE_B)NODE_B.removeAttribute('id')
  NODE_A.innerText="";
  NODE_B.innerText=""
  NODE_A=null;
  NODE_B=null;
  
  let cells=document.getElementsByClassName("cell")
  let length=cells.length
  for(let i=0;i<length;i++){
    cells[i].className="cell"
  }
}

function handleBlock(){
  block_state=!block_state;
  if(block_state==true)document.getElementById('root').style.cursor="crosshair"
  else document.getElementById('root').style.cursor="pointer"
}

START_BUTTON.addEventListener('click',handleStart);
RESET_BUTTON.addEventListener('click',handleReset);
BLOCK_BUTTON.addEventListener('click', handleBlock)
//EOF START RESET

export {xA,xB,yA,yB};