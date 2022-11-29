import React, { Component } from 'react'
import ProgressBar from './ProgressBar';



export default class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:0.5},
            {id: 2, value: "Css", xp:1},
            //{id: 3, value: "php", xp:0.7},
            {id: 3, value: "python", xp:0.4},

        ],
        frameworks: [
            {id: 1, value: "React", xp:0.4},
            //{id: 2, value: "Bootstrap", xp:2},
            {id: 2, value: "Sass", xp:0.3},
           // {id: 3, value: "Materiel UI", xp:0.5},
        ]
    }
  render() {
    let {languages, frameworks} = this.state;

    return (
      <div className='languagesFrameworks'>
        <ProgressBar 
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar 
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="frameworksDisplay"
        />
      </div>
    )
  }
}
