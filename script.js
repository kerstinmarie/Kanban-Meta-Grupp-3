import { page } from './modules/page.mjs';
import { data } from './modules/data.mjs';
import { eventHandlers } from './modules/eventHandlers.mjs';
document.body.onload = script;

const userIsLoggedIn = true; //false => loginPage  //true => boardPage

function script() {
    if(userIsLoggedIn){
        page.loadBoardPage();
    } else{
        page.loadLoginPage();
    }
}
