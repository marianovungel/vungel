import React from 'react'
import './Desapego.css'
import Menu from '../../components/Menu/Menu'
import {useState, useContext, useEffect} from 'react'
import {Context} from '../../Context/Context'
import api from '../../services/api'
import upload from '../../services/upload'
import { Link } from 'react-router-dom'


//upload img
async function postImage({image, description}) {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)

  const result = await upload.post('/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  return result.data
}

export default function Desapego() {
  
  const [title, setTitle] = useState("")
  const [cepp, setCepp] = useState("")
  const [categories, setcategories] = useState("")
  const [cep, setCep] = useState({})
  const [desc, setDesc] = useState("")
  const [cat, setCat] = useState("")
  const [cidade, setCidade] = useState("")
  const [cidadeSee, setCidadeSee] = useState(false)
  const [file, setFile] = useState(null)
  const [cadastrar, setCadastrar ] = useState(true)
  const [desapego, setDesapego] = useState([])
  const [vazio, setVazio] = useState(false)
  const [carregar, setCarregar] = useState(false)
  const [titleSearh, setTitleSearh] = useState("")
  console.log(cat)

  const { user } = useContext(Context)
  useEffect(()=>{
    const FetchDesapego = async () => {
      setCarregar(true)
        try{
            const res = await api.get("/desapego")
            if(res.data.length === 0){
              setVazio(true)
              setCarregar(false)
              setDesapego([])
            }
            console.log(res.data)
            setVazio(false)
            setCarregar(false)
            setDesapego(res.data)
        }catch(err){
            console.log(err)
        }
    }

    FetchDesapego();
}, [])

  const Cepfuncion = async ()=>{
    try{
      const cepSearch = cepp.replace(/\D/g, '');
      console.log(cepSearch)
      await fetch(`https://viacep.com.br/ws/${cepSearch}/json/`)
      .then(res=>res.json()).then(data => setCep(data)
      )
    }catch(err){
      alert(err)
    }
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const newPost = {
      username: user.username,
      userwhatsapp: user.whatsapp,
      title,
      desc,
      cep: cep,
      cidade: cep.localidade,
      categories: cat,
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
      const {data: ress} =  await api.post("/desapego", newPost);
      console.log(ress)
      setDesapego([ress, ...desapego])
      setCadastrar(true)
    }catch(err){}
  }

  console.log(cep.localidade)
  const CadastrarTrue = () =>{
    setCadastrar(false)
  }

  const submitSearch = async (e) =>{
    e.preventDefault()
    const results = await api.post("/desapego/search", {title: titleSearh,})
    if(results.data.length === 0){
      setVazio(true)
      setCarregar(false)
      setDesapego([])
    }else{
      console.log(results.data)
      setDesapego(results.data)
      setVazio(false)
      setCarregar(false)
    }
  }
  const submitSearchMeu = async (e) =>{
    e.preventDefault()
    const results = await api.post("/desapego/search/meu", {username: user.username,})
    if(results.data.length === 0){
      setVazio(true)
      setCarregar(false)
      setDesapego([])
    }else{
      console.log(results.data)
      setDesapego(results.data)
      setVazio(false)
      setCarregar(false)
    }
    console.log(user.username)
  }
  const submitSearchCat = async (e) =>{
    e.preventDefault()
    try{

      const results = await api.post("/desapego/search/cat", {categories: categories,})
      if(results.data.length === 0){
        setVazio(true)
        setCarregar(false)
        setDesapego([])
      }else{
        console.log(results.data)
        setDesapego(results.data)
        setVazio(false)
        setCarregar(false)
      }
    }catch(err){
      alert(err)
    }
    console.log(categories)
    console.log(setDesapego)
  }
  const FetchDesapegoFiltro = async () => {
    setCarregar(true)
      try{
          const res = await api.get("/desapego")
          if(res.data.length === 0){
            setVazio(true)
            setCarregar(false)
            setDesapego([])
          }
          console.log(res.data)
          setVazio(false)
          setCarregar(false)
          setDesapego(res.data)
      }catch(err){
          console.log(err)
      }
  }

  const setCidadeSeeFunction = () =>{
    setCidadeSee(true)
  }
  const submitSearchCidade = async (e) =>{
    e.preventDefault()
    try{

      const results = await api.post("/desapego/search/cidade", {cidade: cidade,})
      if(results.data.length === 0){
        setVazio(true)
        setCarregar(false)
        setDesapego([])
      }else{
        console.log(results.data)
        setDesapego(results.data)
        setVazio(false)
        setCarregar(false)
      }
    }catch(err){
      alert(err)
    }
    console.log(categories)
    console.log(setDesapego)
  }
  console.log(cidadeSee)
  console.log(cidade)

const URLImg = "https://festupload.s3.amazonaws.com/";
  return (
    <div className='desapego'>
        <Menu color="red" />
        <div className='sidebarDesapego'>
          {cadastrar ?(
             
              <div className='cadastrarProdutoCallForm'>
                <div className='buttonCad' onClick={CadastrarTrue}>Cadastrar Produto ...</div>
                <div className='filtrar'>
                  <h4 className='filtrarh4'>Filtrar <i className="fa-solid fa-filter"></i></h4>
                  <div className='itemList'>
                    <h5 className='filtraritem'onClick={FetchDesapegoFiltro}>Todos<i className='filtraritemSpace'></i>  <i className="fa-solid fa-calendar-days"></i></h5>
                    <h5 className='filtraritem' onClick={submitSearchMeu}>Meus Desapegos<i className='filtraritemSpace'></i>  <i className="fa-solid fa-person"></i></h5>
                    <h5 className='filtraritemCat'>
                    <select className='inputProdutoselet' type='text' placeholder='Categoria'  onChange={(e)=> setcategories(e.target.value)} onClick={submitSearchCat}>
                      <option className='inputSeletItem' value="Eletrodomesticos" >Eletrodomesticos</option>
                      <option className='inputSeletItem' value="Material eletrónico" >Material eletrónico</option>
                      <option className='inputSeletItem' value="Vestuários" >Vestuários</option>
                      <option className='inputSeletItem' value="Calçados" >Calçados</option>
                      <option className='inputSeletItem' value="Diversos" >Diversos</option>
                    </select>
                    </h5>
                    <h5 className='filtraritem' onClick={setCidadeSeeFunction}>Cidade<i className='filtraritemSpace'></i>  <i className="fa-solid fa-city"></i></h5>
                    {cidadeSee && 
                      <>
                        <h5 className='filtraritem'><input type='search' id='filtraritemSpaceId' maxLength='30' placeholder='Digite a cidade ...' defaultValue='Redenção' required onChange={e=>setCidade(e.target.value)}/></h5>
                        <h5 className='filtraritem' id='filtraritemSpaceIdButton' onClick={submitSearchCidade}>Pesquisar por cidade<i className='filtraritemSpace' id='filtraritemSpaceIdButton'></i>  <i id='filtraritemSpaceIdButton' className="fa-solid fa-city" ></i></h5>
                      </>
                    }
                  </div>
                </div>
              </div>
            
          ) : (
          <form className='formProdutoDesapego' onSubmit={handleSubmit} key={file}>
              <h4 className='produtoFormModal'>Divulgar Doação</h4>
              {file ? (
                <div className='imgPostPreviw'>
                  <img src={URL.createObjectURL(file)} alt='uploadImg' className='imgPostPreviw' />
                </div>
              ) : (
                <div className='imgPostPreviwIconContent'>
                  <i className="fa-solid fa-image fa-solid fa-image imgPostPreviwIcon"></i>
                </div>
              )}
              <input type="file" className='imgInputContent' accept="image/*" required onChange={(e)=> setFile(e.target.files[0])}/>
              <input className='inputProduto' type='text' placeholder='Titulo' required onChange={(e)=> setTitle(e.target.value)} />
              <input className='inputProduto' type='text' placeholder='CEP' maxLength='9'
              minLength='9' required onChange={(e)=> setCepp(e.target.value)} onBlur={Cepfuncion} />
              <select className='inputProduto' type='text' placeholder='Categoria' required onChange={(e)=> setCat(e.target.value)}>
                <option value="Eletrodomesticos">Eletrodomesticos</option>
                <option value="Material eletrónico">Material eletrónico</option>
                <option value="Vestuários">Vestuários</option>
                <option value="Calçados">Calçados</option>
                <option value="Diversos">Diversos</option>
              </select>

              <textarea className="story" rows="10" cols="33" required onChange={(e)=> setDesc(e.target.value)} ></textarea>
              <button className='inputProduto colorbutton' type='submit'> Criar </button>
            </form>
          )}
          <div className='sidebarCardDesapego scroll'>
          <>
    <form onSubmit={submitSearch} className='searchform'>
          <input className='searchformInportDesapego' type="search" placeholder='Pesquise...' onChange={e => setTitleSearh(e.target.value)} />
          <button type="submit" className='searchformButton'><i className="fa-solid fa-magnifying-glass colorSearch"></i></button>
      </form>
      {vazio && (<div className='Encontrar'><h5>Nenhum Produto encontrado ...</h5></div>)}
      {carregar && (<div className='Encontrar'><h5>Carregando ...</h5></div>)}

    {desapego.map((p)=>(
    <div className='allCard' key={p.photo}>
        <div className='divHeader'>
            <p className='SpanUsername'>{ p.username }</p>
        </div>
        <div className='descClassName'>
          <span className='descSpan'>
            {p.desc}
          </span>
        </div>
        <div className='divHero'><img id='heroIgm' 
          src={URLImg + p.photo} alt='#'/></div>
        <div className='divFooter'>
            <span className='spanDate'> {new  Date(p.createdAt).toDateString()} </span>
            <Link to={`/desapego/${p?._id}`}>
              <button className='buttonSaiba'>Saiba Mais</button>
            </Link>
        </div>
    </div>
    ))}
          </>
          </div>
          <div className='bannerDesapego'>
            <div className='bannerDesapegoFast'>
              <h3 className='h3Desapego'>Desapego</h3>
              <img 
              src='https://st3.depositphotos.com/6462898/18901/i/600/depositphotos_189015208-stock-photo-men-holding-donate-box-with.jpg' alt='' 
              className='bannerDesapegoimg'/>
              <p className='bannerDesapegoP'>A oportunidade de se desapegar de forma fácil 
                de bens na comunidade unilabiana...</p>
            </div>
          <div className='bannerDesapegoFast'>
              <h3 className='h3Desapego2'>Doação</h3>
              <p className='bannerDesapegoPp'>Doe aqui, desde bens alimentares até bens do outra natureza!</p>
          </div>
          </div>
        </div>
    </div>
  )
}
