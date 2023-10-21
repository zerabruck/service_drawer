import React, {useState} from 'react'
import './style.css'
type SetStateFunction<T> = (prevState: T | ((prevState: T) => T)) => void;
interface PositionProp{
    x:number,
    y:number
  }
const Header = ({scaleFactor, setScaleFactor, setPosition}:{scaleFactor:number, setScaleFactor:SetStateFunction<number>, setPosition:SetStateFunction<PositionProp>}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scaleOptions = [25, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150];

  const handleDropdownChange = (value:number) => {
    setScaleFactor(value);
    setIsDropdownOpen(false);
    console.log("hello world")
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const renderScaleOptions = () => {
    return scaleOptions.map((option, index) => (
      <div
        key={option}
        className="dropdown-option"
        onClick={() => handleDropdownChange(index)}
      >
        <p>
        {`${option}%`}
        </p>
        {
            index === scaleFactor &&
        <svg xmlns="http://www.w3.org/2000/svg"  fill="#6969e1" version="1.1" id="Capa_1" width="12px" height="12px" viewBox="0 0 335.765 335.765" >
                <g>
                    <g>
                        <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795   "/>
                    </g>
                </g>
                </svg>
        }
      </div>
    ));
  }; 

  return (
    <div className='header-container'>
        <div className='header-left-side'>
            <p>Services</p>
            <button>0</button>
        </div>

        <div className='header-right-side'>
            <p>List view</p>
            <button onClick={()=>setPosition({x:400,y:100})} className='header-right-align-button'  data-tooltip="Go to center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 24 24" fill="none">
            <path opacity="0.15" d="M20 4L3 11L10 14L13 21L20 4Z" fill="#a2a1a1"/>
            <path d="M20 4L3 11L10 14L13 21L20 4Z" stroke="#a2a1a1" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
            </button>
            <button onClick={()=> setScaleFactor(prev => (prev - 1 < 0 ? scaleOptions.length - 1: (prev - 1) % scaleOptions.length)) }>
                -
            </button>

            <div>
        
          <div className="custom-dropdown">
            <p className='custom-dropdown-header' onClick={toggleDropdown}>
              {`${scaleOptions[scaleFactor]}%`}
            </p>   
            {
                isDropdownOpen && (<div className={`dropdown-menu`}>
                {renderScaleOptions()}
              </div>)
            }
            
          </div>
        
      </div>
            <button onClick={()=> setScaleFactor(prev => (prev + 1 === scaleOptions.length ? 0: (prev + 1) % scaleOptions.length))}>
                +
            </button>
        </div>

    </div>
  )

}

export default Header