import React, { useState, useEffect } from 'react';
import api from './services/api.js';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })

    console.log(response.data);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required value={github_username} onChange={ e => setGithub_username(e.target.value)} />
          </div>
         
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)}/>
          </div>

          <div className="input-group">
            <div className="input-block">
             <label htmlFor="latitude">Latitude</label>
             <input name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}/>
          </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)} />
            </div>

          </div>      
          
          <button type="submit">Salvar!</button>
        </form>
      </aside>
      
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/55364588?s=460&v=4" alt="Gabriel Oliveira"/>
              <div className="user-info">
                <strong>Gabriel Oliveira</strong>
                <span>ReactJS, React Native, HTML, Node.JS</span>
              </div>
            </header>
            <p>A nice guy!</p>
            <a href="https://github.com/oliveiiraa">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/55364588?s=460&v=4" alt="Gabriel Oliveira"/>
              <div className="user-info">
                <strong>Gabriel Oliveira</strong>
                <span>ReactJS, React Native, HTML, Node.JS</span>
              </div>
            </header>
            <p>A nice guy!</p>
            <a href="https://github.com/oliveiiraa">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/55364588?s=460&v=4" alt="Gabriel Oliveira"/>
              <div className="user-info">
                <strong>Gabriel Oliveira</strong>
                <span>ReactJS, React Native, HTML, Node.JS</span>
              </div>
            </header>
            <p>A nice guy!</p>
            <a href="https://github.com/oliveiiraa">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/55364588?s=460&v=4" alt="Gabriel Oliveira"/>
              <div className="user-info">
                <strong>Gabriel Oliveira</strong>
                <span>ReactJS, React Native, HTML, Node.JS</span>
              </div>
            </header>
            <p>A nice guy!</p>
            <a href="https://github.com/oliveiiraa">Acessar perfil no GitHub</a>
          </li>                              
        </ul>
      </main>
    
    </div>
  );
}

export default App;


// Componente: bloco isolado de HTML/CSS/JS, o qual não interfere no restante da aplicação
// Estado: Informações mantidas pelo componentente (Lembrar: Imutabilidade)
// Propriedade: Informações que um componente PAI passam para o componente FILHO