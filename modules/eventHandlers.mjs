/* 

Här finns alla funktioner som:

1. Lägger till event handlers till element.
2. Är event handlers.

/Anthon

*/



export const eventHandlers = {
    addOnAddCardClickEventHandlers: function () {
        console.log("add card");
        const addCardBtns = document.getElementsByClassName("add-card-button");
        Object.keys(addCardBtns).forEach(key => {
            addCardBtns[key].addEventListener("click", e => eventHandlers.onAddCardClickEventHandler(e))
            console.log(addCardBtns[key]);
        });
    },
    onAddCardClickEventHandler: function (e) {
        const child = document.createElement("div");
        child.setAttribute("class", "card");
        child.innerHTML = `
            <p class="card-description">TOMT NYTT KORT MED SAMMA ATTRIBUT SOM ALLA ANDRA</p>
        `;
        e.target.parentNode.append(child);
    }
}