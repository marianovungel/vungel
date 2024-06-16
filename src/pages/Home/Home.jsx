import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
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

    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }

    const LeftVenda = (e)=>{
        e.preventDefault()
        carrocelVenda.current.scrollLeft -= carrocelVenda.current.offsetWidth
    }
    const RightVenda = (e)=>{
        e.preventDefault()
        carrocelVenda.current.scrollLeft += carrocelVenda.current.offsetWidth
    }

    const Facebook  = (data)=>{
        console.log(data)
        window.open(`${data}`)
    }
    const OpenParte  = (data)=>{
        console.log(data)
        window.location.replace(`${data}`)
    }



  return (
    <div className="Home">

        <div className='Humburguer'>
            <div className="topnav">
                <a href="#home" className="active">
                    <img src='./cgadt.png' alt='' className='ImgHumburguer' />
                </a>
                <div  className="icon" onClick={myFunction}>
                    <i className="fa-solid fa-bars iall"></i>
                </div>
                <div id="myLinks">
                    <div onClick={()=>OpenParte("/#About")}>About</div> 
                    <div onClick={()=>OpenParte("/#Services")}>Services</div>
                    <div onClick={()=>OpenParte("/#Projects")}>Projects</div>
                    <div onClick={()=>OpenParte("/#Technologies")}>Technologies</div>
                    <div onClick={()=>OpenParte("/#CONTACTS")}>Contacts</div>
                </div>
            </div>
        </div>


        <div className='Header' id="here">
            <div className="allcontent">
                <div className="flag">
                    <i className="fa-brands fa-square-facebook iconsoc" onClick={()=> Facebook("facebook")}></i>
                    <i className="fa-brands fa-twitter iconsoc flagItem" onClick={()=> Facebook("facebook")}></i>
                    <i className="fa-brands fa-square-instagram iconsoc flagItem" onClick={()=> Facebook("facebook")}></i>
                    <i className="fa-brands fa-youtube iconsoc flagItem" onClick={()=> Facebook("facebook")}></i>
                </div>
                <div className="menu">
                    <div className="itensMenu">
                        <div onClick={()=>OpenParte("/#About")} className="itemMenu">About</div>
                        <div onClick={()=>OpenParte("/#Services")} to="/#Services" className="itemMenu">Services</div>
                        <div onClick={()=>OpenParte("/#Projects")} className="itemMenu">Projects</div>
                        <div onClick={()=>OpenParte("/#Technologies")} className="itemMenu">Technologies</div>
                        <div onClick={()=>OpenParte("/#CONTACTS")} className="itemMenu">Contacts</div>
                    </div>
                </div>

            </div>
        </div>


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

        <div className="centerAbout" id="About">
            <div className="imgSection">
                <img className="imgAbout" src="./im.png" alt="Mariano António Vunge" />
            </div>
            <div className="textAbout">
                <h3 className="headerAbout" id="About">About Me</h3>
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

        <div className="service" id='Services'>
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

        <div className="projetos" id='Projects'>
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

        <div className="Tecnologias" id='Technologies'>
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

        <div className="contactosContentPage" id="CONTACTS">
        <div className="fullRed">
            <div className="telContent">
                <div className="TitleRed">CONTACTS:</div>
                <div className="ItemTelRed">
                    <div className="descItemTelRed">
                        <i className="fa-solid fa-location-dot sizeRedIcon"></i>
                        <div className="descTitleRedTell">
                            <div className="TitleTelItemRed">Address</div>
                            <div className="EnderecoItemTellRed">Brasil</div>
                        </div>
                    </div>
                    <div className="descItemTelRed">
                        <i className="fa-solid fa-mobile-screen-button sizeRedIcon"></i>
                        <div className="descTitleRedTell">
                            <div className="TitleTelItemRed">Telephones</div>
                            <div className="EnderecoItemTellRed">( 85 ) 99139 - 2625</div>
                        </div>
                    </div>
                    <div className="descItemTelRed">
                        <i className="fa-regular fa-envelope sizeRedIcon"></i>
                        <div className="descTitleRedTell">
                            <div className="TitleTelItemRed">Email</div>
                            <div className="EnderecoItemTellRed">vungemariano@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="RedContent">
                <div className="TitleFacebookRed">WE ARE ON THE NETWORK:</div>
                <div className="midiasSociasRed">
                    <i className="fa-brands fa-square-facebook iconsocRed" onClick={()=>Facebook("https://www.linkedin.com/in/mariano-vunge-10283a1b4/")}></i>
                    <div className="tracoRed"></div>
                    <i className="fa-brands fa-twitter iconsocRed" onClick={()=>Facebook("x")}></i>
                    <div className="tracoRed"></div>
                    <i className="fa-brands fa-square-instagram iconsocRed" onClick={()=>Facebook("instagram")}></i>
                    <div className="tracoRed"></div>
                    <i className="fa-brands fa-youtube iconsocRed" onClick={()=>Facebook("youtube")}></i>
                </div>
                <div className="divTextRed">
                    For more information, take a look at my profile on social media...
                </div>
            </div>
        </div>
      </div>  
      
      <div className='Footer'>
      <div className="contenFooter">
        <div className="empityFooter"></div>
        <div className="textFooter">Copyright © 2024 Vungel | Created by 
        <i className='DevName'>- Mariano A. Vunge</i>
        </div>
        <div className="buttonFooter" onClick={()=>OpenParte("/#here")}><i className="fa-solid fa-circle-chevron-up VoltarArrow"></i></div>
      </div>
    </div>
    </div>
  )
}