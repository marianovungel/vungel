import React from 'react'
import api from '../../services/api'
import { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom';
import './Produto.css'
import { Link } from 'react-router-dom';

export default function Produto() {
  // const history = useHistory();

    //passando dados via location
    

  const [produtoVenda, setProdutoVenda] = useState([])
  const [vazio, setVazio] = useState(false)
  const [carregar, setCarregar] = useState([])
  const [title, setTitle] = useState("")

  const getProdutoVenda = async ()=>{
    setCarregar(true)
    try{
      const response = await api.get('/produto');
      const res = response.data;
      if(res.error){
        alert(res.message);
        return false;
      }
      if(response.data.length === 0){
        setVazio(true)
        setCarregar(false)
      }

      setProdutoVenda(res);
      setVazio(false)
      setCarregar(false)
      console.log(res)

    }catch(err){
      alert(err.message);
    }
  }

  useEffect(() => {
    getProdutoVenda();
  }, [])


  const submitSearch = async (e) =>{
    e.preventDefault()
    const results = await api.post("/produto/search", {title: title,})
    if(results.data.length === 0){
      setVazio(true)
      setCarregar(false)
      setProdutoVenda([])
    }else{
      console.log(results.data)
      setProdutoVenda(results.data)
      setVazio(false)
      setCarregar(false)
    }
  }

  const URLImg = "https://festupload.s3.amazonaws.com/";

  return (
    <>
        <form onSubmit={submitSearch} className='searchform'>
          <input className='searchformInport' type="search" placeholder='Pesquise...' onChange={e => setTitle(e.target.value)} />
          <button type="submit" className='searchformButton'><i class="fa-solid fa-magnifying-glass colorSearch"></i></button>
        </form>
      {vazio && (<div className='Encontrar'><h5>Nenhum Produto encontrado ...</h5></div>)}
      {carregar && (<div className='Encontrar'><h5>Carregando ...</h5></div>)}

        {produtoVenda?.map((post)=>(
          <Link className="titleColor" to={`/post/${post?._id}`}>
            {/* onClick={() => history.push(`/post/${post?.id}`, post)}  key={post?.photo} */}
          <div className="Produto" key={post?.photo}>
            <div className='imgProduto'>
                <img className='imagemCard' src={URLImg+post?.photo} alt='imagem'/>
            </div>
            <div className='nomePreco'>
                <h3 className='valorNome'>{post?.title}</h3>
                <h3 className='valorNome'>R$ {post?.preco},00</h3>
            </div>
          </div>
          </Link>
          ))}
    </>
  );
}