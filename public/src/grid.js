import Coordinates from './utils/coordinates'

function Grid(size){
  let coords=new Coordinates();
  let gridHTML=coords.getCoordinates(size).map(x=>{
   return `<div coords=${x[0]+","+x[1]} class="cell"></div>`
  });
  return gridHTML;
}

export default Grid;