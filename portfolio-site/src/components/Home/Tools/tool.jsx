import "./tool.css"

const Techs = [
    {nome: "HTML", logo: "devicon-html5-plain", site:"https://html.com/"},
    {nome: "JavaScript", logo: "devicon-javascript-plain", site:"https://www.javascript.com/"},
    {nome: "CSS", logo: "devicon-css3-plain", site:"https://www.w3.org/Style/CSS/Overview.en.html"},
    {nome: "Python", logo: "devicon-python-plain", site:"https://www.python.org/"},
    {nome: "PHP", logo: "devicon-php-plain", site:"https://www.php.net/"},
    {nome: "Mysql", logo: "devicon-mysql-plain", site:"https://www.mysql.com/"}
]

function Tools(){
    return(
        <div id="toolpage">
            <h1>Minha caixinha de ferramentas <i class="fa-solid fa-toolbox"></i></h1>
            <h3>Tecnologias que usei para montar os projetos</h3>
            
            <div id="icon-tool">
                {Techs.map

                (function (Tech, index) {
                return(
                    <div className="icon-name" key={index} onClick={() => window.open(Tech.site, "_blank")}>

                    <i className={`icon ${Tech.logo}`}> </i>
                    <p>{Tech.nome}</p>

                    </div>
                    )
                })

                }
            </div>
            
        </div>

    )
}

export default Tools