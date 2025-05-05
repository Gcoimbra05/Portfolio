import "./sobre.css"

function About(){
    
return(
        <>  
        <div id="page">
            <div id="quemsou" className="text2">
                <h1>Afinal,</h1>
                <h2>quem é o Gabriel?</h2>
                <p>Um pouco mais sobre mim e minha carreira no mundo da tecnologia</p>
            </div>

            <div id="complemento" className="text2">
            <h2>Um caminho até chegar aos códigos</h2>
                <p className="duasp">
                 Desde a época escolar, tive interesse em tecnologia, mas segui inicialmente outra trajetória profissional. Durante a pandemia, fiz um curso de lógica de programação pela UFV, onde tive meu primeiro contato com programação usando Portugol. Isso despertou meu interesse por lógica e automação, levando-me a explorar Excel avançado, fórmulas e processos automatizados.
                 </p>
                <p className="duasp">
                    Mais tarde, aprofundei meus estudos em desenvolvimento web por meio do curso Full Stack da AlphaCode, adquirindo conhecimento em HTML, CSS, JavaScript e PHP. Após busquei conhecimento com cursos da Hashtag ampliando meu conhecimento em Python e Data Analytics, além de aprender Power BI. Paralelamente, iniciei minha graduação em Ciência da Computação.
                 </p>
                <p id="ultimap">
                    Atualmente, estou focado no desenvolvimento de soluções inovadoras, ampliando minhas habilidades técnicas e aplicando meu conhecimento para criar projetos práticos.
                </p>
            <div id="curriculobotao">
                <p> Quer <strong>conhecer</strong> meu <strong>currículo?</strong> <strong>Clique</strong> em <strong>'Saiba mais'</strong> para visualizar a versão <strong>interativa </strong> ou fazer o <strong>download em PDF</strong></p>
                <a href="./curriculo" target="blank"><button>Saiba Mais</button></a>
            </div>
            </div>

        </div>
        </>
 )
    
}


export default About