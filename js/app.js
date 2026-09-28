const totalCarrinho = 250;
const aviso = document.querySelector("#aviso-frete");

if (totalCarrinho >= 200) {
    aviso.textContent = "Frete grátis!";
} else {
    aviso.textContent = "Frete: R$ 20";
}

// Etapa 2: menu que abre e fecha
const btn = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");

btn.addEventListener("click", function () {
    menu.classList.toggle("aberto");
});

// Etapa 3: validação simples do formulário de contato
const form = document.querySelector("#contato-form");
const email = document.querySelector("#email");
const erro = document.querySelector("#erro");

form.addEventListener("submit", function (evento) {
    if (email.value === "") {
        evento.preventDefault();
        erro.textContent = "Digite seu e-mail.";
    }
});
