/* 

Här finns alla funktioner som:

1. Lägger till event handlers till element.
2. Är event handlers.

/Anthon

*/

import { page } from './page.mjs';

export const eventHandlers = {
    addOnAddCardBtnClickEventHandlers: function () {
        console.log("add card");
        const addCardBtns = document.getElementsByClassName("add-card-button");
        Object.keys(addCardBtns).forEach(key => {
            addCardBtns[key].addEventListener("click", e => eventHandlers.onAddCardClickEventHandler(e))
            console.log(addCardBtns[key]);
        });
    },
    addOnDeleteCardClickEventHandler: function (button) {
        button.addEventListener("click", e => eventHandlers.onDeleteCardClickEventHandler(e))
    },
    onAddCardClickEventHandler: function (e) {
        page.addCard(e);
    },
    onDeleteCardClickEventHandler: function (e) {
        page.deleteCard(e);
    }
}