import React from 'react'
import './SingleAluguel.css'
import Menu from '../../components/Menu/Menu'
import { useState, useEffect, useContext } from 'react';
import { Link, useLocation} from 'react-router-dom';
import api from '../../services/api'
import { Context } from '../../Context/Context';
import Swal from 'sweetalert2';


export default function SingleAluguel() {
  const location = useLocation();

  const path = location.pathname.split("/")[3]
  const [post, setPost] = useState({})
  const [title, setTitle ] = useState("")
  const [desc, setDesc ] = useState("")
  const [foto, setFoto ] = useState("")
  const [editar, setEditar ] = useState(false)
  console.log(location)
  
  useEffect(()=>{
    const getPost = async ()=>{
      const res = await api.get("/aluguel/"+path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
      setFoto(res.data.photo1)
      console.log(res.data)
    }
    getPost()
  }, [path])

const {user} = useContext(Context);
const URLImg = "https://festupload.s3.amazonaws.com/";

const whatsappSend = () =>{
  const messageZap=`Olá ${post.username}. Gostaria de saber se o produto ${post.title} 
  que divulgou na plataforma UnilabTem para doação 
  se ainda está a venda?`;

  window.open(`http://wa.me/+55${post.userwhatsapp}?text=${messageZap}`)
}
const Home = () =>{
  window.location.replace("/habitacao/aluguel")
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
      await api.delete(`/aluguel/${post._id}`, {
          data: { username: user.username }
      });
      window.location.replace("/habitacao/aluguel");
  }catch(err){
      console.log(err)
  }
}
const hendleUpdate = async () =>{
  try{
      await api.put(`/aluguel/${post._id}`, {
          username: user.username,
          title: title,
          desc: desc,
      });
      window.location.reload('/habitacao/aluguel');
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
        <Menu />
        <div className='fullContent'>
          <div className='imgContent'>
            <p id='categoria'>Categoria: {post.categories}</p>
            <div className='imgDivSingle'>
              <img id='photoVendaId' src={URLImg+foto} alt='#' />
            </div>
            <div className='imgDivSingleClass'>
              <img className='photoVendaclassName' onClick={FotoChengOne} src={URLImg+post.photo1} alt='#' />
              <img className='photoVendaclassName' onClick={FotoChengTwo} src={URLImg+post.photo2} alt='#' />
              <img className='photoVendaclassName' onClick={FotoChengTrei} src={URLImg+post.photo3} alt='#' />
              <img className='photoVendaclassName' onClick={FotoChengFort} src={URLImg+post.photo4} alt='#' />
              <img className='photoVendaclassName' onClick={FotoChengFive} src={URLImg+post.photo5} alt='#' />
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
              <i className='outrosProdutos' onClick={Home}>Outros produtos</i>
            </div>
            <p><i className="sizeColor fa-solid fa-user-pen"></i> {post.username}</p>
            <p><i className="sizeColor fa-solid fa-audio-description"></i> {post.desc}</p>
            <p><i className="sizeColor fa-solid fa-calendar-day"></i> {new  Date(post.createdAt).toDateString()}</p>
            <p><i className="sizeColor fa-solid fa-toggle-on"></i> Desponível</p>
            <p><i className="sizeColor fa-solid fa-map-location-dot"></i> Endereço</p>
            </>
            )}
          </div>
          <div className='butoomContent'>
            {post.username === user.username ? (
              <Link to={`/aluguel/edit/${post?._id}`}>
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
