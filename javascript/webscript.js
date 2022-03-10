async function getData() {
    const response = await fetch("https://api.json-generator.com/templates/BQZ3wDrI6ts0/data?access_token=n7lhzp6uj5oi5goj0h2qify7mi2o8wrmebe3n5ad");

    const pius = await response.json();

    console.log("oi")
    console.log(pius)

    pius.forEach(piu => {
        const {user, text, created_at} = piu;
        const {username, first_name, last_name, email, photo} = user;

        createPiu(username, first_name, last_name, photo, text, created_at);
    })
}


function createPiu(username, first_name, last_name, photo, text, created_at) {
    
    // Criacao dos elementos
    const piuContainer = document.createElement("div");
    const piuInfoContainer = document.createElement("div");
    const piuInfoSubcontainer = document.createElement("div");
    const userPhoto = document.createElement("img");
    const realnameText = document.createElement("p");
    const usernameText = document.createElement("p");
    const timeElapsed = document.createElement("p");
    const piuTextContainer = document.createElement("div");
    const piuText = document.createElement("p");
    const piuInteractionsContainer = document.createElement("div");
    const piuLikeContainer = document.createElement("div");
    const piuLikeIcon = document.createElement("img");
    const piuLikeCounter = document.createElement("p");
    const piuSaveIcon = document.createElement("img");
    const piuDeleteIcon = document.createElement("img");

    // Associacao de cada elemento a uma classe
    piuContainer.classList.add("piu-container");
    piuInfoContainer.classList.add("piu-info-container");
    piuInfoSubcontainer.classList.add("piu-info-subcontainer");
    userPhoto.classList.add("user-photo");
    realnameText.classList.add("realname-text");
    usernameText.classList.add("username-text");
    timeElapsed.classList.add("time-elapsed");
    piuTextContainer.classList.add("piu-text-container");
    piuText.classList.add("piu-text");
    piuInteractionsContainer.classList.add("piu-interactions-container");
    piuLikeContainer.classList.add("piu-like-container");
    piuLikeIcon.classList.add("piu-like-icon");
    piuLikeCounter.classList.add("piu-like-counter");
    piuSaveIcon.classList.add("piu-save-icon");
    piuDeleteIcon.classList.add("piu-delete-icon");

    // Pega o elemento feed
    const piuFeed = document.querySelector(".feed");


    // Implementa hierarquia entre elementos
    piuFeed.appendChild(piuContainer);

    piuContainer.appendChild(piuInfoContainer);
    piuInfoContainer.appendChild(piuInfoSubcontainer);
    piuInfoSubcontainer.appendChild(userPhoto);
    piuInfoSubcontainer.appendChild(realnameText);
    piuInfoSubcontainer.appendChild(usernameText);
    piuInfoContainer.appendChild(timeElapsed);

    piuContainer.appendChild(piuTextContainer);
    piuTextContainer.appendChild(piuText);
    piuTextContainer.appendChild(piuInteractionsContainer);
    piuInteractionsContainer.appendChild(piuLikeContainer);
    piuLikeContainer.appendChild(piuLikeIcon);
    piuLikeContainer.appendChild(piuLikeCounter);
    piuInteractionsContainer.appendChild(piuSaveIcon);
    piuInteractionsContainer.appendChild(piuDeleteIcon);


    // Preenche elementos com os dados de cada piu
    userPhoto.src = photo;
    realnameText.innerText = first_name + " " + last_name;
    usernameText.innerText = "@" + username;
    piuText.innerText = text;

    timeElapsed.innerText = determineTimeElapsed(created_at);

    piuLikeIcon.src = "../Images/notLikedIcon.svg"
    piuLikeCounter.innerText = "0"
    piuSaveIcon.src = "../Images/saveIcon.svg"
    piuDeleteIcon.src = "../Images/deleteIcon.svg"
}


function determineTimeElapsed(created_at) {

    // Determina o tempo entre agora e a postagem original do piu
    // Constantes uteis
    const minute_in_ms = (60 * 1000);
    const hour_in_ms = minute_in_ms * 60;
    const day_in_ms = hour_in_ms * 24;
    const year_in_ms = day_in_ms * 365;

    // Tempo transcorrido desde o piu, em milisegundos
    let timeElapsed_ms = Date.now() - new Date(created_at);

    if (timeElapsed_ms >= year_in_ms) {
        timeElapsed_years = Math.floor(timeElapsed_ms / (year_in_ms));
        timeElapsed_str = timeElapsed_years.toString() + "y";
    }

    else if (timeElapsed_ms >= day_in_ms) {
        timeElapsed_days = Math.floor(timeElapsed_ms / day_in_ms);
        timeElapsed_str = timeElapsed_days.toString() + "d";
    }

    else if (timeElapsed_ms >= hour_in_ms) {
        timeElapsed_hours = Math.floor(timeElapsed_ms / hour_in_ms);
        timeElapsed_str = timeElapsed_hours.toString() + "h";
    }

    else {
        timeElapsed_minutes = Math.floor(timeElapsed_ms / minute_in_ms);
        timeElapsed_str = timeElapsed_minutes.toString() + "h";
    }

    return timeElapsed_str;
    
}



let piuSendoEscrito = document.getElementById("piuWriterTextArea");
piuSendoEscrito.addEventListener("input", () => {
    let charCount = (piuSendoEscrito.value).length;

    document.getElementById("charContador").textContent = `${charCount}/140`;
    document.getElementById("charContador").style.fontWeight = 'normal';

    if (charCount > 140) {
        document.getElementById("charContador").style.color = 'rgb(223, 63, 63)';
    }

    else {
        document.getElementById("charContador").style.color = "#494444";
    }
});

let botaoPostar = document.getElementById("Post");
botaoPostar.addEventListener("click", () => {
    let charCount = (piuSendoEscrito.value).length;
    
    if (charCount == 0) {
        document.getElementById("charContador").textContent = `Piu vazio!`;
        document.getElementById("charContador").style.fontWeight = 'bold';
    }
    
    else if (charCount > 140) {
        document.getElementById("charContador").textContent = `Piu grande demais!`;
        document.getElementById("charContador").style.fontWeight = 'bold';
    }

    else {
        // fazer essa parte
    }

});


getData();