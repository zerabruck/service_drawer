import React, { useState } from 'react';
import ParentComponent from './ParentComponent.tsx';
import { Categories } from '../types/service-types';
import './style.css'
interface PositionProp{
  x:number,
  y:number
}
type SetStateFunction<T> = (prevState: T | ((prevState: T) => T)) => void;

const DraggableComponent = ({position, setPosition}:{position:PositionProp, setPosition:SetStateFunction<PositionProp>}) => {
  const [currentService, setCurrentService] = useState<Categories>({
    id:-1,
    parent:{
        id:1,
        name:'Categories'
    },
    childIsService:false,
    childIsCategory:false,
    children:[]
})

  const handleDragStart = (e: React.MouseEvent) => {
    const initialX = e.clientX - position.x;
    const initialY = e.clientY - position.y;

    const handleDrag = (e: React.MouseEvent) => {
      const newX = e.clientX - initialX;
      const newY = e.clientY - initialY;
      setPosition({ x: newX, y: newY });
    };

    const handleDragEnd = () => {
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleDragEnd);
    };
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
  };
  const addService = () =>{
      setCurrentService({...currentService, children:[...currentService.children,
        {id: 1,
          parent:{
              id:currentService.children.length + 1,
              name:''
          },
          childIsService:false,
          childIsCategory:false,
          children:[]
        }
      ]})
    
  }

  return (
    <div
      className="draggable-component org-chart"
      style={{ left: position.x, top: position.y }}
      onMouseDown={handleDragStart}
    >

   <ul>
     <li>
      <div className='service-node-parent '>
        <p className='service-node-category-header'>Categories</p>
       <div className='service-node'> 
      <svg onClick={addService} xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 24 24" fill="none">
        <g id="Edit / Add_Plus">
        <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
          </div>
        </div>
        {
          currentService.children.length !== 0 && 
          <ul>
          {
            currentService.children.map(category =>{
              return (
                <li key={category.id}>
                  {
                    <ParentComponent setParent={setCurrentService} categories = {category}/>
                  }
                </li>
                
              )
            })
          }
        </ul>
        }   
     </li>
   </ul> 
   
    </div>
  );
};

export default DraggableComponent;
