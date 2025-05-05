import "./projetos.css"

function Projectcard({nome_projeto, descricao, imagem_src, link_projeto} ){
    return(
        <>
                <div className="projectsalocate">
                    <div className="conteudo"> 
                        <h3>{nome_projeto}</h3>
                        <p>{descricao}</p>
                            <div className="conteudobotao">
                                <p> Quer <strong>conhecer</strong> o <strong>Projeto?</strong> <strong>Clique</strong> em <strong>'Ver Projeto' </strong> </p>
                                <button> <Link to={link_projeto}> Ver Projeto</Link></button>
                                
                            </div>
                    </div>
                    <div className="imagem">
                        <img src={imagem_src} alt="" />
                    </div>
                </div>
                </>
    )
}

 function Projectcard2({nome_projeto, descricao, imagem_src, link_projeto}){
    return(
        <>
                <div className="projectsalocate">
                <div className="imagem3">
                        <img src={imagem_src} alt="" />
                    </div>
                    <div className="conteudo3"> 
                        <h3>{nome_projeto}</h3>
                        <p>{descricao}</p>
                            <div className="conteudobotao">
                                <p> Quer <strong>conhecer</strong> o <strong>Projeto?</strong> <strong>Clique</strong> em <strong>'Ver Projeto' </strong> </p>
                                <button> <Link to={link_projeto}> Ver Projeto</Link></button>
                            </div>
                    </div>
                </div>
                </>
    )
 }

export {Projectcard, Projectcard2};