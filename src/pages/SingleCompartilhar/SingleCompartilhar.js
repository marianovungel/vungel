import React from 'react'
import './SingleCompartilhar.css'
import Menu from '../../components/Menu/Menu'
import { useState, useEffect, useContext } from 'react';
import { Link, useLocation} from 'react-router-dom';
import api from '../../services/api'
import { Context } from '../../Context/Context';
import Swal from 'sweetalert2';

export default function SingleCompartilhar() {
  const location = useLocation();

  const path = location.pathname.split("/")[3]
  const [post, setPost] = useState({})
  const [title, setTitle ] = useState("")
  const [desc, setDesc ] = useState("")
  const [foto, setFoto ] = useState("")
  const [editar, setEditar ] = useState(false)
  
  
  useEffect(()=>{
    const getPost = async ()=>{
      const res = await api.get("/compartilhar/"+path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
      setFoto(res.data.photo1)
    }
    getPost()
  }, [path])

const {user} = useContext(Context);
const URLImg = "https://festupload.s3.amazonaws.com/";

const whatsappSend = () =>{
  const messageZap=`Olá ${post.username}. Gostaria de saber se A casa em compartilhamento  
  que divulgou na plataforma UnilabTem
  se ainda precisa de pessoa para compartilhar?
  https://incredible-trifle-5834a1.netlify.app/habitacao/compartilhar/${path}`;

  window.open(`http://wa.me/+55${post.userwhatsapp}?text=${messageZap}`)
}
const EditTrue = () =>{
  setEditar(true)
}

const confirmDelete= async () => {
  const { isConfirmed } = await Swal.fire({
      title: `Deletar ${post?.title}`,
      text: "Esta ação não poderá ser revertida!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, tenho certeza!',
      cancelButtonText: "Cancelar"
    });

    if(isConfirmed){
      handleDelete();
    }
};

const handleDelete = async () =>{
  try{
      await api.delete(`/compartilhar/${post._id}`, {
          data: { username: user.username }
      });
      window.location.replace("/habitacao-compartilhar");
  }catch(err){
      console.log(err)
  }
}
const hendleUpdate = async () =>{
  try{
      await api.put(`/compartilhar/${post._id}`, {
          username: user.username,
          title: title,
          desc: desc,
      });
      window.location.reload('http://localhost:3000/habitacao/compartilhar');
      setEditar(false)
  }catch(err){
      console.log(err)
  }
}

const FotoChengOne = ()=>{
  setFoto(post.photo1)
}
const FotoChengTwo = ()=>{
  setFoto(post.photo2)
}
const FotoChengTrei = ()=>{
  setFoto(post.photo3)
}
const FotoChengFort = ()=>{
  setFoto(post.photo4)
}
const FotoChengFive = ()=>{
  setFoto(post.photo5)
}


  return (
    <div className='conteinerSinglePostVenda'>
        <div className='OI' >
            <Menu />
        </div>
        <div className='menuBootstrap' >
        <nav className="navbar navbar-expand-lg navbar-light  menuBootstrap">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <div className='logoBootstrap'>
                    <img className='imagemLogo' id="idImgFit" src="./image/preta.png" alt="logoUnilabtem" />
                </div>
            </Link>
            <button className="bg-light braca" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-light braca"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/desapego">Doação</Link>
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
                    <li><Link className="dropdown-item" to="/exe">Aluguel</Link></li>
                    <li><Link className="dropdown-item" to="/habitacao-compartilhar">Compartilhamento</Link></li>
                    <li><Link className="dropdown-item" to="/aluguel-cadastrar">Divulgar Aluguel</Link></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </div>
        <div className='fullContent'>
          <div className='imgContent'>
            <p id='categoria'>Categoria: {post.categories}</p>
            <div className='imgDivSingle'>
              <img id='photoVendaId' src={URLImg+foto} alt='' />
            </div>
            <div className='imgDivSingleClass'>
              <img className='photoVendaclassName' onClick={FotoChengOne} src={URLImg+post.photo1} alt='' />
              <img className='photoVendaclassName' onClick={FotoChengTwo} src={URLImg+post.photo2} alt='' />
              <img className='photoVendaclassName' onClick={FotoChengTrei} src={URLImg+post.photo3} alt='' />
              <img className='photoVendaclassName' onClick={FotoChengFort} src={URLImg+post.photo4} alt='' />
              <img className='photoVendaclassName' onClick={FotoChengFive} src={URLImg+post.photo5} alt='' />
            </div>
            
          </div>
          <div className='descContent'>
            {editar ? (
              <div 
              className='fullForm'>
                <h3 className='editVenda'>Editar</h3>
                <input className='inputFormEditVenda' value={title} onChange={e=>setTitle(e.target.value)} type='text' placeholder='Title ...' maxLength='60'/>
                <textarea className='inputFormEditVenda' value={desc} onChange={e=>setDesc(e.target.value)} placeholder='Descrição ...' maxLength='200' />
                <button className='buttonFormEditVenda' onClick={hendleUpdate}>Editar ...</button>
              </div>
            ) : (
            <>
            <h2>{post.title}</h2>
            <div className='codigoItem'>
              <p>(Cód. Item {post._id})</p>
              <Link to="/habitacao-compartilhar"><i className='outrosProdutos'>Outros produtos</i></Link>
            </div>
            <p><i className="sizeColor fa-solid fa-user-pen"></i> {post.username}</p>
            <p><i className="sizeColor fa-solid fa-user-pen"></i>R$ {post.preco}</p>
            <p><i className="sizeColor fa-solid fa-audio-description"></i> {post.desc}</p>
            <p><i className="bi bi-basket2-fill"></i> {post.cozinha}</p>
            <p><i className="sizeColor fa-solid fa-calendar-day"></i> {new  Date(post.createdAt).toDateString()}</p>
            <p><i className="sizeColor fa-solid fa-toggle-on"></i> Desponível</p>
            <p><i className="sizeColor fa-solid fa-map-location-dot"></i> Endereço</p>
            <p><i className="i">Info:</i>{post.desc} </p>
            <p><i className="i">Sala:</i>{post.sala} </p>
            <p><i className="i">Quartos:</i>{post.quarto} </p>
            <p><i className="i">Banheiro:</i>{post.banheiro} </p>
            

            </>
            )}
          </div>
          <div className='butoomContent'>
            {post.username === user.username ? (
              <Link to={`/compartilhar-edit/${post?._id}`}>
                  <div className='buttonZapDiv'><button  className='buttonEditar' onClick={EditTrue}>Editar <i className="fa-solid fa-pen-to-square"></i></button></div>
              </Link>
            ) : (
              <div></div>
            )}
            {post.username === user.username ? (
              <div className='buttonZapDiv'><button  className='buttonDeletar' onClick={confirmDelete}>Deletar <i className="fa-solid fa-trash-can"></i></button></div>
            ) : (
              <div className='buttonZapDiv'><button onClick={whatsappSend} className='buttonZap'>Enviar Zap <i className="fa-brands fa-whatsapp"></i></button></div>
            )}
          </div>
          <footer className=''></footer>
        </div>
    </div>
  )
}
