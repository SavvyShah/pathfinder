//pass in the x and y coords of A and B respectively
import {xA, xB, yA, yB} from './app'

function fcost(x3,y3/*attribute on the node*/){
    
    let hcost= Math.sqrt(((x3-xA)*(x3-xA))+((y3-yA)*(y3-yA))).toFixed(2);
    let gcost=Math.sqrt(((x3-xB)*(x3-xB))+((y3-yB)*(y3-yB))).toFixed(2);
    return Number(gcost)+Number(hcost);
}

export default fcost;