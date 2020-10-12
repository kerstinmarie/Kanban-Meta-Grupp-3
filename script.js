import { page } from './modules/page.mjs';
import { data } from './modules/data.mjs';
import { eventHandlers } from './modules/eventHandlers.mjs';

document.body.onload = script;

function script() {
    //document.getElementById("wrapper").innerHTML = page.getFrontPage();
    document.getElementById("wrapper").innerHTML = page.getBoardPage();
    eventHandlers.addOnAddCardBtnClickEventHandlers();                          //Lägger till event handlers på alla "lägg till nytt kort"-knappar.

}
