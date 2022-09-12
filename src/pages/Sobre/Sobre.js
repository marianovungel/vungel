import React from 'react'
import './Sobre.css'
import Menu from '../../components/Menu/Menu'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../Context/Context'
const URLImg = "https://festupload.s3.amazonaws.com/";


export default function Sobre() {

    const { user } = useContext(Context)
 
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
                <Link className="nav-link active text-light" aria-current="page" to="/doacao">Doação</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="/">Venda</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="/sobre">Sobre</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-light" to="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Habitação
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/exe">Aluguel</Link></li>
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
        <div className='sidebarDesapego'>
            <div className='centerSidebar'>
                <div className='sobreheader'>Sobre...</div>
                <div className='sobreText'>
                    <p className='sobreTextParagrafo'>
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
                <div className='sobreParticipantes'>
                    <h4 className='headerSobrePartic'>Participantes</h4>
                    <div className='sobreparticipanteDiv'>
                        <img src='https://sig.unilab.edu.br/shared/verFoto?idFoto=494816&key=c7bc69afa99a94c1404d79d7bded526d' alt='#' className='imagemParti'/>
                        <div className='divDescParti'>
                            <b className='marginBott'>Doutor Sabi Yari Moïse Bandiri</b>
                            <p className='marginBott'>Professor</p>
                            <p className='marginBott'>Cordenador</p>
                            <p className='marginBott'>@gmail</p>
                        </div>
                    </div>
                    <div className='sobreparticipanteDiv'>
                        <img src='https://sig.unilab.edu.br/shared/verFoto?idFoto=643363&key=846b8cc5a7457f43ef9bbc9380a869e6' alt='#' className='imagemParti'/>
                        <div className='divDescParti'>
                            <b className='marginBott'>Doutor Tales Paiva Nogueira</b>
                            <p className='marginBott'>Professor</p>
                            <p className='marginBott'>Vice-coordenado</p>
                            <p className='marginBott'>@gmail</p>
                        </div>
                    </div>
                    <div className='sobreparticipanteDiv'>
                        <img src='./image/mariano.jpg' alt='#' className='imagemParti'/>
                        <div className='divDescParti'>
                            <b className='marginBott'>Mariano António Vunge</b>
                            <p className='marginBott'>Graduando</p>
                            <p className='marginBott'>Colaborador</p>
                            <p className='marginBott'>@gmail</p>
                        </div>
                    </div>
                    <div className='sobreparticipanteDiv'>
                        <img src='https://cdn-icons-png.flaticon.com/512/74/74472.png' alt='#' className='imagemParti'/>
                        <div className='divDescParti'>
                            <b className='marginBott'>Marcos Domingos Simão Kiacola</b>
                            <p className='marginBott'>Graduando</p>
                            <p className='marginBott'>Colaborador</p>
                            <p className='marginBott'>@gmail</p>
                        </div>
                    </div>
                    <div className='sobreparticipanteDiv'>
                        <img src='https://cdn-icons-png.flaticon.com/512/74/74472.png' alt='#' className='imagemParti'/>
                        <div className='divDescParti'>
                            <b className='marginBott'>Sumaé Embaló</b>
                            <p className='marginBott'>Graduando</p>
                            <p className='marginBott'>Colaborador</p>
                            <p className='marginBott'>@gmail</p>
                        </div>
                    </div>
                    <div className='sobreparticipanteDiv'>
                        <img src='https://cdn-icons-png.flaticon.com/512/74/74472.png' alt='#' className='imagemParti'/>
                        <div className='divDescParti'>
                            <b className='marginBott'>Nena António Impanta</b>
                            <p className='marginBott'>Graduando</p>
                            <p className='marginBott'>Colaborador</p>
                            <p className='marginBott'>@gmail</p>
                        </div>
                    </div>
                    
                </div>
                <div className='sobreParticipantes'>
                    <h4 className='headerSobrePartic'>Redes sociais...</h4>
                    <div className='sobreparticipanteDiv'>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
