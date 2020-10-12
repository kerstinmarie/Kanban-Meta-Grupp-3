export const page = {
    getFrontPage: function(){
        return  `
        <header class="page-header">
        <div class="logo-keeeper"><h2 class="logotext">Kanban bräda</h2></div>
   </header>
        <main>
            <div class="main">
                <div class="login-container">
                    <header>
                        <h1>Logga in</h1>
                    </header>
                        <label for="username">Användarnamn: </label>
                        <input id="username" name="username" type="text" placeholder="Användarnamn">
                        <label for="username">Lösenord: </label>
                        <input id="password" name="password" type="password" placeholder="Lösenord">
                        <button id="login-button">Logga in</button> 
                </div>
            </div>    
        </main>
   <footer class="footer"></footer>
   `
},
    getBoardPage: function(){
        return  `
        <header class="page-header">
        <div class="logo-keeeper">
            <h2 class="logotext">Kanban bräda</h2>
        </div>
    </header>
    <main>
        <div class="main">
            <div class="flex-container float-left">
                <div id="todo-column" class="column">
                    <header class="column-header">
                        <h3>Todo</h3>
                    </header>
                    <div class="enter-card">
                        <button class="add-card-button">+ Lägg till ett kort</button>
                    </div>
                    <div class="card">
                        <p>Ett litet cardtest med lite text och lite text till</p>
                    </div>
                    <div class="card">
                        <p>Ytterligare ett litet cardtest med lite text</p>
                    </div>
                    <div class="card">
                        <p>Löksås ipsum redan omfångsrik häst tid fram bäckasiner, jäst annat kom vidsträckt regn
                            som samma, av så hav göras stora redan. </p>
                    </div>
                    <div class="card">
                        <p>Sorgliga strand nya bäckasiner av genom miljoner groda åker annan där helt omfångsrik
                            dimma, </p>
                    </div>
                    <div class="card">
                        <p>Omfångsrik strand bra vi år dimmhöljd träutensilierna sitt, ser faktor rännil sjö ännu
                            ta.</p>
                    </div>
                    <div class="card">
                        <p>Ännu ett litet cardtest med text</p>
                    </div>
                    <div class="card">
                        <p>Löksås ipsum redan omfångsrik häst tid fram bäckasiner, jäst annat kom vidsträckt regn
                            som samma, av så hav göras stora redan. </p>
                    </div>
                    <div class="card">
                        <p>Sorgliga strand nya bäckasiner av genom miljoner groda åker annan där helt omfångsrik
                            dimma, </p>
                    </div>
                    <div class="card">
                        <p>Omfångsrik strand bra vi år dimmhöljd träutensilierna sitt, ser faktor rännil sjö ännu
                            ta.</p>
                    </div>
                </div>
                <div id="doing-column" class="column">
                    <header class="column-header">
                        <h3>Doing</h3>
                    </header>
                    <div class="enter-card">
                        <button class="add-card-button">+ Lägg till ett kort</button>
                    </div>
                </div>
                <div id="test-column" class="column">
                    <header class="column-header">
                        <h3>Test</h3>
                    </header>
                    <div class="enter-card">
                        <button class="add-card-button">+ Lägg till ett kort</button>
                    </div>
                    <div class="card">
                        <p>Ännu ett litet cardtest med text</p>
                    </div>
                    <div class="card">
                        <p>Löksås ipsum redan omfångsrik häst tid fram bäckasiner, jäst annat kom vidsträckt regn
                            som samma, av så hav göras stora redan. </p>
                    </div>
                    <div class="card">
                        <p>Sorgliga strand nya bäckasiner av genom miljoner groda åker annan där helt omfångsrik
                            dimma, </p>
                    </div>
                    <div class="card">
                        <p>Omfångsrik strand bra vi år dimmhöljd träutensilierna sitt, ser faktor rännil sjö ännu
                            ta.</p>
                    </div>
                </div>
                <div id="done-column" class="column">
                    <header class="column-header">
                        <h3>Done</h3>
                    </header>
                    <div class="enter-card">
                        <button class="add-card-button">+ Lägg till ett kort</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="footer">
    </footer>
`
    }
}