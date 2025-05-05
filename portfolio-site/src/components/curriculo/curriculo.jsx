import "./curriculo.css"

function Curriculum(){
    return(
        <>
        <div id="pagecurriculo">
            <div id="video">
                <img src="/imagem/manutencao.gif" autoPlay muted loop playsinline id="videoemsi"></img>
            </div>
            <div id="frasevideo">
                <h1>Ops, esta pagina ainda está em produção</h1>
                <h1><a href="" onClick={()=> window.close()}>Click aqui</a> para continuar navegando pelo meu portfólio</h1>
            </div>
            </div>
        </>
    )
}

export default Curriculum