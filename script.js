import { page } from './modules/page.mjs';
import { data } from './modules/data.mjs';
import { eventHandlers } from './modules/eventHandlers.mjs';
document.body.onload = script;

let userIsLoggedIn = localStorage.getItem("currentUser") != null ? true : false;  //false => loginPage  //true => boardPage

function script() {
    if(userIsLoggedIn){
        page.loadBoardPage();
    } else{
        page.loadLoginPage();
    }
}
