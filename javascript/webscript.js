async function getData() {
    const response = await fetch("https://api.json-generator.com/templates/BQZ3wDrI6ts0/data?access_token=n7lhzp6uj5oi5goj0h2qify7mi2o8wrmebe3n5ad");

    const pius = await response.json();

    console.log(pius);

}


let piuSendoEscrito = document.getElementById("piuTextArea");
piuSendoEscrito.addEventListener("input", () => {
    let charCount = (piuSendoEscrito.value).length;

    document.getElementById("contador").textContent = `${charCount}/140`;
    document.getElementById("contador").style.fontWeight = 'normal';

    if (charCount > 140) {
        document.getElementById("contador").style.color = 'rgb(223, 63, 63)';
    }

    else {
        document.getElementById("contador").style.color = "#494444";
    }
});

let botaoPostar = document.getElementById("Post");
botaoPostar.addEventListener("click", () => {
    let charCount = (piuSendoEscrito.value).length;
    
    if (charCount == 0) {
        document.getElementById("contador").textContent = `Piu vazio!`;
        document.getElementById("contador").style.fontWeight = 'bold';
    }
    
    else if (charCount > 140) {
        document.getElementById("contador").textContent = `Piu grande demais!`;
        document.getElementById("contador").style.fontWeight = 'bold';
    }

    else {
        // fazer essa parte
    }

});