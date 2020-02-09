function Coordinates(){
  this.coordinates=[];
  this.getCoordinates=(gridSize)=>{
    for(let i=0;i<gridSize;i++){
      for(let j=0;j<gridSize;j++){
        this.coordinates.push([i,j])
      }
    }
    return this.coordinates;
  }
}

export default Coordinates;