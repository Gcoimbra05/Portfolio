import "../Header/Menu.css"

function Top(){

    window.addEventListener ("scroll", function() {
        const menu = document.getElementById("menu")
        const detectscroll= window.scrollY
        
        if (detectscroll > 200) {
            menu.style.transform= "translatey(-100%)"
        
        } else {
             menu.style.transform= "translatey(0%)"
        }

    })

    const blackwhite = () =>{
        /**Mexer o circulo */
        const bola= document.getElementById("circulo")
        bola.classList.toggle("mexerbola")

        /*Clarear e escurecer lua e sol */
        const moon= document.getElementById("lua")
        moon.classList.toggle("opacidadecem")
        const sun= document.getElementById("sol")
        sun.classList.toggle("opacidadecin")

        document.documentElement.classList.toggle("dark-mode")

    }

    return(

        <>
        
        <div id="menu">
            <div id="nome"> G. Coimbra </div>

            <div className="components" id="sobre"> <a href="#complemento">Sobre</a></div>
            <div className="components" id="projects">
                <span id="spanprojects">Projetos<span id="seta">▼</span>
                </span>
                <ul id="project-list" className="lista">
                    <li><a href="#easy">Easy</a></li>
                    <li><a href="#medium">Medium</a></li>
                    <li><a href="#hard">Hard</a></li>
                </ul>
                
                </div>


            <div className="components" id="tecnologia"> <a href="#icon-tool">Tecnologia</a></div>

            <div id="pagecolor">

                <div id="iconesblackwhite">
                    <span id="sol" className="sollua" onClick={blackwhite}><i class="fa-solid fa-sun"></i></span>
                    <span id="lua" className="sollua" onClick={blackwhite}><i class="fa-solid fa-moon"></i></span>
                </div>

                <div id="movecirculo" onClick={blackwhite}>
                    <span id="circulo"><i class="fa-solid fa-circle"></i></span>
                </div>
            
                 </div>

             </div>
        
        </>
    )
} 
 
export default Top