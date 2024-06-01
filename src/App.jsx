import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PanImg from '../src/assets/pan.png';
import ArekImg from '../src/assets/arek.png';
import RiqImg from '../src/assets/riq.png';
import Imgs from './imgs';
import ModalImage from 'react-modal-image';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='d-flex flex-column align-items-center mt-3'>
      <div className='d-flex gap-4'>
        <div className='d-flex flex-column char-img'>
          <span>..xPanPix..</span>
          <img src={PanImg} alt="" />
        </div>
        <div className='d-flex flex-column char-img'>
          <span>RiqManeiroo</span>
          <img className='char-img' src={RiqImg} alt="" />
        </div>
        <div className='d-flex flex-column char-img'>
          <span>Arekks</span>
          <img className='char-img' src={ArekImg} alt="" />
        </div>
      </div>
      <div className='img-gallery mt-3'>
        {
          Imgs.map((item) => (
            <div
              className='d-flex bros-img flex-column align-items-center gap-2 shadow-lg rounded justify-content-center bg-dark'
            >
              <span className='h5 mt-2'>{item.title}</span>
              <ModalImage className='rounded' small={item.img} large={item.bigImg} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
