import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className="Home">
        <div className="homeIm">
            <div className="first">
                <small className="Holo">Hello</small>
                <h1 className="im">I'm Mariano</h1>
                <p className="fleelancer">Freelancer web and Mobile</p>
                <p className="developer">develepe</p>

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptas vel! Tempore esse minima maxime tenetur sunt, praesentium consequatur.
                </p>
                <p className="ParagrafAbout">
                    Reprehenderit, voluptas vel! Tempore esse minima maxime tenetur sunt, praesentium, consectetur odit.
                </p>
                <div className="buutonsAbout">
                    <button className="BuutonAbout">See lattes</button>
                    <button className="BuutonHere">Download CV</button>
                </div>
            </div>
        </div>
    </div>
  )
}
