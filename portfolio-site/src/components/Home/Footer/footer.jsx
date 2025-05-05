import "./footer.css"

function Footer(){
    return(
        <div id="footer-page">
            <h3>Obrigado por visitar meu portfólio</h3>
            <p>Conecte-se comigo através dos links abaixo</p>
            <div id="icones-final">
                <a href="" target="_blank" className="icones2" id="likedin2"> <i class="fa-brands fa-linkedin"></i> </a>
                <a href="https://encurtador.com.br/Bv5GP" target="_blank" class="icones2" id="wpp2"> <i class="fa-brands fa-whatsapp"></i> </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gabrielbcoimbra05@gmail.com&su=Portfólio%20de%20Programação&body=olá,%20Gabriel!%20gostaria%20de%20saber%20mais%20sobre%20seus%20projeto" target="blanck"
                 class="icones2" id="email2"> <i class="fa-solid fa-square-envelope"></i> </a>
                <a href="https://github.com/Gcoimbra05" target="_blank" class="icones2" id="git2"><i class="fa-brands fa-github"></i></a>
            </div>
            <div id="final">
                <a href=""><p>Politica de privacidade</p></a>
                <a href=""><p>Temos de uso</p></a>
                <p id="direitos">©2025 Gabriel Coimbra. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}

export default Footer