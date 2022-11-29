import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-running'></i>
                    <span>Musculation</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-gamepad'></i>
                    <span>Jeux vidéos</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-book'></i>
                    <span>Lecture</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;