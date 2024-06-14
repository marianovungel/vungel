import React, { useRef, useState } from 'react'
import './Home.css'

const newVar = [
    {
        _id: "1",
        profilePic:"./afri.png",
        nome:"African-coder"

    },
    {
        _id: "1",
        profilePic:"./afri.png",
        nome:"African-coder"

    },
    {
        _id: "1",
        profilePic:"./afri.png",
        nome:"African-coder"

    },
    {
        _id: "1",
        profilePic:"./afri.png",
        nome:"African-coder"

    },
    {
        _id: "1",
        profilePic:"./afri.png",
        nome:"African-coder"

    },
    {
        _id: "1",
        profilePic:"./afri.png",
        nome:"African-coder"

    },
    {
        _id: "1",
        profilePic:"./afri.png",
        nome:"African-coder"

    },
    {
        _id: "1",
        profilePic:"./afri.png",
        nome:"African-coder"

    },
    {
        _id: "1",
        profilePic:"./afri.png",
        nome:"African-coder"

    },
    {
        _id: "1",
        profilePic:"./afri.png",
        nome:"African-coder"

    },
    {
        _id: "1",
        profilePic:"./afri.png",
        nome:"African-coder"

    },
    {
        _id: "1",
        profilePic:"./im.png",
        nome:"African-coder"

    },
    {
        _id: "1",
        profilePic:"./im.png",
        nome:"African-coder"

    },
]


export default function Home() {
    const [vendaVazia, setVendaVazia] = useState(false)
    const [data, setData] = useState(newVar)
    const carrocelVenda = useRef(null)

    const LeftVenda = (e)=>{
        e.preventDefault()
        carrocelVenda.current.scrollLeft -= carrocelVenda.current.offsetWidth
    }
    const RightVenda = (e)=>{
        e.preventDefault()
        carrocelVenda.current.scrollLeft += carrocelVenda.current.offsetWidth
    }
  return (
    <div className="Home">
        <div className="homeIm">
            <div className="first">
                <small className="Holo">Hello</small>
                <h1 className="im">I'm Mariano</h1>
                <p className="fleelancer">Freelancer web and Mobile</p>
                <p className="developer">develeper</p>

                <button className="BuutonHere">Here I'm</button>
            </div>
            <div className="secund">
                <img className="ImgHome" src="./home.png" alt="Mariano António Vunge" />
            </div>
        </div>

        <div className="centerAbout">
            <div className="imgSection">
                <img className="imgAbout" src="./im.png" alt="Mariano António Vunge" />
            </div>
            <div className="textAbout">
                <h3 className="headerAbout">About Me</h3>
                <i className="row"></i>
                <p className="ParagrafAbout">
                    Frontend Web and Mobile Developer for 5 years with Javascript fremeworks, database, backend, UI & UX Designer. Ability to solve problems and learn quickly.
                </p>
                <p className="ParagrafAbout">
                    I'm looking for opportunities to apply my knowledge in a growing technology company.
                </p>
                <div className="buutonsAbout">
                    <button className="BuutonAbout">See lattes</button>
                    <button className="BuutonHere">Download CV</button>
                </div>
            </div>
        </div>

        <div className="service">
            <div className="marginCenterServece">
                <div className="textService">
                    <h3 className="headerAbout">Services</h3>
                    <i className="row"></i>
                    <p className="ParagrafAbout">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptas vel! Tempore esse minima maxime tenetur sunt, praesentium consequatur.
                    </p>
                </div>
            </div>
        </div>

        <div className="secundServece">
            <div className="centerSecundService">

                <div className="CardService">
                    <div className="backColor">
                        <i className="fa-solid fa-mobile-screen iconServerSetting"></i>
                        <h4 className="titleService">App Desig</h4>
                        <p className="paragrafoServiceCard">Services such as creating modern mobile and web</p>
                        <p className="paragrafoServiceCard">interface designs.</p>
                    </div>
                </div>
                <div className="CardService">
                    <div className="backColor">
                        <i className="fa-solid fa-laptop-code iconServerSetting"></i>
                        <h4 className="titleService">Web Developement</h4>
                        <p className="paragrafoServiceCard">Development of web applications aimed at </p>
                        <p className="paragrafoServiceCard">different areas.</p>
                    </div>
                </div>
                <div className="CardService">
                    <div className="backColor">
                        <i className="fa-solid fa-code iconServerSetting"></i>
                        <h4 className="titleService">Mobile Developement</h4>
                        <p className="paragrafoServiceCard">Mobile application development Using good</p>
                        <p className="paragrafoServiceCard">coding practices.</p>
                    </div>
                </div>
                <div className="CardService">
                    <div className="backColor">
                        <i className="fa-solid fa-server iconServerSetting"></i>
                        <h4 className="titleService">Server Developement</h4>
                        <p className="paragrafoServiceCard">Built the simple and complex server with</p>
                        <p className="paragrafoServiceCard">Node.js & Express.js</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="projetos">
            <div className="marginCenterServece">
                <div className="textService">
                    <h3 className="headerAbout">Projects</h3>
                    <i className="row"></i>
                </div>
            </div>
        </div>

        <div className="centerProject">
            <div className="BackProject">
                <h3 className="textProject">Recent Projects</h3>
            </div>
        </div>

        <div className="projectRecent">
            <div className="setentaRecent">
                {/* <div className="cardRecent">
                    <img src="" alt="" />
                    <div className="textCArdRecent">
                        <p className="titleCard">African Coder</p>
                        <p className="firsDesc">Este é o meu projeto do youtube</p>
                        <p className="firsDesc">Neste canal posto conteudos de programação</p>
                    </div>
                </div> */}

                <div className="compartilharDiv" ref={carrocelVenda}>
                {data?.map((post)=>(
                    <div className="titleColor" key={post?._id}>
                        {/* onClick={() => history.push(`/post/${post?.id}`, post)}  key={post?.photo} */}
                    <div className="Produto" key={post?._id}>
                        <div className='imgProduto' id='Produto'>
                            <img className='imagemCard sizePhoto' src={post?.profilePic} alt=' '/>
                        </div>
                        <div className='nomePreco'>
                            <h5 className='valorNome'>{post?.nome}</h5>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
                {!vendaVazia && (
                    <div className='buttomGrupe'>
                        <button onClick={LeftVenda} className='buttomLeft margnLeft borderIcon'>
                            <i className="fa-solid fa-circle-chevron-left widthIconButtom borderIcon"></i>
                        </button>
                        <button onClick={RightVenda} className='buttomLeft marginRight borderIcon'>
                            <i className="fa-solid fa-circle-chevron-right widthIconButtom borderIcon"></i>  
                        </button>
                    </div>
                )}
            </div>
        </div> 

        <div className="Tecnologias">
            <h3 className="textTecnologias">Domain Technologies</h3>
        </div>

        <div className="tecnologiaSecundTec">
            <div className="setentCenter">
                <img src="./html.jpg" alt="" className="capaciti" />
                <img src="./css.jpg" alt="" className="capaciti" />
                <img src="./js.jpg" alt="" className="capaciti" />
                <img src="./ts.jpg" alt="" className="capaciti" />
                <img src="./reactjs.jpg" alt="" className="capaciti" />
                <img src="./next.jpg" alt="" className="capaciti" />
                <img src="./sass.png" alt="" className="capaciti" />
                <img src="./boot.jpg" alt="" className="capaciti" />
                <img src="./nodejs.jpg" alt="" className="capaciti" />
                <img src="./express.jpg" alt="" className="capaciti" />
                <img src="./mongoose.jpg" alt="" className="capaciti" />
                <img src="./mysql.jpg" alt="" className="capaciti" />
                <img src="./mongo.jpg" alt="" className="capaciti" />
                <img src="./pay.jpg" alt="" className="capaciti" />
                <img src="./native.jpg" alt="" className="capaciti" />
                <img src="./expo.jpg" alt="" className="capaciti" />
                <img src="./git.jpg" alt="" className="capaciti" />
                <img src="./hub.jpg" alt="" className="capaciti" />
                <img src="./canva.jpg" alt="" className="capaciti" />
                <img src="./figma.jpg" alt="" className="capaciti" />
            </div>
        </div>   
    </div>
  )
}
