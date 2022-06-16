import React from 'react'
import './Registrar.css'
import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import api from '../../services/api.js'

export default function Registrar() {

    const [username, setUsername] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [password, setPassword] = useState("")
    const [error, seterror] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const history = useHistory()

    const handleSubmit = async (e)=>{
        e.preventDefault();
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
                        <input className='inputLogin' type='password' placeholder='  Password' minLength='4' onChange={e=>setPassword(e.target.value)} />
                        <input className='inputLogin' type='password' placeholder='  Confirme a Senha...' onChange={e=>setConfirmPassword(e.target.value)} />
                        <button className='inputLogin entrarbutton' type='submit'>Registrar</button>
                    </form>
                    {error && <h3 className='errRegister'>Confirme Corretamente a sua Senha!</h3>}
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