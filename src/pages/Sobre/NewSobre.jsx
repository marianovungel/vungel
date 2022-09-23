import React from 'react'
import './NewSobre.css'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import {Context} from '../../Context/Context'
import Menu from '../../components/Menu/Menu';
const URLImg = "https://festupload.s3.amazonaws.com/";

export default function NewSobre() {

    const { user } = useContext(Context)

    const SabiFunction  = ()=>{
        window.open('http://lattes.cnpq.br/2818665148998081')
    }
    const TalesFunction  = ()=>{
        window.open('http://lattes.cnpq.br/3410512550905802')
    }
    const MarianoFunction  = ()=>{
        window.open('http://lattes.cnpq.br/0916995612340632')
    }

  return (
    <div className='desapego'>
        <div className='OI' >
            <Menu />
        </div>
        <div className='menuBootstrap' >
        <nav className="navbar navbar-expand-lg navbar-light  menuBootstrap">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <div className='logoBootstrap'>
                    <img className='imagemLogo' src="./image/preta.png" alt="logoUnilabtem" />
                </div>
            </Link>
            <button className="bg-light braca" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-light braca"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">Vida na Unilab</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/doacao">Doação</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="/venda">Venda</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="/sobre">Sobre</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-light" to="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Habitação
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/habitacao-aluguel">Aluguel</Link></li>
                    <li><Link className="dropdown-item" to="/habitacao-compartilhar">Compartilhamento</Link></li>
                    <li><Link className="dropdown-item" to="/aluguel-cadastrando">Divulgar Aluguel</Link></li>
                </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/user">
                        {user.profilePic ? (<img src={URLImg+user.profilePic} alt="" className='imgMenuHumburguer' />):
                        (<i>Usuário</i>)}
                    </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </div>
        <div className='vidaContent'>
            <div className="servicess">

                <section className='sectionService'>
                    <div className="titleNewSobre">
                        <h3 className="titleSobreText">
                            Sobre...
                        </h3>
                    </div>
                    <div className="paragrafoDesc">
                        <p className="descP">
                        Unilabtem é uma plataforma digital web de fácil manejo que simplifica a vida dos
                        seus usuários, que buscam por seus serviços que são oferecidos por ela. O objetivo
                        desta plataforma é estreitar a distância entre o usuário que divulga e o que deseja
                        aderir ou comprar o produto que esteja a ser divulgado nas cidades dos campus da UNILAB
                        (Ceará e Bahia) e das comunidades em torno da universidade,
                        assim ajuda tornando mais fácil encontrar as coisas perto de onde estiveres.
                        A metodologia usada no desenvolvimento é em MERN (Mongodb Express React Js Node js), com
                        react js no lado do usuário, node js e express no lado do servidor e mongodb como banco de
                        dados não relacional, tendo criptografia moderna de dados sensíveis no servidor para garantir
                        segurança de informações dos usuário da plataforma, e animações no frontend com Vanilla tilt
                        js e  CSS para deixar mais convidativo e interessante a usabilidade. Os resultados alcançados
                        pelo projeto atualmente está aproximadamente 67% concluído e já  conta com a página de login,
                        cadastro, venda, Aluguel, compartilhamento e de doação (desapego) funcionando na íntegra, podendo
                         criar uma conta, fazer login,  
                        postar, ver, editar, deletar, pesquisar e filtrar produtos a venda e/ou em doação. 
                        </p>
                    </div>
                    <h3 className='participantesTitleNew'>Participantes</h3>
                    <div className="userNewSobre">
                        <img src="https://sig.unilab.edu.br/shared/verFoto?idFoto=494816&key=c7bc69afa99a94c1404d79d7bded526d" alt="" className="imagemNewSobre" />
                        <div className="descNewSobre">
                            <i className="cargoNewSobre">Cordenador</i>
                            <b className="nameNewSobre">Prof.Dr. Sabi Yari Moïse Bandiri</b>
                            <i className="liteNewSobre" onClick={SabiFunction}>http://lattes.cnpq.br/2818665148998081</i>
                        </div>
                    </div>
                    <div className="userNewSobre">
                        <img src="https://sig.unilab.edu.br/shared/verFoto?idFoto=643363&key=846b8cc5a7457f43ef9bbc9380a869e6" alt="" className="imagemNewSobre" />
                        <div className="descNewSobre">
                        <i className="cargoNewSobre">Vice-Coordenador</i>
                            <b className="nameNewSobre">Prof.Dr. Tales Paiva Nogueira</b>
                            <i className="liteNewSobre" onClick={TalesFunction}>http://lattes.cnpq.br/3410512550905802</i>
                        </div>
                    </div>
                    <div className="userNewSobre">
                        <img src="./image/mariano.jpg" alt="" className="imagemNewSobre" />
                        <div className="descNewSobre">
                            <i className="cargoNewSobre">Colaborador</i>
                            <b className="nameNewSobre">Mariano António Vunge</b>
                            <i className="formacaoNewSobre">Graduando</i>
                            <i className="liteNewSobre" onClick={MarianoFunction}>http://lattes.cnpq.br/0916995612340632</i>
                        </div>
                    </div>
                    <div className="userNewSobre">
                        <img src="./image/marcos.png" alt="" className="imagemNewSobre" />
                        <div className="descNewSobre">
                            <i className="cargoNewSobre">Colaborador</i>
                            <b className="nameNewSobre">Marcos Domingos Simão Kiacola</b>
                            <i className="formacaoNewSobre">Graduando</i>
                            <i className="liteNewSobre"></i>
                        </div>
                    </div>
                    <div className="userNewSobre">
                        <img src="./image/sumae.jpeg" alt="" className="imagemNewSobre" />
                        <div className="descNewSobre">
                            <i className="cargoNewSobre">Colaborador</i>
                            <b className="nameNewSobre">Sumaé Embaló</b>
                            <i className="formacaoNewSobre">Graduando</i>
                            <i className="liteNewSobre"></i>
                        </div>
                    </div>
                </section>
            </div>
          
          
        </div>
    </div>
  )
}
