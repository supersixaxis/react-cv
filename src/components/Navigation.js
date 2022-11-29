import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                <img src='./media/Nathan.jpg' alt='profil-pic'/>
                <h3> Appert Nathan</h3>
                </div>
            </div>
            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink exact='true' className={nav => (nav.isActive ? "navActive" : "navNotActive")}  to="/" >
                        <i className='fas fa-home'></i>
                        <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={nav => (nav.isActive ? "navActive" : "navNotActive")} to="/competences" >
                        <i className='fas fa-mountain'></i>
                        <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={nav => (nav.isActive ? "navActive" : "navNotActive")} to="/portfolio" >
                        <i className='fas fa-images'></i>
                        <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={nav => (nav.isActive ? "navActive" : "navNotActive")} to="/contact" >
                        <i className='fas fa-address-book'></i>
                        <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/nathan-appert-5506b1248/' target="_blank" rel="noopener noreferrer">
                            <i className='fab fa-linkedin'></i>
                            </a>
                    </li>
                    <li>
                        <a href='https://github.com/supersixaxis' target="_blank" rel="noopener noreferrer">
                            <i className='fab fa-github'></i>
                            </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/Supersixaxisdev' target="_blank" rel="noopener noreferrer">
                            <i className='fab fa-twitter'></i>
                            </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/nathan-appert-5506b1248/' target="_blank" rel="noopener noreferrer">
                            <i className='fab fa-codepen'></i>
                            </a>
                    </li>
                </ul>
                <div className='signature'>
                    <p>Nathan Appert - 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;