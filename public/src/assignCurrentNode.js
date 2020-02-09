function assignCurrentNode(){
  let open=document.querySelectorAll(".open")
  let openNodes=[]; 
  let length=open.length
  for(let i=0;i<length;i++){
    openNodes.push(open[i])
  }
  openNodes.sort((firstNode, secondNode)=>Number(firstNode.getAttribute('fcost')-Number(secondNode.getAttribute('fcost'))))
  if(openNodes.className!="cell closed")openNodes[0].className="cell current"
}


export default assignCurrentNode;