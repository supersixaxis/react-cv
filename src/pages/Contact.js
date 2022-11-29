import React from 'react';
import Navigation from '../components/Navigation';
import {CopyToClipboard} from 'react-copy-to-clipboard'

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation/>
            <div className='contactContent'>
                <div className='header'></div>
                    <div className='contactBox'>
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className='fas fa-map-marker-alt marker' ></i>
                                <span>Dijon</span>
                                
                            </li>
                            <li>
                                <i className='far fa-envelope '></i>
                                <CopyToClipboard text="appert.nathan@outlook.fr">
                                    <span className='clickInput'
                                    onClick={() => { alert('E-mail copié !');}}>
                                        appert.nathan@outlook.fr
                                    </span>
                                </CopyToClipboard>
                                
                            </li>
                        </ul>
                    </div>
                        <div className='socialNetwork'>
                                <ul>
                                <a href='https://www.linkedin.com/in/nathan-appert-5506b1248/' target="_blank" rel="noopener noreferrer">
                                <h4>Linkedin</h4> 
                                <i className='fab fa-linkedin'></i>
                                </a>
                                <a href='https://github.com/supersixaxis' target="_blank" rel="noopener noreferrer">
                                <h4>Github</h4> 
                                <i className='fab fa-github'></i>
                                </a>
                                <a href='https://twitter.com/Supersixaxisdev' target="_blank" rel="noopener noreferrer">
                                <h4>Twitter</h4> 
                                <i className='fab fa-twitter'></i>
                                </a>
                                </ul>
                            </div>
            </div>
        </div>
    );
};

export default Contact;