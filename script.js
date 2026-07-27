window.onload = function () {
    const mensagem = document.getElementById("mensagem-whatsapp");

    setTimeout(() => {
        mensagem.classList.add("esconder");
    }, 5000);
};