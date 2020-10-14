import { page } from './page.mjs';
import { eventHandlers } from "./eventHandlers.mjs";

export const data = {
    getData: async function (jsonName) {
        try {
            let response = await fetch(jsonName);
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    },
    loginAuthentication: async function () {
        let arrayUserObject = await data.getData('users.json');
        let userNameInput = document.getElementById("username").value;
        let passwordInput = document.getElementById("password").value;
        let errorMessage = document.getElementById("error-message");

        //Kollar ifall det finns en matchande användare
        let matchedUser = arrayUserObject.some(user => user.username === userNameInput && user.password === passwordInput);

        if (matchedUser) {
            localStorage.setItem("currentUser", userNameInput); //Sparar nuvarande användarnamn
            page.loadBoardPage();
        }

        // Måste meddela användaren att inloggningen misslyckades.
        else {
            errorMessage.innerHTML = " ";
            errorMessage.insertAdjacentHTML("beforeend", "<p class='error-statement'>Fel användarnamn eller lösenord! Vänligen försök igen.</p>");
            console.log("Fel lösen/användarnamn!");
        }
    },
    logoutUsers: function () {
        localStorage.removeItem("currentUser");
        console.log(localStorage, "currentUser");
        page.loadLoginPage();
    },
    getColumnNames: function () {
        const collection = document.getElementsByClassName("column-header");
        return Object.keys(collection).map(k => {
            return collection[k].childNodes[1].innerText;
        });
    },
    createCardObjectFromHTMLElement: function (element) {
        console.log("parentnode",element.parentNode);
        console.log("element",element);
        const description = element.children[1].innerText;
        const id = new Date().getTime();
        const column = element.parentNode.parentNode.getElementsByClassName("column-header")[0].innerText;
        console.log("desc:", description, "id", id, "col", column);
        return [id, { column: column, description: description }];

    },
    saveCardToLocalStorage: function (e) {
        console.log("save card", e);
        const [id, newCard] = this.createCardObjectFromHTMLElement(e);
        let storageToUpdate = this.getCardsFromLocalStorage();
        if(storageToUpdate === null){
            storageToUpdate = {};
        }
        storageToUpdate[id] = newCard;
        localStorage.setItem("board", JSON.stringify(storageToUpdate));
        console.log("merged storage", storageToUpdate);

    },
    getCardsFromLocalStorage: function () {
        return JSON.parse(localStorage.getItem("board"));
    }
}




////Gammal implementering av sparning av board


    // saveCardsToLocalStorage: function (boardObject) {
    //     const oldStorage = this.getCardsFromLocalStorage();
    //     let mergedStorage = { ...oldStorage, ...boardObject };
    //     console.log("old storage", oldStorage, "new storage", boardObject, "merged storage", mergedStorage);
    //     localStorage.setItem("board", JSON.stringify(mergedStorage));

    // },

        // getCardsFromColumns: function (cols) {
    //     let boardObject = {};

    //     const cardCollections = document.getElementsByClassName("enter-card");

    //     cols.forEach(col => {
    //         Object.keys(cardCollections).forEach(k => {
    //             if (cardCollections[k].parentNode.childNodes[1].childNodes[1].innerText === col) {
    //                 const cards = cardCollections[k].getElementsByClassName("card-description");
    //                 let id = 1;
    //                 Object.keys(cards).forEach(k => {
    //                     console.log(cards[k].innerText);
    //                     boardObject[`${(new Date().getTime() * id)}`] = { column: `${col}`, description: `${cards[k].innerText}` }
    //                     // boardObject.push({ column: `${col}`, description: `${cards[k].innerText}`, id: `${(new Date().getTime() * id)}` });
    //                     id += 1;
    //                 })
    //             }
    //         })
    //     })
    //     console.log("board object fetched from board to save", boardObject);
    //     return boardObject;
    // },