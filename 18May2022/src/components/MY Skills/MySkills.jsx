import React from 'react'
import frontend from "./Front-End.png";
import backend from "./backend.png"
import database from "./database-storage.png"

import "./MySkills.css"

const MySkills = () => {
    return (
        <section className="section skills has-text-centered myskills" id="MYSKILLS">
  <div className="container is-narrow">
    <div className="box">
      <div className="content">
        <div className="columns is-centered">
          <div className="column">
            <figure className="image"><img className="is-skill-icon icon__skill" src={frontend} /></figure>
            <h1 className="title is-size-4 is-spaced">Front-end Developer</h1>
            <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
            <p className="list-title has-text-primary has-text-weight-normal">Things I enjoy designing:</p>
            <p>Web,Mobile,Logos</p>
            <p className="list-title has-text-primary has-text-weight-normal">Design Tools:</p>
            <ul>
              <li>Canva</li>
              <li>StorySet</li>
              <li>Flaticon</li>
              <li>Vectr</li>
              <li>bootstrap &amp;Bulma</li>
              <li>fripik</li>
              <li>CodeSandBox</li>
              <li>Codepen</li>
            </ul>
          </div>
          <div className="column">
            <figure className="image"><img className="is-skill-icon icon__skill" src={backend} /></figure>
            <h1 className="title is-size-4 is-spaced">Back-End Developer</h1>
            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <p className="list-title has-text-primary has-text-weight-normal">Languages I speak:</p>
            <p>Express,Nodejs,Ejs</p>
            <p className="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
            <ul>
              <li>VS-Code</li>
              <li>NPM</li>
              <li>POstMan</li>
              <li>API</li>
              <li>Codekit</li>
              <li>Javascript</li>
              <li>Github</li>
              <li>Gitlab</li>
              <li>Terminal</li>
            </ul>
          </div>
          <div className="column">
            <figure className="image"><img className="is-skill-icon icon__skill" src={database} /></figure>
            <h1 className="title is-size-4 is-spaced">Database-Management</h1>
            <p>Storing of Data is Important Task As large Chunks of Data is Genrated every Second</p>
            <p className="list-title has-text-primary has-text-weight-normal">Database I Use:</p>
            <p>MongoDb,my-Sql,Firebase</p>
            <p className="list-title has-text-primary has-text-weight-normal">Database Tools:</p>
            <ul>
              <li>Mongooes</li>
              <li>MySQL Workbench</li>
              <li>ROBO 3T</li>
              <li>Firebase</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default MySkills
