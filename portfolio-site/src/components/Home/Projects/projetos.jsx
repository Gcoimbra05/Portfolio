import "./projetos.css"
import {Projectcard, Projectcard2} from "./projectcard"

function Projectsgeral(){
    return(
        <div id="projectpage">
            <h1>Meus Projetos</h1>
            <p>Nesta seção iremos pecorrer por meus projetos, sendo divido em 3 etapas: Easy, Medium, Hard</p>

            <div className="cards">
                <h2 className="titulo1" id="easy">Easy</h2>
                 
                {/*Projeto 1*/}
                <Projectcard
                nome_projeto= "Projeto 1"
                descricao= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic sapiente deleniti, praesentium vero excepturi ad esse similique autem tempora voluptate fugiat illo. Recusandae soluta accusamus neque provident quam ea?"
                imagem_src= "/imagem/calculadora.png"
                link_projeto="./curriculo"
                />

                {/*Projeto 2*/}
                <Projectcard2
                nome_projeto= "Projeto 2"
                descricao= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic sapiente deleniti, praesentium vero excepturi ad esse similique autem tempora voluptate fugiat illo. Recusandae soluta accusamus neque provident quam ea?"
                imagem_src= "/imagem/calculadora.png"
                link_projeto="./curriculo"
                />

                {/*Projeto 3*/}
                <Projectcard
                nome_projeto= "Projeto 3"
                descricao= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic sapiente deleniti, praesentium vero excepturi ad esse similique autem tempora voluptate fugiat illo. Recusandae soluta accusamus neque provident quam ea?"
                imagem_src= "/imagem/calculadora.png"
                link_projeto="./curriculo"
                />

            </div>
            <div className="cards">
            <h2 className="titulo1" id="medium">Medium</h2>
                {/*Projeto 1*/}
                <Projectcard2
                nome_projeto= "Projeto 2"
                descricao= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic sapiente deleniti, praesentium vero excepturi ad esse similique autem tempora voluptate fugiat illo. Recusandae soluta accusamus neque provident quam ea?"
                imagem_src= "/imagem/calculadora.png"
                link_projeto="./curriculo"
                />

                {/*Projeto 2*/}
                <Projectcard
                nome_projeto= "Projeto 1"
                descricao= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic sapiente deleniti, praesentium vero excepturi ad esse similique autem tempora voluptate fugiat illo. Recusandae soluta accusamus neque provident quam ea?"
                imagem_src= "/imagem/calculadora.png"
                link_projeto="./curriculo"
                />

                {/*Projeto 3*/}
                <Projectcard2
                nome_projeto= "Projeto 2"
                descricao= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic sapiente deleniti, praesentium vero excepturi ad esse similique autem tempora voluptate fugiat illo. Recusandae soluta accusamus neque provident quam ea?"
                imagem_src= "/imagem/calculadora.png"
                link_projeto="./curriculo"
                />

            </div>
            <div className="cards">
            <h2 className="titulo1" id="hard">Hard</h2>
                 
                 {/*Projeto 1*/}
                 <Projectcard
                 nome_projeto= "Projeto 1"
                 descricao= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic sapiente deleniti, praesentium vero excepturi ad esse similique autem tempora voluptate fugiat illo. Recusandae soluta accusamus neque provident quam ea?"
                 imagem_src= "/imagem/calculadora.png"
                 link_projeto="./curriculo"
                 />
 
                 {/*Projeto 2*/}
                 <Projectcard2
                 nome_projeto= "Projeto 2"
                 descricao= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic sapiente deleniti, praesentium vero excepturi ad esse similique autem tempora voluptate fugiat illo. Recusandae soluta accusamus neque provident quam ea?"
                 imagem_src= "/imagem/calculadora.png"
                 link_projeto="./curriculo"
                 />
            </div>
        </div>
            
    )

}

export default Projectsgeral