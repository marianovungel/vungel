import React from 'react'
import './UserSetting.css'

export default function UserSetting() {
  return (
    <section className='fullContenUser'>
            <h4 className="userInfo">Meus dados de Usuário...</h4>
            <div className="dados">
                <div className=" use imgUser">
                    <i className="Iselect photoUser">Foto de Perfil</i>
                    <img 
                    src="https://blogstudio.s3.theshoppad.net/dr-jones-men/3626088e7e754665ed49fa0d5d020692.png" 
                    alt="" className="photoUserI" />
                    
                </div>
                <div className="expretionData">
                    <div className=" use userNameUser">
                        <i className="Iselect userNameOfUser">Nome de Usuário</i>
                        <input type="text" className="userInputB Bselect" value="Mariano António Vunge Peralta New" />
                    </div>
                    <div className=" use zapUser">
                        <i className="Iselect zapUserI">Whatsapp...</i>
                        <input type="text" className="userInputB Bselect" value="(85)991392625" />
                    </div>
                    <div className=" use e-mailUser">
                        <i className="Iselect EmailUserI">E-mail...</i>
                        <input type="text" className="userInputB Bselect" value="vungemariano@gmail.com" />
                    </div>
                    <div className=" use e-mailUser">
                        <i className="Iselect EmailUserI">Imagem de Perfil...</i>
                        <input type="file" accept="image/*" className="inputImgUser userInputB Bselect" />
                    </div>
                    <div className=" use e-mailUser">
                        <button className="inputImgUser userInputB Bselect ButtonBackgrondcolor">Salvar Alteração</button>
                    </div>
                </div>
            </div>
        </section>
  )
}
