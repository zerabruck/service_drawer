import React from 'react'
import { Categories } from '../types/service-types';
import './style.css'
type SetStateFunction<T> = (prevState: T | ((prevState: T) => T)) => void;
const CategoryPopUp = ({setCurrentService, currentService, setHidden}:{setCurrentService:SetStateFunction<Categories>, setHidden:SetStateFunction<boolean>, currentService:Categories}) => {
    const CategorySubmitHandler = () =>{
        setCurrentService({...currentService, childIsCategory:true, children:[...currentService.children,
          {id:currentService.id + 1,
            parent:{
                id:1,
                name:''
            },
            childIsService:false,
            childIsCategory:false,
            children:[]
          }
        ]})
        setHidden(true)
    }
  return (
    <div className='pop-up-container'>
        <p className='pop-up-header'>what do you want to create?</p>
        <div className='pop-up-buttons'>
        <button className='pop-up-button' onClick={CategorySubmitHandler}>Category</button>
        <button className='pop-up-button'>Service</button>
        </div>
    </div>
  )
}

export default CategoryPopUp