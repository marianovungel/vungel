import React from 'react'
import './Registrar.css'
import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import api from '../../services/api.js'

export default function Registrar() {

    const [username, setUsername] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [forca, setForca] = useState(0)
    const [password, setPassword] = useState("")
    const [classificacao, setClassificacao] = useState("")
    const [error, seterror] = useState(false)
    const [err, setErr] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const history = useHistory()

    function validarSenhaForca(){
        var senha = password;
        setErr(false)
        setForca(0);
        
    
        if((senha.length === 4)){
            setForca(forca+10);
        }
    
        if((senha.length >= 5) && ((senha.match(/[a-z]+/)) || (senha.match(/[A-Z]+/))) ){
            setForca(40);
        }
    
        if((senha.length >= 6) && (senha.match(/[@#$%&;*]/)) && ((senha.match(/[a-z]+/)) || (senha.match(/[A-Z]+/))) ){
            setForca(60);
        }
    
        if((senha.length >= 7) && (senha.match(/[@#$%&;*]/)) &&  (senha.match(/([1-9]+)\1{1,}/)) && ((senha.match(/[a-z]+/)) && (senha.match(/[A-Z]+/)))){
            setForca(80);
        }
        mostrarForca(forca);
    }
    
    function mostrarForca(forca){
    
        if(forca < 30 ){
            setClassificacao("Fraca")
        }else if((forca >= 30) && (forca < 50)){
            setClassificacao("Média")
        }else if((forca >= 50) && (forca < 70)){
            setClassificacao("Forte")
        }else if((forca >= 70) && (forca < 100)){
            setClassificacao("Excelente")
        }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(classificacao==="Forte" || classificacao==="Excelente"){

            if(confirmPassword===password){
                try{
                    const description = Date.now();
                    const res = await api.post("/auth/router/register", {
                        username: username,
                        email: `${description}@gmail.com`,
                        whatsapp: whatsapp,
                        password: password
                    })
                    console.log(res)
                    history.goBack()
                }catch(err){
                    seterror(true)
                }
            }else{
                seterror(true)
            }
        }else{
            setErr(true)
        }
    }  
    
    

  return (
    <div className="login">
        <div className='content'>
            <div className='logoLogin'>
                <img className='logoImg' src='./image/u.png' alt='logo'/>
            </div>

            <div className='section'>
                
                <div className='form'>
                    <form className='loginForm' onSubmit={handleSubmit}>
                        <h2>Criar conta</h2>
                        <input className='inputLogin' type='text' placeholder='  User' onChange={e=>setUsername(e.target.value)} />
                        <input className='inputLogin' type='Number' placeholder='  8599139-2625' onChange={e=>setWhatsapp(e.target.value)} />
                        <input className='inputLogin' onKeyUp={validarSenhaForca} type='password' placeholder='  Password' minLength='4' onChange={e=>setPassword(e.target.value)} />
                        <input className='inputLogin' type='password' placeholder='  Confirme a Senha...' onChange={e=>setConfirmPassword(e.target.value)} />
                        <button className='inputLogin entrarbutton' type='submit'>Registrar</button>
                    </form>
                    {error && <h3 className='errRegister'>Confirme Corretamente a sua Senha!</h3>}
                    {err && <h3 className='errRegister'>Só é possível registrar com senha Forte ou Excelente</h3>}
                    {classificacao==="Fraca" && <h3 className='errRegister'>Senha: {classificacao}</h3>}
                    {classificacao==="Média" && <h3 className='errRegister2'>Senha: {classificacao}</h3>}
                    {classificacao==="Forte" && <h3 className='errRegister3'>Senha: {classificacao}</h3>}
                    {classificacao==="Excelente" && <h3 className='errRegister4'>Senha: {classificacao}</h3>}
                    <div className='criar'>
                        <h6 className='Termos'><Link to='#'>Termos e Políticas</Link></h6>
                         <h6><Link to='/'>Login</Link></h6>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}