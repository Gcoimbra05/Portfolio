import "./Central.css"


function Central(){

    window.addEventListener("scroll", function(){
        const icon= document.getElementById("iconescroll")
        const aparecer = window.scrollY

    if (aparecer < 280) {

        icon.style.opacity="0"
        icon.style.pointerEvents= "none"
    } else{
        icon.style.opacity="0.5"
        icon.style.pointerEvents= "auto"
    }

    })

    

return(
<>

<div id="page1">

    <div class="apresentacao">
        <h1>Olá! Me chamo Gabriel.</h1>
        <h2>Sou um desenvolvedor full stack</h2>
        <p>com objetivo de criar soluções inovadoras e comprometido em entregar resultados de alta qualidade.</p>

        <div id="icons">
        <a href="" target="_blank" className="icones" id="first-icon"> <i class="fa-brands fa-linkedin"></i> </a>
        <a href="https://encurtador.com.br/Bv5GP" target="_blank" class="icones" id="wpp"> <i class="fa-brands fa-whatsapp"></i> </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gabrielbcoimbra05@gmail.com&su=Portfólio%20de%20Programação&body=olá,%20Gabriel!%20gostaria%20de%20saber%20mais%20sobre%20seus%20projeto" target="blacnk"
        class="icones" id="email"> <i class="fa-solid fa-square-envelope"></i> </a>
        <a href="https://github.com/Gcoimbra05" target="_blank" class="icones" id="git"><i class="fa-brands fa-github"></i></a>
        </div>
         </div>

    <div id="imagem1"> 
        <img src= "/imagem/gabriel2.jpeg" alt="minhafoto" id="foto1" />
    </div>

    <div id="iconescroll">
            <a href="#imagem1"><i class="fa-solid fa-chevron-up"></i></a>
        </div>
</div>
</>
)
}
export default Central;