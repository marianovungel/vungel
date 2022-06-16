import React from 'react'
import './menu.css'
import {useContext} from 'react'
import {Context} from '../../Context/Context'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2';

export default function Menu({props}) {

  const { user, dispatch } = useContext(Context)

  const hendSair = ()=>{
    dispatch({type: "LOGOUT"})
  }

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
        <ul className='menuList'>
            <Link to='/desapego'><li>Doação</li></Link>
            <Link to='/'><li>Venda</li></Link>
            <Link to='/habitacao/aluguel'><li>Habitação</li></Link>
            <li onClick={Producao}>Oportunidades</li>
            <li onClick={Producao}>Vida na Unilab</li>
            <Link to='/sobre'><li>Sobre</li></Link>
            <li onClick={hendSair}>Sair</li>
        </ul>
        <div className='fotoPerfil'>
          <i className="fa-solid fa-user"></i>
          <span  className='smollUsername'>{user.username}</span>
        </div>
    </div>
  )
}