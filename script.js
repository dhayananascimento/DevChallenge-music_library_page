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

window.addEventListener("resize", () => {
    if(window.innerWidth > 768 ) {
        navegacao.style.display = "flex"
        fechar.style.display = "none"
    }
    else {
        navegacao.style.display = "none"
        fechar.style.display = "none"
    }
})
