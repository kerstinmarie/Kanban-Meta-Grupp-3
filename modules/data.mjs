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
        console.log("parentnode", element.parentNode.parentNode);
        console.log("element", element);
        console.log(page.creatingNewCard)
        const description = element.children[1].innerText;
        let id = element.getAttribute("card-id");
        let column = "";
        if (page.creatingNewCard) {             //event.target har olika plats om det är nytt kort eller redigerar gammalt
            column = element.parentNode.parentNode.getElementsByClassName("column-name")[0].innerText;
            page.creatingNewCard = false;
        } else {
            column = element.parentNode.getElementsByClassName("column-name")[0].innerText;
        }
        console.log("desc:", description, "id", id, "col", column);
        return [id, { column: column, description: description, id: id }];

    },
    saveCardToLocalStorage: function (card) {
        console.log("save card", card);
        const [id, newCard] = this.createCardObjectFromHTMLElement(card);
        let storageToUpdate = this.getCardsFromLocalStorage();
        if (storageToUpdate === null) {
            storageToUpdate = {};
        }
        storageToUpdate[id] = newCard;
        localStorage.setItem("board", JSON.stringify(storageToUpdate));
        console.log("merged storage", storageToUpdate);

    },
    getCardsFromLocalStorage: function () {
        return JSON.parse(localStorage.getItem("board"));
    },
    deleteCardFromLocalStorage: function (e) {
        const id = e.target.parentNode.getAttribute("card-id");
        console.log("tar bort id:", e.target.parentNode.getAttribute("card-id"));
        let storageToUpdate = this.getCardsFromLocalStorage();
        const updatedStorage = (() => {
            let newStorageObj = {};
            Object.keys(storageToUpdate).forEach(k => {
                if (k !== id) {
                    newStorageObj[k] = { description: storageToUpdate[k].description, id: k, column: storageToUpdate[k].column }
                }
                console.log("id", k);
            })
            return newStorageObj;
        })();
        console.log("updated Storage", updatedStorage);
        localStorage.setItem("board", JSON.stringify(updatedStorage));
    },
    getCardsOrderFromDOM: function () {
        /*tar inga argument, returnerar ett objekt med föjande format 
        obj = {
            kolumnNamn1:{
                ordningsnumer1:{
                    cardId: kortid
                },
                ordningsnummer2:{
                    cardId: kortid
                }
            },
            kolumnnamn2:{
                ordningsnummer1:{
                    cardid:kortid......
                }....
            }....
            }*/

        const colNames = this.getColumnNames();
        const columnElements = document.getElementsByClassName("column");
        let cardOrderObject = {};
        colNames.forEach(colName => {
            Object.keys(columnElements).forEach(k => {
                const colElName = columnElements[k].getElementsByClassName("column-name")[0].innerText;
                if (colElName === colName) {
                    console.log("col el name", colElName, "colname", colName);
                    const cards = columnElements[k].getElementsByClassName("card");
                    let order = 0;
                    Object.keys(cards).forEach(k => {

                        const cardId = cards[k].getAttribute("card-id");

                        if (cardOrderObject[colName] === undefined) {
                            cardOrderObject[colName] = {};
                        }
                        cardOrderObject[colName][order] = { cardId: cardId }

                        order++;
                    })

                }

            })
        })
        return cardOrderObject;

    },
    getCardsOrderFromLocalStorage: function () {
        /*returnerar ett objekt med föjande format 
        obj = {
            kolumnNamn1:{
                ordningsnumer1:{
                    cardId: kortid
                },
                ordningsnummer2:{
                    cardId: kortid
                }
            },
            kolumnnamn2:{
                ordningsnummer1:{
                    cardid:kortid......
                }....
            }....
            }*/
        return JSON.parse(localStorage.getItem("cardOrder"));
    },
    saveCardsOrderToLocalStorage: function () {
        /*hämtar, stringifyar och sparar getCardsOrder-objektet i localstorage*/
        console.log("saving cards order");
        const cardsOrderObject = this.getCardsOrderFromDOM();
        localStorage.setItem("cardOrder", JSON.stringify(cardsOrderObject));
    }
}


