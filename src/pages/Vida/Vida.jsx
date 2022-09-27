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
        window.open("https://unilab.edu.br/restauranteuniversitario/")
    }
    const Inter =()=>{
        window.open("https://unilab.edu.br/onibus-intercampi/")
    }
    const Biblioteca =()=>{
        window.open("https://unilab.edu.br/biblioteca-universitaria-unilab/")
    }
    const Curso =()=>{
        window.open("https://unilab.edu.br/cursos-de-graduacao/")
    }
    const RNE =()=>{
        window.open("https://www.tirarrne.com.br/artigos/como-renovar-rne-permanente-vencido/")
    }
    const Cplp =()=>{
        window.open("https://unilab.edu.br/paises-parceiros/#:~:text=Tem%20mais%20de%2030%20milh%C3%B5es,s%C3%A9timo%20da%20popula%C3%A7%C3%A3o%20do%20mundo.")
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
            <div className="imgContentVida">
                <h3 className="headerTitleVida">
                    UnilabTem App
                </h3>
                <img src="./image/fundo3.jpeg" alt="" 
                className='imgItemVida' />
            </div>
            <div className="services">
                <h4 className="serviceTitleVida">Serviços</h4>
                <section className='sectionService'>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i className="fa-solid fa-book"></i> Biblioteca</h6>
                        <p className="serviceParagrafo">
                        O Sistema de Bibliotecas da Unilab (Sibiuni) 
                        é um órgão suplementar da Unilab criado conforme
                        artigo 101 do estatuto da Unilab. O Sibiuni é responsável
                         pelo funcionamento sistêmico das bibliotecas da Unilab, 
                        a fim de oferecer suporte ao desenvolvimento da pesquisa, 
                        do ensino e da extensão. O Sibiuni é composto por uma estrutura 
                        administrativa e 3 bibliotecas Setoriais.
                        </p>
                        <i className="serviceLink" onClick={Biblioteca}>Saiba mais...</i>
                    </div>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i className="fa-solid fa-bus"></i> Intercampis </h6>
                        <p className="serviceParagrafo">
                        A Coordenação de Serviços Operacionais (CSO), por meio da 
                        Divisão de Transportes, informa à comunidade 
                        acadêmica os horários das rotas dos ônibus intercampi.
                        </p>
                        <div className="descBottom">
                            <i className="serviceLink" onClick={Inter}>Saiba mais...</i>
                            <Link to='/intercampi'><i className="serviceLink">Horários</i></Link>
                        </div>
                    </div>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i className="fa-solid fa-utensils"></i> Restaurante Universitário (RU)</h6>
                        <p className="serviceParagrafo">
                        Os Restaurantes Universitários (RUs) da 
                        Unilab têm como objetivos fornecer refeições
                        nutricionalmente equilibradas, seguras do ponto
                        de vista higiênico-sanitário e adequadas às necessidades 
                        nutricionais dos usuários a baixo custo, atuando como um 
                        dos instrumentos da política de permanência dos jovens na 
                        educação superior pública federal. São usuários dos RUs 
                        estudantes dos cursos de graduação ou pós-graduação, na 
                        modalidade presencial ou à distância, servidores(as) 
                        técnico-administrativos(as) e docentes, funcionários(as) das 
                        empresas terceirizadas à serviço da universidade e 
                        visitantes em caráter acadêmico-cultural.
                        </p>
                        <i className="serviceLink" onClick={Ru}>Saiba mais...</i>
                    </div>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i className="fa-solid fa-passport"></i> Documentação Para O Visto</h6>
                        <p className="serviceParagrafo">
                            O processo de Renovação do RNE-CRNM permanente é o mesmo da primeira via do documento. No entanto, esses documentos serão destinados para cada caso. Sendo assim, os documentos básicos, são:
                            É necessário ter em mãos duas fotos recentes 3×4, coloridas com o fundo branco;
                            RNE anterior;
                            Pagamento da taxa requerida para esse documento (levar o comprovante impresso);
                            Em caso de permanência obtida no Brasil deve levar uma cópia do Diário Oficial da União (DOU);
                        </p>
                        <div className="descBottom">
                            <i className="serviceLink" onClick={RNE}>Saiba mais...</i>
                            <Link to='/visto'><i className="serviceLink">Documentos</i></Link>
                        </div>
                    </div>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i className="fa-solid fa-graduation-cap"></i> Cursos de Graduação Unilab</h6>
                        <p className="serviceParagrafo">
                            Na unilab, tem diversos cursos no formato Presencial
                            e de diversas áreas do saber, que são administrados nos 
                            campis do Males (Bhaia), nos campis das Auroras e Palmares (Ceará).
                        </p>
                        <i className="serviceLink" onClick={Curso}>Saiba mais...</i>
                    </div>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i className="fa-solid fa-flag"></i> CPLP</h6>
                        <p className="serviceParagrafo">
                        Um dos propósitos da Unilab é formar 
                        pessoas aptas para contribuir com a 
                        integração do Brasil com os países membros
                        da Comunidade dos Países de Língua Portuguesa
                        (CPLP), para o desenvolvimento regional, 
                        científico e educacional, assim como para o
                        intercâmbio cultural. Esta integração se realizará 
                        pela composição de corpo docente e discente proveniente
                        não só das várias regiões do Brasil, mas também de outros
                        países e do estabelecimento e execução de convênios 
                        temporários ou permanentes com outras instituições da CPLP.
                        </p>
                        <i className="serviceLink" onClick={Cplp}>Saiba mais...</i>
                    </div>
                </section>
            </div>
          
          
        </div>
    </div>
  )
}
