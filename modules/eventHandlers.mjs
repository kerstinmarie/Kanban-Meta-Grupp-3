/* 

Här finns alla funktioner som:

1. Lägger till event handlers till element.
2. Är event handlers.

/Anthon

*/



export const eventHandlers = {
    addOnAddCardClickEventHandlers: function () {
    //    console.log("add card");
        const addCardBtns = document.getElementsByClassName("add-card-button");
        Object.keys(addCardBtns).forEach(key => {
            addCardBtns[key].addEventListener("click", e => eventHandlers.onAddCardClickEventHandler(e))
       //     console.log(addCardBtns[key]);
        });
    },
    onAddCardClickEventHandler: function (e) {
        const child = document.createElement("div");
        child.setAttribute("class", "card");
        child.innerHTML = `
            <p class="card-description">TOMT NYTT KORT MED SAMMA ATTRIBUT SOM ALLA ANDRA</p>
            <button class="edit-card-button">Edit</button>
        `;
        child.getElementsByClassName("edit-card-button")[0].addEventListener("click", e => eventHandlers.onEditCardClickEventHandler(e));
        e.target.parentNode.append(child);

    },

    // Jonas Eventhandlers för edit-funktion
    addEditCardClickEventHandlers: function () {
        const editCardsButtons = document.getElementsByClassName("edit-card-button");
        Object.keys(editCardsButtons).forEach(key => {
            editCardsButtons[key].addEventListener("click", e => eventHandlers.onEditCardClickEventHandler(e))
        });
    },
    onEditCardClickEventHandler: function (e) {
        console.log("Klick");
        e.target.style.display = "none";
        e.target.parentNode.getElementsByClassName("card-description")[0].contentEditable = true;
        let btn = document.createElement("button");
        btn.class = "edit-done-button";
        btn.innerHTML = "Done";
        e.target.parentNode.append(btn);
        btn.addEventListener("click", function()
        {
            e.target.parentNode.getElementsByClassName("card-description")[0].contentEditable = false;
            e.target.parentNode.removeChild(btn);
            e.target.style.display = "block";
        })
    }
}