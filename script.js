import { page } from './modules/page.mjs';
import { data } from './modules/data.mjs';

document.body.onload = script;

function script(){
    document.getElementById("wrapper").innerHTML = page.getBoardPage();
    

}


