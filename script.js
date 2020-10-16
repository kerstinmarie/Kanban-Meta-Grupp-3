import { page } from './modules/page.mjs';
let userIsLoggedIn = localStorage.getItem("currentUser") != null ? true : false;  //false => loginPage  //true => boardPage

document.body.onload = script;

function script() {
    if(userIsLoggedIn){
        page.loadBoardPage();
    } else{
        page.loadLoginPage();
    }
}
