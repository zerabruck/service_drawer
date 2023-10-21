import logo from './logo.svg';
import './App.css';
import DraggableComponent from './service-components/DragbleComponent.tsx';
import './service-components/style.css'
import Header from './service-components/Header.tsx';
import React,{useState} from 'react';

function App() {
  const [scaleFactor, setScaleFactor] = useState(8);
  const scaleOptions = [25, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150];
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div className="App">
      <main>
      <Header setPosition={setPosition} scaleFactor={scaleFactor} setScaleFactor={setScaleFactor}/>
        <body>
          <div  className='service-body'>
            <button onClick={() => setPosition(prev => ({...prev, y:prev.y + 10}))} className='service-body-button service-body-down-button'> 
            <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 1024 1024" className="icon" version="1.1">
              <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffff"/></svg>
             </button>
            <button onClick={() => setPosition(prev => ({...prev, y:prev.y - 10}))} className='service-body-button service-body-up-button '> 
            <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 1024 1024" className="icon" version="1.1">
              <path d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z" fill="#ffff"/></svg>
             </button>
            <button onClick={() => setPosition(prev => ({...prev, x:prev.x + 10}))} className='service-body-button service-body-right-button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffff"  width="12px" height="12px" viewBox="0 0 56 56">
              <path d="M 13.8320 43.5625 C 14.4883 43.5625 14.9336 43.3516 15.4258 43.1172 L 41.7695 31.2813 C 43.1055 30.6484 44.1602 29.6172 44.1602 28.1172 C 44.1602 26.6406 43.1289 25.5625 41.7461 24.9532 L 15.4258 12.8359 C 14.9570 12.6016 14.5351 12.4375 13.9258 12.4375 C 12.7070 12.4375 11.8398 13.2813 11.8398 14.5235 C 11.8398 15.6016 12.4023 16.2110 13.3867 16.6797 L 38.6055 27.8125 L 38.6055 28.0703 L 13.3867 39.2969 C 12.4023 39.7656 11.8398 40.3750 11.8398 41.4531 C 11.8398 42.7422 12.6836 43.5625 13.8320 43.5625 Z"/></svg>
               </button>
            <button onClick={() => setPosition(prev => ({...prev, x:prev.x - 10}))} className='service-body-button service-body-left-button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffff"  width="12px" height="12px" viewBox="0 0 56 56">
              <path d="M 42.1680 43.5625 C 43.3164 43.5625 44.1602 42.7422 44.1602 41.4531 C 44.1602 40.3750 43.5976 39.7656 42.6133 39.2969 L 17.3711 28.0703 L 17.3711 27.8125 L 42.6133 16.6797 C 43.5976 16.2110 44.1602 15.6016 44.1602 14.5235 C 44.1602 13.2813 43.2929 12.4375 42.0742 12.4375 C 41.4648 12.4375 41.0429 12.6016 40.5742 12.8359 L 14.2304 24.9532 C 12.8711 25.5625 11.8398 26.6406 11.8398 28.1172 C 11.8398 29.6172 12.8945 30.6484 14.2304 31.2813 L 40.5742 43.1172 C 41.0664 43.3516 41.5117 43.5625 42.1680 43.5625 Z"/></svg>
            </button>
            <div className='centered'  style={{ transform: `scale(${scaleOptions[scaleFactor ]/ 100}) ` }}>
          <DraggableComponent position={position} setPosition={setPosition}/>
            </div>
          </div>

        </body>
      </main>
      
    </div>
  );
}

export default App;
