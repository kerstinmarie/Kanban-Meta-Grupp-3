import { page } from './modules/page.mjs';
import { data } from './modules/data.mjs';
import { eventHandlers } from './modules/eventHandlers.mjs';
document.body.onload = script;

let userIsLoggedIn = localStorage.getItem("currentUser") != null ? true : false;  //false => loginPage  //true => boardPage

window.allowDrop = function(e) {
    e.preventDefault();
  }
  
 window.drag = function(e) {
    e.dataTransfer.setData("div", e.target.id);
  }
  
 window.drop = function(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("div");
    e.target.appendChild(document.getElementById(data));
  }


window.noAllowDrop = function(e) { 
    e.stopPropagation();
}


function script() {
    if(userIsLoggedIn){
        page.loadBoardPage();
    } else{
        page.loadLoginPage();
    }
}
