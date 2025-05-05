import "./menulateral.css"

function Sidemenu(){

    //fazer o menu aparecer e sumir do lado
    window.addEventListener("scroll", function(){
        const menulado = document.getElementById("menulateral")
        const ladomenu = window.scrollY

        if( ladomenu < 250){
            menulado.style.transform= "translatex(-100%)"
        } else{
            menulado.style.transform= "translatex(0%)"
        }
    })

    //Clicar para aparecer o menu lateral
    const aparecerlateral= () => {
        const aparecermenu = document.getElementById("listalateral")
        aparecermenu.classList.toggle("lateral")

        const mexermenu = document.getElementById("menulateral")
        mexermenu.classList.toggle("clickvolta")
    }

    //aparecer e recolher os projetos (ease, medium e hard) em baixo
    const clickmenu2= () =>{
        const submenu =document.getElementById("projetolista2")
        submenu.classList.toggle("descelistas")

        const mexertech= document.getElementById("tech")
        mexertech.classList.toggle("descertech")
    }

    //Aparecer e recolher os temas (dark e white)
    const temalateral = () => {
        const listatema = document.getElementById("lista-tema")
        listatema.classList.toggle("descelistas")
    }

    //Tema black
    const temablack= () =>{
        document.documentElement.classList.add("dark-mode")
    }
    //Tema White
    const temawhite = () =>{
        document.documentElement.classList.remove("dark-mode")
    }

    return(
        <>
        <div id="menulateral" onClick={aparecerlateral}>
                <p>≡</p>
            </div>

        <div id="listalateral">
            <h2>Menu</h2>
            <div id="listalateral-menu">
                <p><a href="#complemento">Sobre</a></p>

                <p onClick={clickmenu2} >Projetos <span className="seta1">▼</span>
                <ul id="projetolista2">
                    <li><a href="#easy">Easy</a></li>
                    <li><a href="#medium">Medium</a></li>
                    <li><a href="#hard">Hard</a></li>
                </ul>

                </p>
                <p id="tech">
                    <a href="#icon-tool">Tecnologias</a>
                </p>
                
                <p onClick={temalateral}>Tema <span className="seta1">▼</span>
                <ul id="lista-tema">
                    <li onClick={temawhite}>Claro</li>
                    <li onClick={temablack}>Escuro</li>
                </ul>

                </p>
            </div>
            </div>
        </>
    )
}

export default Sidemenu