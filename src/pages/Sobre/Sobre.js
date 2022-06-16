import React from 'react'
import './Sobre.css'
import Menu from '../../components/Menu/Menu'


export default function Sobre() {
 
  return (
    <div className='desapego'>
        <Menu  />
        <div className='sidebarDesapego'>
            <div className='centerSidebar'>
                <div className='sobreheader'>Sobre...</div>
                <div className='sobreText'>
                    <p className='sobreTextParagrafo'>
                        Unilabtem é uma plataforma digital web de fácil manejo que simplifica a vida dos
                        seus usuários, que buscam por seus serviços que são oferecidos por ela. O objetivo
                        desta plataforma é estreitar a distância entre o usuário que divulga e o que deseja
                        aderir ou comprar o produto que esteja a ser divulgado nas cidades dos campus da UNILAB
                        (Ceará e Bahia) e das comunidades em torno da universidade,
                        assim ajuda tornando mais fácil encontrar as coisas perto de onde estiveres.
                        A metodologia usada no desenvolvimento é em MERN (Mongodb Express React Js Node js), com
                        react js no lado do usuário, node js e express no lado do servidor e mongodb como banco de
                        dados não relacional, tendo criptografia moderna de dados sensíveis no servidor para garantir
                        segurança de informações dos usuário da plataforma, e animações no frontend com Vanilla tilt
                        js e  CSS para deixar mais convidativo e interessante a usabilidade. Os resultados alcançados
                        pelo projeto atualmente está aproximadamente 67% concluído e já  conta com a página de login,
                        cadastro, venda, Aluguel, compartilhamento e de doação (desapego) funcionando na íntegra, podendo
                         criar uma conta, fazer login,  
                        postar, ver, editar, deletar, pesquisar e filtrar produtos a venda e/ou em doação. 
                    </p>
                    
                </div>
                <div className='sobreParticipantes'>
                    <h4 className='headerSobrePartic'>Participantes</h4>
                    <div className='sobreparticipanteDiv'>
                        <img src='https://sig.unilab.edu.br/shared/verFoto?idFoto=494816&key=c7bc69afa99a94c1404d79d7bded526d' alt='#' className='imagemParti'/>
                        <div className='divDescParti'>
                            <b className='marginBott'>Doutor Sabi Moisé Bandiri</b>
                            <p className='marginBott'>Professor</p>
                            <p className='marginBott'>Cordenador</p>
                            <p className='marginBott'>@gmail</p>
                        </div>
                    </div>
                    <div className='sobreparticipanteDiv'>
                        <img src='https://sig.unilab.edu.br/shared/verFoto?idFoto=643363&key=846b8cc5a7457f43ef9bbc9380a869e6' alt='#' className='imagemParti'/>
                        <div className='divDescParti'>
                            <b className='marginBott'>Doutor Tales Paiva</b>
                            <p className='marginBott'>Professor</p>
                            <p className='marginBott'>subcoordenado</p>
                            <p className='marginBott'>@gmail</p>
                        </div>
                    </div>
                    <div className='sobreparticipanteDiv'>
                        <img src='https://media-exp1.licdn.com/dms/image/C5603AQHnsbWX2TLV2g/profile-displayphoto-shrink_200_200/0/1631393065791?e=1657152000&v=beta&t=dOLziPZ_B-IEMmBYsxvxJ0-U1x-eKCPjLoUUJ8xdFjA' alt='#' className='imagemParti'/>
                        <div className='divDescParti'>
                            <b className='marginBott'>Mariano António Vunge</b>
                            <p className='marginBott'>Graduando</p>
                            <p className='marginBott'>Colaborador</p>
                            <p className='marginBott'>@gmail</p>
                        </div>
                    </div>
                    <div className='sobreparticipanteDiv'>
                        <img src='https://w7.pngwing.com/pngs/114/579/png-transparent-pink-cross-stroke-ink-brush-pen-red-ink-brush-ink-leave-the-material-text.png' alt='#' className='imagemParti'/>
                        <div className='divDescParti'>
                            <b className='marginBott'>Marcos Domingos Simão Kiacola</b>
                            <p className='marginBott'>Graduando</p>
                            <p className='marginBott'>Colaborador</p>
                            <p className='marginBott'>@gmail</p>
                        </div>
                    </div>
                    
                </div>
                <div className='sobreParticipantes'>
                    <h4 className='headerSobrePartic'>Redes sociais...</h4>
                    <div className='sobreparticipanteDiv'>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
