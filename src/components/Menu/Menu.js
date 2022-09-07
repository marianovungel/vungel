import React from 'react'
import './menu.css'
import {useContext} from 'react'
import {Context} from '../../Context/Context'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2';
import { Avatar, Chip } from '@mui/material'

export default function Menu({props}) {

  const { user } = useContext(Context)


  const Producao = ()=>{
    Swal.fire({
      title: 'Está em produção e será disponibilizada em breve!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  return (
    <div className="menu">
      <div className='logo'>
            <img className='imagemLogo' src="./image/preta.png" alt="logoUnilabtem" />
        </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-blue" id='navDesa'>
                <button className="navbar-toggler" id='iconMenuBut' type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="container-fluid" id='contentMenuBox'>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link to='/desapego' className="nav-link active" aria-current="page" href="#">Doação</Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to='/' className="nav-link" href="#">Venda</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/exe' className="nav-link" href="#">Habitação</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/sobre' className="nav-link" href="#">Sobre</Link>
                    </li>
      
                </ul>
                </div>
            </div>
      </nav>

        <ul className='menuList'>
            <Link to='/desapego'><li>Doação</li></Link>
            <Link to='/'><li>Venda</li></Link>
            <Link to='/exe'><li>Habitação</li></Link>
            <li onClick={Producao}>Oportunidades</li>
            <li onClick={Producao}>Vida na Unilab</li>
            <Link to='/sobre'><li>Sobre</li></Link>
        </ul>
        <div className='fotoPerfil'>
          {/* <i className="fa-solid fa-user"></i> */}
              <Link to='/user' >
                  <Chip
                  className='CursorUserPoiter'
                    avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                    label={user.username}
                    variant="outlined"
                  />
              </Link>
        </div>
    </div>
  )
}