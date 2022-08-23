import React from 'react'
import Menu from '../../components/Menu/Menu'
import './EditCompartilhar.css'
import {useState, useContext, useEffect} from 'react'
import {Context} from '../../Context/Context'
import upload from '../../services/upload'
import api from '../../services/api'
import { Link, useLocation} from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'

//upload img
async function postImage({image, description}) {
    const formData = new FormData();
    formData.append("image", image)
    formData.append("description", description)
  
    const result = await upload.post('/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
    return result.data
  }

export default function EditCompartilhar() {

    //useStates
    const { user } = useContext(Context)
    const history = useHistory()
    const [file1, setFile1] = useState(null)
    const [file2, setFile2] = useState(null)
    const [file3, setFile3] = useState(null)
    const [file4, setFile4] = useState(null)
    const [file5, setFile5] = useState(null)
    const [cat, setCat] = useState("")
    const [preco, setPreco] = useState("")
    const [cepp, setCepp] = useState("")
    const [cep, setCep] = useState("")
    const [contrato, setContrato] = useState("")
    const [quarto, setQuarto] = useState("")
    const [sala, setSala] = useState("")
    const [cozinha, setCozinha] = useState("")
    const [banheiro, setBanheiro] = useState("")
    const [area, setArea] = useState("")
    const [desc, setDesc] = useState("")
    const [moradores, setMoradores] = useState("")
    const [pfile1, setPfile1] = useState(false)


    // const [post, setPost] = useState()
    const [alertImg, setAlertImg] = useState(false)
    const location = useLocation();

  const path = location.pathname.split("/")[2]

    //pegar  os dados
    useEffect(()=>{
        const getPost = async ()=>{
          const res = await api.get("/compartilhar/"+path)
        //   setPost(res.data)
          setCat(res.data.categories)
          setPreco(res.data.preco)
          setCepp(res.data.cepp)
          setCep(res.data.cep)
          setContrato(res.data.contrato)
          setQuarto(res.data.quarto)
          setSala(res.data.sala)
          setCozinha(res.data.cozinha)
          setBanheiro(res.data.banheiro)
          setArea(res.data.area)
          setDesc(res.data.desc)
          setMoradores(res.data.moradores)
        }
        getPost()

      }, [path])

    const handleSubmit = async (e)=>{
        e.preventDefault()
    
        const newPost = {
          username: user.username,
          userwhatsapp: user.whatsapp,
          categories: cat,
          moradores: moradores,
          preco,
          desc,
          cep: cep,
          cidade: cep.localidade,
          contrato,
          quarto,
          sala,
          cozinha,
          banheiro,
          area,

        };
        if(file1){
          try{
            const description = Date.now() + file1.name;
            const result = await postImage({image: file1, description})
            newPost.photo1 = result.imagePath.split("/")[2];
            
            
          }catch(err){}
        }
        if(file2){
          try{
            const description = Date.now() + file2.name;
            const result = await postImage({image: file2, description})
            newPost.photo2 = result.imagePath.split("/")[2];
            
            
          }catch(err){}
        }
        if(file3){
            try{
              const description = Date.now() + file3.name;
              const result = await postImage({image: file3, description})
              newPost.photo3 = result.imagePath.split("/")[2];
              
              
            }catch(err){}
          }
          if(file4){
            try{
              const description = Date.now() + file4.name;
              const result = await postImage({image: file4, description})
              newPost.photo4 = result.imagePath.split("/")[2];
              
              
            }catch(err){}
          }
          if(file5){
            try{
              const description = Date.now() + file5.name;
              const result = await postImage({image: file5, description})
              newPost.photo5 = result.imagePath.split("/")[2];
              
            }catch(err){}
          }
        try{
          if(file1 !== null && file2 !== null && file3 !== null && file4 !== null && file5 !== null){
            await api.put(`/compartilhar/${path}`, newPost)
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1300
            })
            // window.location.reload();
            window.location.replace(`/habitacao/compartilhar/${path}`);
            setAlertImg(false)
            history.goBack()

            // window.location.replace(`/habitacao/compartilhar/${path}`);
          }else{
            setAlertImg(true)
          }
        }catch(err){}
      }


      const setImg = () =>{
        if(file1 !== null && file2 !== null && file3 !== null && file4 !== null && file5 !== null){
          if(file1 === null){
            setPfile1(true)
          }else{
            setAlertImg(false)
          }
        }else{
          setAlertImg(true)
        }
      }

      //cep
      const Cepfuncion = async ()=>{
        try{
          const cepSearch = cepp.replace(/\D/g, '');
          await fetch(`https://viacep.com.br/ws/${cepSearch}/json/`)
          .then(res=>res.json()).then(data => setCep(data)
          )
        }catch(err){
          alert(err)
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
            window.location.replace(`/habitacao/compartilhar/${path}`);
          }
        })
          
      }
  return (
    <div className='fullContentAluguel'>
        <div className='OI' >
            <Menu />
        </div>
        <div className='menuBootstrap' >
        <nav className="navbar navbar-expand-lg navbar-light  menuBootstrap">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <div className='logoBootstrap'>
                    <div></div>
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
                    <li><Link className="dropdown-item" to="/compartilhar-cadastrar">Divulgar Compartilhamento</Link></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </div>
        <header className='headerAluguel'>
            <div className='flexHeaderAluguel'>
                <p className='buttonHeaderAluguelHeaderCadastrar'>Editar casa em compartilhamento...</p>
            </div>
        </header>
        <div className='contentSideBarForm'>
            <form className='formCadastrarContent' onSubmit={handleSubmit}>
              {alertImg && (<h6 className='headerIAlert'>Adicione as 5 imagens para proceguir...</h6>)}
              {pfile1 && (<h6 className='headerIAlert'>É oprigatório colocar a primeira imagem...</h6>)}

                <i className='headerI'>Adiciona cinco (5) imagens...</i>
                <div className='imgPhotosHoome'>
                {file1 ? (
                    <img src={URL.createObjectURL(file1)}  alt='uploadImg' className='labelFotoObject' />
                ):(
                    <label for='foto1' className='labelFoto'><i className="fa-solid fa-circle-plus sizeAdd" ></i></label>
                )}
                    <input type="file" accept="image/*" id='foto1' required className='inputFotoLabelAlugel'onChange={(e)=> setFile1(e.target.files[0])} />
                    {file2 ? (
                    <img src={URL.createObjectURL(file2)} alt='uploadImg' className='labelFotoObject' />
                    ):(
                    <label for='foto2' className='labelFoto'><i className="fa-solid fa-circle-plus sizeAdd"></i></label>
                    )}
                    <input type="file" accept="image/*" id='foto2'  className='inputFotoLabelAlugel' onChange={(e)=> setFile2(e.target.files[0])}/>
                    {file3 ? (
                    <img src={URL.createObjectURL(file3)} alt='uploadImg' className='labelFotoObject' />
                    ):(
                    <label for='foto3' className='labelFoto'><i className="fa-solid fa-circle-plus sizeAdd"></i></label>
                    )}
                    <input type="file" accept="image/*" id='foto3'  className='inputFotoLabelAlugel' onChange={(e)=> setFile3(e.target.files[0])}/>
                    {file4 ? (
                    <img src={URL.createObjectURL(file4)} alt='uploadImg' className='labelFotoObject' />
                    ):(
                    <label for='foto4' className='labelFoto'><i className="fa-solid fa-circle-plus sizeAdd"></i></label>
                    )}
                    <input type="file" accept="image/*" id='foto4'  className='inputFotoLabelAlugel' onChange={(e)=> setFile4(e.target.files[0])}/>
                    {file5 ? (
                    <img src={URL.createObjectURL(file5)} alt='uploadImg' className='labelFotoObject' />
                    ):(
                    <label for='foto5' className='labelFoto'><i className="fa-solid fa-circle-plus sizeAdd"></i></label>
                    )}
                    <input type="file" accept="image/*" id='foto5'  className='inputFotoLabelAlugel' onChange={(e)=> setFile5(e.target.files[0])}/>
                </div>
                <div className='inputsFormeCadastrarAluguel'>
                    <div className='precoType'>
                        <input type='text'value={cat} placeholder='Categoria' required className='precoTypeInput' onChange={(e)=> setCat(e.target.value)}/>
                        <input type='number'value={preco} placeholder='Preço' required className='precoTypeInput' onChange={(e)=> setPreco(e.target.value)}/>
                    </div>
                    <div className='precoType'>
                        <input type='number' value={contrato} maxLength='2' placeholder='Nº Quintal' required className='precoTypeInput' onChange={(e)=> setContrato(e.target.value)}/>
                        <input type='text' value={cep.cep} placeholder='CEP' maxLength='9'
                                minLength='9' required className='precoTypeInput'
                                onChange={(e)=> setCepp(e.target.value)} 
                                onBlur={Cepfuncion}
                        />
                    </div>
                    <div className='precoType'>
                        <input type='number' value={quarto} placeholder='Nº quarto' required className='precoTypeInput' onChange={(e)=> setQuarto(e.target.value)}/>
                        <input type='number'value={sala} placeholder='Nº Sala' required className='precoTypeInput' onChange={(e)=> setSala(e.target.value)}/>
                        
                    </div>
                    <div className='precoType'>
                        <input type='number' value={banheiro} placeholder='Nº Banheiro' required className='precoTypeInput' onChange={(e)=> setBanheiro(e.target.value)}/>
                        <input type='number'value={area} placeholder='NºÁrea' required className='precoTypeInput' onChange={(e)=> setArea(e.target.value)}/>
                        
                    </div>
                    <div className='precoType'>
                      <input type='number' value={cozinha} placeholder='Nº Cozinha' required className='precoTypeInput' onChange={(e)=> setCozinha(e.target.value)}/>
                      <input type='number' value={moradores} placeholder='Nº Pessoa' required className='precoTypeInput' onChange={(e)=> setMoradores(e.target.value)}/>
                    </div>
                    <div className='precoType'>
                        <textarea className='forNewDesc' value={desc} placeholder='Descreve a casa em poucas palavras....' maxLength='200' onChange={(e)=> setDesc(e.target.value)}></textarea>
                    </div>
                    <div className='precoTypeone'>
                        <button type='submit' onClick={setImg} className='CadastrarcasaEmAluguel'>Editar...</button>
                        <div className='canc' onClick={TodosPro}><i>Cancelar</i></div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
