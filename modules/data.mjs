import { page } from './page.mjs';
import { eventHandlers } from "./eventHandlers.mjs";
export const data = {
    loginAuthentication: function()
    {
        let test = "test";

        let userNameInp = document.getElementById("username").value;
        let passwordInp = document.getElementById("password").value;
        document.getElementById("wrapper").innerHTML = page.getBoardPage();

        if(userNameInp == test && passwordInp == test){
            document.getElementById("wrapper").innerHTML = page.getBoardPage();
            eventHandlers.addOnAddCardBtnClickEventHandlers();
        }

        // 
        else{
            console.log("Fel lösen/användarnamn!");
        }


    }
}