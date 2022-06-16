import React from 'react'
import Menu from '../../components/Menu/Menu'
import Produto from '../../components/Produto/Produto'
import './Venda.css';
import {useState, useContext} from 'react'
import {Context} from '../../Context/Context'
import api from '../../services/api'
import upload from '../../services/upload'
import { useHistory} from 'react-router-dom'
//upload img
async function postImage({image, description}) {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)

  const result = await upload.post('/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  return result.data
}

function Venda() {

  const [preco, setPreco] = useState("")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const history = useHistory()
  

  const { user } = useContext(Context)
//upload img function

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const newPost = {
      username: user.username,
      userwhatsapp: user.whatsapp,
      preco,
      title,
      desc,
    };
    if(file){
      try{
        const description = Date.now() + file.name;
        const result = await postImage({image: file, description})
        console.log(result)
        newPost.photo = result.imagePath.split("/")[2];
      }catch(err){}
    }
    try{
      const resp = await api.post("/produto", newPost);
      console.log(resp.data.post.photo)
      history.back();
    }catch(err){}
  }
  
  return (
    <div className="venda">
      <Menu />
      <div className='conteiner'>
        <div className='cadastrarProduto'>
          <div className='banner'>
            <div  className='buttonCadastrar'><i class="fa-solid fa-bag-shopping" id='shoop'></i></div>
            <div className='corpoBanner'> Venda online, divulga e compra produtos que estão a ser vendidos Em Redenção e cidades vizinhas ...</div>
            <div className='triangulo'></div>
          </div>
          
          <form className='formProduto' onSubmit={handleSubmit} >
            <h4 className='produtoFormModal'>Cadastrar Produto</h4>
            <input type="file" className='imgInputContent' accept="image/*" onChange={(e)=> setFile(e.target.files[0])}/>
            <input className='inputProduto' type='text' placeholder='Titulo' onChange={(e)=> setTitle(e.target.value)} />
            <input className='inputProduto' type='Number' placeholder='R$ 00,00' onChange={(e)=> setPreco(e.target.value)} />
            <textarea placeholder='descrição...' className="story" rows="10" cols="33" onChange={(e)=> setDesc(e.target.value)} ></textarea>
            <button className='inputProduto colorbutton' type='submit'> Cadastrar </button>
          </form>
        </div>
        <div className='sidebar'>
            <Produto />
        </div>
      </div>
    </div>
  );
}

export default Venda;
