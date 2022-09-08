import React from 'react'
import { useState } from 'react'
import './UserSetting.css'

export default function UserSetting() {
    const [photo, setPhoto]= useState(null)
  return (
    <form className='fullContenUser'>
            <h4 className="userInfo">Meus dados de Usuário...</h4>
            <div className="dados">
                <div className=" use imgUser">
                    <i className="Iselect photoUser">Foto de Perfil</i>
                    {photo ? (
                        <img src={URL.createObjectURL(photo)} alt=' ' className='borderImg' />
                    ):(
                        <img 
                        src="https://cdn-icons-png.flaticon.com/512/47/47774.png" 
                        alt="" className="borderImg" />
                    )}
                    <label for='imgUserPhoto' className="bolinha">
                        <i class="fa-solid fa-pen iconColor"></i>
                    </label>
                </div>
                <div className="expretionData">
                    <div className=" use userNameUser">
                        <i className="Iselect userNameOfUser">Nome de Usuário</i>
                        <input type="text" className="userInputB Bselect inputbBortder" value="Mariano António Vunge Peralta New" />
                    </div>
                    <div className=" use zapUser">
                        <i className="Iselect zapUserI">Whatsapp...</i>
                        <input type="text" className="userInputB Bselect inputbBortder" value="(85)991392625" />
                    </div>
                    <div className=" use e-mailUser">
                        <i className="Iselect EmailUserI">E-mail...</i>
                        <input type="text" className="userInputB Bselect inputbBortder" value="vungemariano@gmail.com" />
                    </div>
                    <div className=" use e-mailUser displayNone">
                        <i className="Iselect EmailUserI displayNone">Imagem de Perfil...</i>
                        <input type="file" id='imgUserPhoto' accept="image/*" className="inputImgUser userInputB Bselect displayNone" onChange={(e)=> setPhoto(e.target.files[0])} />
                    </div>
                    <div className=" use e-mailUser">
                        <button className="inputImgUser userInputB Bselect ButtonBackgrondcolor">Salvar Alteração</button>
                    </div>
                </div>
            </div>
        </form>
  )
}
