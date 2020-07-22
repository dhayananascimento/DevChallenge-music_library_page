const abrir = document.querySelector('.abrir')
const fechar = document.querySelector('.fechar')

const navegacao = document.querySelector('.navegacao')


abrir.addEventListener("click", () => {
    navegacao.style.display = "flex"
    fechar.style.display = "block"
})

fechar.addEventListener("click", () => {
    navegacao.style.display = "none"
    fechar.style.display = "none"
})
