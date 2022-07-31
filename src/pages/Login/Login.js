import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import {useRef, useContext} from 'react'
import {Context} from '../../Context/Context'
import api from '../../services/api'

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const {isFetching, dispatch } = useContext(Context)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({ type: "LOGIN_START"})
        try{
            const res = await api.post("/auth/router/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data})
            console.log(res.data)
        }catch(err){
            dispatch({ type: "LOGIN_FAILURE"})
        }
    }

  return (
    <div className="loginLogin">
        <div className='content'>
            <div className='logoLoginRes'>
                <img className='logoImgRes' src='./image/branca.png' alt='logo'/>
            </div>

            <div className='sectionRES'>
                <div className='form'>
                    <form className='loginForm' onSubmit={handleSubmit}>
                            <div className='valillaTilt'>
                                <h2 id='h2Margin'>LOGIN</h2>
                                <input className='inputLogin' type='text' placeholder=' User' ref={userRef} minLength="2" required />
                                <input className='inputLogin' type='password' placeholder=' Password' minLength='4' ref={passwordRef} required/>
                                <button className='inputLogin entrarbutton' type='submit' disabled={isFetching}>Sing In</button>
                                <div className='registrarAndFogat'>
                                    <Link to='/registrar'><i className='TermosCreate' id='nawCreate'>Criar conta</i></Link>
                                    <Link to='/sendemail'>
                                        <button className='fogatPass'>Esqueceu a senha?</button>
                                    </Link>
                                </div>
                            </div>
                    </form>
                    <div className='criar'>
                    
                        <h6 className='Termos'><Link to='#'>Termos e Políticas de uso da aplicação</Link></h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}