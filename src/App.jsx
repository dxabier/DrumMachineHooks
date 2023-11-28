import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {useEffect, useState} from 'react';
import './App.css';
// import { toHaveClass } from '@testing-library/jest-dom/matchers';



function App() {  

  const [input, setInput] = useState('');
  useEffect(() => {    
  
    function handleClick(e) {
      let audio = '';
      const soundKey = e.target.getAttribute('id');
      console.log(soundKey);
      if (soundKey === 'heater1' || e.keyCode === 81) {
        setInput('Heater 1')
        const ele = document.getElementById('heater1');        
        ele.style.backgroundColor = 'red';
        audio = document.getElementById('Q');
        audio.paused ? audio.play() : audio.currentTime = 0
      } else if (soundKey === "heater2" || e.keyCode === 87) {
        setInput('Heater 2')
        const ele = document.getElementById('heater2');
        ele.style.backgroundColor = 'red';
        audio = document.getElementById('W');
        audio.paused ? audio.play() : audio.currentTime = 0
      } else if (soundKey === "heater3" || e.keyCode === 69) {
        setInput('Heater 3')  
        const ele = document.getElementById('heater3');
        ele.style.backgroundColor = 'red';
        audio = document.getElementById('E');
        audio.paused ? audio.play() : audio.currentTime = 0
      } else if (soundKey === "heater4" || e.keyCode === 65) {
        setInput('Heater 4')  
        const ele = document.getElementById('heater4');
        ele.style.backgroundColor = 'red';
        audio = document.getElementById('A');
        audio.paused ? audio.play() : audio.currentTime = 0
      } else if (soundKey === "clap" || e.keyCode === 83) {
        setInput('Clap');
        const ele = document.getElementById('clap');
        ele.style.backgroundColor = 'red';
        audio = document.getElementById('S');
        audio.paused ? audio.play() : audio.currentTime = 0
      } else if (soundKey === "openhh" || e.keyCode === 68) {
        setInput('Open HH')  
        const ele = document.getElementById('openhh');
        ele.style.backgroundColor = 'red';
        audio = document.getElementById('D');
        audio.paused ? audio.play() : audio.currentTime = 0
      } else if (soundKey === "kicknhat" || e.keyCode === 90) {
        setInput('Kick n\' Hat')
        const ele = document.getElementById('kicknhat');
        ele.style.backgroundColor = 'red';
        audio = document.getElementById('Z');
        audio.paused ? audio.play() : audio.currentTime = 0
      } else if (soundKey === "kick" || e.keyCode === 88) {
        setInput('Kick');
        const ele = document.getElementById('kick');
        ele.style.backgroundColor = 'red';
        audio = document.getElementById('X');
        audio.paused ? audio.play() : audio.currentTime = 0
      } else if (soundKey === "closedhh" || e.keyCode === 67) {
        setInput('Closed HH');
        const ele = document.getElementById('closedhh');
        ele.style.backgroundColor = 'red';
        audio = document.getElementById('C');
        audio.paused ? audio.play() : audio.currentTime = 0          
      }
        
    }

    const quitar = () => {
      let ele = document.getElementsByClassName('drum-pad')
      for (var x=0; x < 9; x++ ) {
        ele[x].style.backgroundColor=''
      }
    }
        
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('mouseup', quitar)
    document.addEventListener('keydown', handleClick)
    document.addEventListener('keyup', quitar)
    // Limpieza: remover los eventos cuando el componente se desmonta
    return () => {      
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('mouseup', quitar);
      document.removeEventListener('keydown', handleClick);
      document.removeEventListener('keyup', quitar)
    };
  }, []);
  
  return (
    <div id="display" className="container">
      <h1 className="text-center title">DRUM MACHINE</h1>
      <div className="row bg-dark mt-5">
      
        <div className="col-md-1 col-sm-0"></div>
        <div className="col-md-10 col-sm- 12 text-center ">
          <div className="conte">
          
            <div className="row">
              
              <div id="heater1" className="col drum-pad" >Q                
                <audio id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className='clip'></audio>
              </div>
              <div id="heater2" className="col drum-pad" >W                
                <audio id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className='clip'></audio>
              </div>
              <div id="heater3" className="col drum-pad" >E                
                <audio id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className='clip'></audio>
              </div>
            
            
              <div id="heater4" className="col drum-pad" >A
                <audio id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className='clip'></audio>
              </div>
              <div id="clap" className="col drum-pad" >S
                <audio id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className='clip'></audio>
              </div>
              <div id="openhh" className="col drum-pad" >D
                <audio id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className='clip'></audio>
              </div>
            
        
              <div id="kicknhat" className="col drum-pad">Z
                <audio id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className='clip'></audio>
              </div>
              <div id="kick" className="col drum-pad" >X
                <audio id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className='clip'></audio>
              </div>
              <div id="closedhh" className="col drum-pad" >C
                <audio id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className='clip'></audio>
              </div>
              
            </div>
            
          </div>
        </div>
        <div className="text-center">
          <h1 id="descripcion" className='m-sm-5 pantalla'>
            {input}
          </h1>
        </div>
      </div>      
    </div>
  );
}

export default App;
