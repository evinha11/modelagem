let cachorros = [];

function carregarFotosDeCachorros() {
    let url = "https://dog.ceo/api/breeds/image/random/10";
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            cachorros = data.message;
            let gallery = document.getElementById("gallery");
            gallery.innerHTML = "";
            
            cachorros.forEach(imageUrl => {
                let imgElement = document.createElement("img");
                imgElement.src = imageUrl;
                gallery.appendChild(imgElement);
            });

            iniciarTrocaAleatoria();
        })
        .catch(error => console.error("Erro ao carregar as fotos: ", error));
}

function iniciarTrocaAleatoria() {
    setInterval(() => {
        if (cachorros.length > 0) {
            let idAleatorio = Math.floor(Math.random() * cachorros.length);
            let imagens = document.querySelectorAll(".gallery img");
            imagens[idAleatorio].src = "https://dog.ceo/api/breeds/image/random";
        }
    }, 3000);
}
