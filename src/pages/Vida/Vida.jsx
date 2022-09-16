import React from 'react'
import './Vida.css'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu/Menu';
import {useContext} from 'react'
import {Context} from '../../Context/Context'
const URLImg = "https://festupload.s3.amazonaws.com/";


export default function Vida() {

    const { user } = useContext(Context)
    const Ru =()=>{
        window.location.replace("https://unilab.edu.br/restauranteuniversitario/")
    }
    const Inter =()=>{
        window.location.replace("https://unilab.edu.br/onibus-intercampi/")
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
            <div className="imgContentVida">
                <h3 className="headerTitleVida">
                    UnilabTem App
                </h3>
                <img src="http://saofranciscodoconde.ba.gov.br/wp-content/uploads/2015/06/UNILAB-%E2%80%93-Universidade-da-Integra%C3%A7%C3%A3o-Internacional-da-Lusofonia-Afro-Brasileira.jpg" alt="" className='imgItemVida' />
            </div>
            <div className="services">
                <h4 className="serviceTitleVida">Servições</h4>
                <section className='sectionService'>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i class="fa-solid fa-book"></i> Biblioteca</h6>
                        <p className="serviceParagrafo">
                            Lorem ipsum dolor 
                            sit amet consectetur adipisicing
                            elit. Voluptate ullam qui asperiores veniam
                            dolores, tempora officia ducimus. Reprehenderit
                            ad laudantium voluptates necessitatibus 
                            incidunt iure dolorum vel 
                            ab! Ad, voluptatibus ex?
                        </p>
                        <i className="serviceLink">unilabtem.cf</i>
                    </div>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i class="fa-solid fa-bus"></i> Intercampis </h6>
                        <p className="serviceParagrafo">
                            Lorem ipsum dolor 
                            sit amet consectetur adipisicing
                            elit. Voluptate ullam qui asperiores veniam
                            dolores, tempora officia ducimus. Reprehenderit
                            ad laudantium voluptates necessitatibus 
                            incidunt iure dolorum vel 
                            ab! Ad, voluptatibus ex?
                        </p>
                        <i className="serviceLink" onClick={Inter}>Saiba mais...</i>
                    </div>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i class="fa-solid fa-utensils"></i> Restaurante Universitário (RU)</h6>
                        <p className="serviceParagrafo">
                            Lorem ipsum dolor 
                            sit amet consectetur adipisicing
                            elit. Voluptate ullam qui asperiores veniam
                            dolores, tempora officia ducimus. Reprehenderit
                            ad laudantium voluptates necessitatibus 
                            incidunt iure dolorum vel 
                            ab! Ad, voluptatibus ex?
                        </p>
                        <i className="serviceLink" onClick={Ru}>Saiba mais...</i>
                    </div>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i class="fa-solid fa-passport"></i> Documentação Para O Visto</h6>
                        <p className="serviceParagrafo">
                            Lorem ipsum dolor 
                            sit amet consectetur adipisicing
                            elit. Voluptate ullam qui asperiores veniam
                            dolores, tempora officia ducimus. Reprehenderit
                            ad laudantium voluptates necessitatibus 
                            incidunt iure dolorum vel 
                            ab! Ad, voluptatibus ex?
                        </p>
                        <i className="serviceLink">unilabtem.cf</i>
                    </div>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i class="fa-solid fa-graduation-cap"></i> Cursos de Graduação Unilab</h6>
                        <p className="serviceParagrafo">
                            Lorem ipsum dolor 
                            sit amet consectetur adipisicing
                            elit. Voluptate ullam qui asperiores veniam
                            dolores, tempora officia ducimus. Reprehenderit
                            ad laudantium voluptates necessitatibus 
                            incidunt iure dolorum vel 
                            ab! Ad, voluptatibus ex?
                        </p>
                        <i className="serviceLink">unilabtem.cf</i>
                    </div>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i class="fa-solid fa-flag"></i> PALOPS</h6>
                        <p className="serviceParagrafo">
                            Lorem ipsum dolor 
                            sit amet consectetur adipisicing
                            elit. Voluptate ullam qui asperiores veniam
                            dolores, tempora officia ducimus. Reprehenderit
                            ad laudantium voluptates necessitatibus 
                            incidunt iure dolorum vel 
                            ab! Ad, voluptatibus ex?
                        </p>
                        <i className="serviceLink">unilabtem.cf</i>
                    </div>
                </section>
            </div>
          
          
        </div>
    </div>
  )
}
