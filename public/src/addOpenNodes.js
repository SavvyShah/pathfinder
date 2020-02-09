import fcost from "./fcost.js";

function addOpenNodes(currentNode){
  let coords=currentNode.getAttribute('coords');
  let [x,y]=coords.split(',')
  x=Number(x);y=Number(y);
  for(let i=x-1;i<=x+1;i++){
    if(i>=0){
      for(let j=y-1;j<=y+1;j++){
        if(j>=0&&`${i},${j}`!=coords){
          let el=document.querySelector(`[coords='${i+','+j}']`)
          if(el.id=="A")break;
          el.setAttribute("fcost",fcost(i,j));
          if(el.className!="cell closed")el.className='cell open';
        }
      }
    }
  }
}

export default addOpenNodes;