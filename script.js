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
    })

    let intervalo = 2500
    let slide = 1;

    function transicao() {
        // document.querySelector(".starbucks").style.opacity = "0";
        imgCopo.style.opacity = "0";

        setTimeout(function(){
            // document.querySelector(".starbucks").style.opacity = "1";
            imgCopo.style.opacity = "1";
            switch(slide) {
                case 1:
                    slide2(); break;
                case 2:
                    slide3(); break;                
                default:
                    slide1();
                    slide = 0;
            }
            slide++;
        }, 500)
    }

    function slide1() {        
        imgCopo.src = "./imagens/img1.png"        
        setTimeout(transicao, intervalo)
        circulo.style.background = "#017143"
    }

    function slide2() {        
        imgCopo.src = "./imagens/img2.png"
        setTimeout(transicao, intervalo)
        circulo.style.background = "#eb7495"
    }

    function slide3() {        
        imgCopo.src = "./imagens/img3.png"
        setTimeout(transicao, intervalo)
        circulo.style.background = "#d752b1"
    }    
    
    function toggleMode() {
        var body = document.body;
        let lua = document.querySelector(".lua")
        var theme = 0

        body.classList.toggle("dark-mode");

        var isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);

        if(isDarkMode) {
            lua.innerHTML = '<i class="fas fa-sun"></i>';
        }
        else
            lua.innerHTML = '<i class="fas fa-moon"></i>';
    }

    window.addEventListener('load', e => {
        let lua = document.querySelector(".lua")
        var isDarkMode = localStorage.getItem("darkMode") === "true";        

        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            lua.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
        
    