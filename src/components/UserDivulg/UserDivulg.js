import React from 'react'
import { useEffect, useContext } from 'react'
import api from '../../services/api'
import './UserDivulg.css'
import { Context } from '../../Context/Context';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//var user
const URLImg = "https://festupload.s3.amazonaws.com/";

export default function UserDivulg() {
    const [venda, setVenda] = useState()
    const [doacao, setDoacao] = useState()
    const [aluguel, setAluguel] = useState()
    const [compartilhar, setCompartilhar] = useState()
    const {user} = useContext(Context);
    
    useEffect(()=>{
        const GetAll = async ()=>{
            try{
                const vendas = await api.post("/produto/search/meu", {username: user.username,})
                const doacoes = await api.post("/desapego/search/meu", {username: user.username,})
                const Alugueis = await api.post("/aluguel/search/meu", {username: user.username,})
                const compartilhamentos = await api.post("/compartilhar/search/meu", {username: user.username,})
                setVenda(vendas.data)
                setDoacao(doacoes.data)
                setAluguel(Alugueis.data)
                setCompartilhar(compartilhamentos.data)
            }catch(err){
                alert("Erro ao conectar-se oa Servidor!")
            }
        }
        GetAll()
    }, [user.username])
  return (
    <section className='fullContenUser'>
    <h4 className="userInfo">Minhas divulgações...</h4>
    <div className="vendaDivulgacoes">
        <i className="vendaI">Venda...</i>
        <div className="produtosDiv">
        {venda?.map((post)=>(
            <Link className="titleColor" to={`/post/${post?._id}`} key={post._id}>
                {/* onClick={() => history.push(`/post/${post?.id}`, post)}  key={post?.photo} */}
            <div className="Produto" key={post?.photo}>
                <div className='imgProduto' id='Produto'>
                    <img className='imagemCard' src={URLImg+post?.photo} alt=' '/>
                </div>
                <div className='nomePreco'>
                    <h3 className='valorNome'>{post?.title}</h3>
                    <h3 className='valorNome'>R$ {post?.preco},00</h3>
                </div>
            </div>
            </Link>
        ))}
        </div>
    </div>
    <div className="doacaoDivulgacoes">
        <i className="doacoaI">Doação...</i>
        <div className="doacaoDiv">
        {doacao?.map((post)=>(
            <Link className="titleColor" to={`/post/${post?._id}`} key={post._id}>
                {/* onClick={() => history.push(`/post/${post?.id}`, post)}  key={post?.photo} */}
            <div className="Produto" key={post?.photo}>
                <div className='imgProduto' id='Produto'>
                    <img className='imagemCard' src={URLImg+post?.photo} alt=' '/>
                </div>
                <div className='nomePreco'>
                    <h3 className='valorNome'>{post?.title}</h3>
                    <h3 className='valorNome'>R$ {post?.preco},00</h3>
                </div>
            </div>
            </Link>
        ))}
        </div>
    </div>
    <div className="aluguelDivulgacoes">
        <i className="aluguelI">Aluguel...</i>
        <div className="aluguelDiv">
        {aluguel?.map((post)=>(
            <Link className="titleColor" to={`/post/${post?._id}`} key={post._id}>
                {/* onClick={() => history.push(`/post/${post?.id}`, post)}  key={post?.photo} */}
            <div className="Produto" key={post?.photo}>
                <div className='imgProduto' id='Produto'>
                    <img className='imagemCard' src={URLImg+post?.photo1} alt=' '/>
                </div>
                <div className='nomePreco'>
                    <h3 className='valorNome'>{post?.title}</h3>
                    <h3 className='valorNome'>R$ {post?.preco},00</h3>
                </div>
            </div>
            </Link>
        ))}
        </div>
    </div>
    <div className="compartilhamentoDivulgacoes">
        <i className="compartilharI">Compartilhamento...</i>
        <div className="compartilharDiv">
        {compartilhar?.map((post)=>(
            <Link className="titleColor" to={`/post/${post?._id}`} key={post._id}>
                {/* onClick={() => history.push(`/post/${post?.id}`, post)}  key={post?.photo} */}
            <div className="Produto" key={post?.photo}>
                <div className='imgProduto' id='Produto'>
                    <img className='imagemCard' src={URLImg+post?.photo1} alt=' '/>
                </div>
                <div className='nomePreco'>
                    <h3 className='valorNome'>{post?.title}</h3>
                    <h3 className='valorNome'>R$ {post?.preco},00</h3>
                </div>
            </div>
            </Link>
        ))}
        </div>
    </div>
    </section>
  )
}
