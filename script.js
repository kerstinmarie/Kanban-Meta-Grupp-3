import { page } from './modules/page.mjs';
import { data } from './modules/data.mjs';

document.body.onload = script;

function script(){
    //document.getElementById("wrapper").innerHTML = page.getFrontPage();
    document.getElementById("wrapper").innerHTML = page.getBoardPage();
    addOnAddCardClickEventHandlers();

}




////work in progress add cards anthon
function addOnAddCardClickEventHandlers() {
    console.log("add card");
    const addCardBtns = document.getElementsByClassName("add-card-button");
    Object.keys(addCardBtns).forEach(key=>{
        addCardBtns[key].addEventListener("click", e=>onAddCardClickEventHandler(e))
        console.log(addCardBtns[key]);
    });
}

function onAddCardClickEventHandler(e){
    alert("click",e.target);
}