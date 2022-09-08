import React from 'react'
import './UserPerfil.css'

export default function UserPerfil() {
  return (
    <section className='fullContenUser'>
            <h4 className="userInfo">Meus dados de Usuário...</h4>
            <div className="dados">
                <div className=" use imgUser">
                    <i className="Iselect photoUser">Foto de Perfil</i>
                    <img 
                    src="https://cdn-icons-png.flaticon.com/512/47/47774.png" 
                    alt="" className="photoUserI" />
                </div>
                <div className="expretionData">
                    <div className=" use userNameUser">
                        <i className="Iselect userNameOfUser">Nome de Usuário</i>
                        <b className="Bselect userNameB">Mariano António Vunge Peralta New</b>
                    </div>
                    <div className=" use zapUser">
                        <i className="Iselect zapUserI">Whatsapp...</i>
                        <b className="Bselect zapUserB">(85)991392625</b>
                    </div>
                    <div className=" use e-mailUser">
                        <i className="Iselect EmailUserI">E-mail...</i>
                        <b className="Bselect EmailUserB">vungemariano@gmail.com</b>
                    </div>
                    <div className="use datacriacao">
                        <i className="Iselect dataUserI">Dsta de Criação da conta</i>
                        <b className="Bselect dataB">Ter 27/08/2022</b>
                    </div>
                </div>
            </div>
        </section>
  )
}
