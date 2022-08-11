import React from 'react'
import Menu from '../../components/Menu/Menu'
import './SingleVenda.css'
import { useState, useEffect, useContext } from 'react';
import { useLocation} from 'react-router-dom';
// import { useLocation, useHistory} from 'react-router-dom';
import api from '../../services/api'
import { Context } from '../../Context/Context';
import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';


export default function SingleVenda() {
  const location = useLocation();

  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState({})
  const [title, setTitle ] = useState("")
  const [preco, setPreco ] = useState("")
  const [desc, setDesc ] = useState("")
  const [editar, setEditar ] = useState(false)
  const [showButtons, setShowButtons ] = useState(true)
  // const history = useHistory()
  
  
  useEffect(()=>{
    const getPost = async ()=>{
      const res = await api.get("/produto/"+path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
      setPreco(res.data.preco)
      console.log(res)
    }
    getPost()
    setShowButtons(true)
  }, [path])

const {user} = useContext(Context);
const URLImg = "https://festupload.s3.amazonaws.com/";

const whatsappSend = () =>{
  const messageZap=`Olá ${post.username}. Gostaria de saber se o produto ${post.title} 
  que divulgou na plataforma UnilabTem no preço de R$${post.preco} 
  se ainda está a venda?`;

  window.open(`http://wa.me/+55${post.userwhatsapp}?text=${messageZap}`)
}
// const Zoom = () =>{
//   window.open(`${URLImg}${post.photo}`)
// }
const Home = () =>{
  window.open("http://localhost:3000")
}
const EditTrue = () =>{
  setEditar(true)
  setShowButtons(false)
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
      await api.delete(`/produto/${post._id}`, {
          data: { username: user.username }
      });
      window.location.replace("/");
  }catch(err){
      console.log(err)
  }
}
const hendleUpdate = async () =>{
  try{
      await api.put(`/produto/${post._id}`, {
          username: user.username,
          title: title,
          desc: desc,
          preco: preco,
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1300
      })
      // window.location.reload();
      window.location.replace("/");
      setEditar(false)
      setShowButtons(true)
  }catch(err){
      console.log(err)
  }
}

const TodosPro = ()=>{
  Swal.fire({
    title: 'Deseja cancelar?',
    text: "",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Cancelado!',
        'Divulgação de produto  cancelado!',
        'success'
      )

      setEditar(false)
      setShowButtons(true)
    }
  })
    
}


  return (
    <div className='conteinerSinglePostVenda'>
        <Menu />
        <div className='fullContent'>
          <div className='imgContent'>
            <p id='categoria'>Categoria: Venda</p>
            <div className='imgDivSingle'>
              <img id='photoVendaId' src={URLImg+post.photo} alt='#' />
            </div>
            {/* <button className='zoom' onClick={Zoom}><i class="fa-solid fa-download"></i></button> */}
          </div>
          <div className='descContent'>
            {editar ? (
              <div 
              className='fullForm'>
                <h3 className='editVenda'>Editar O Produto</h3>
                <input className='inputFormEditVenda' value={title} onChange={e=>setTitle(e.target.value)} type='text' placeholder='Title ...' maxLength='60'/>
                <input className='inputFormEditVenda' value={preco} onChange={e=>setPreco(e.target.value)}  type='Number' placeholder='R$ 0,00' maxLength='10' />
                <textarea className='inputFormEditVenda' value={desc} onChange={e=>setDesc(e.target.value)} placeholder='Descrição ...' maxLength='200' />
                <button className='buttonFormEditVenda' onClick={hendleUpdate}>Editar ...</button>
                <div className='todosProdutosnew' id='cancelform' onClick={TodosPro}><i>Cancelar</i></div>
              </div>
            ) : (
            <>
            <div className='avaliacao'>
              <i className="fa-solid fa-star" id='estrela'></i>
              <i className="fa-solid fa-star" id='estrela'></i>
              <i className="fa-solid fa-star" id='estrela'></i>
              <i className="fa-solid fa-star" id='estrela'></i>
              <i className="fa-solid fa-star-half-stroke" id='estrela'></i>
               (Avaliações)
            </div>
            <h2>{post.title}</h2>
            <div className='codigoItem'>
              <p>(Cód. Item {post._id})</p>
              <i className='outrosProdutos' onClick={Home}>Outros produtos</i>
            </div>
            <h2>R$ {post.preco}</h2>
            <p>Vendedor: {post.username}</p>
            <p>Descrição: {post.desc}</p>
            <div className='cartoes'>
            {post.username === user.username && (<i>Assim que o produto for comprado, delete-o caso não esteje a vende-lo novamente!</i>)}
            </div>
            </>
            )}
          </div>
          {showButtons && (
            <div className='butoomContent'>
              {post.username === user.username ? (
                <div className='buttonZapDiv'><button  className='buttonEditar' onClick={EditTrue}>Editar <i class="fa-solid fa-pen-to-square"></i></button></div>
              ) : (
                <div></div>
              )}
              {post.username === user.username ? (
                <div className='buttonZapDiv'><button  className='buttonDeletar' onClick={confirmDelete}>Deletar <i class="fa-solid fa-trash-can"></i></button></div>
              ) : (
                <div className='buttonZapDiv'><button onClick={whatsappSend} className='buttonZap'>Enviar Zap <i class="fa-brands fa-whatsapp"></i></button></div>
              )}
            </div>
          )}
          <footer className=''></footer>
        </div>
    </div>
  )
}
