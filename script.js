let circulo = document.querySelector(".circulo")
    let imgCopo = document.querySelector(".starbucks")
    let verde = document.querySelector(".verde")
    let rosaClaro = document.querySelector(".amarelo")
    let rosa = document.querySelector(".rosa")

    verde.addEventListener("click", () => {
        imgCopo.src = "./imagens/img1.png"
        circulo.style.background = "#017143"
    })

    rosaClaro.addEventListener("click", () => {
        imgCopo.src = "./imagens/img2.png"
        circulo.style.background = "#eb7495"
    })    

    rosa.addEventListener("click", () => {
        imgCopo.src = "./imagens/img3.png"
        circulo.style.background = "#d752b1"
        circulo.style.transition = "1s"
    })