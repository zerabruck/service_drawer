import React, { useState, FormEvent, useRef, useEffect } from 'react';
import { Categories } from '../types/service-types';
import CategoryPopUp from './CategoryPopUp.tsx';
import './style.css'
type SetStateFunction<T> = (prevState: T | ((prevState: T) => T)) => void;

const ParentComponent = ({categories, setParent}:{categories:Categories, setParent:SetStateFunction<Categories>}) => {
  const [currentService, setCurrentService] = useState<Categories>(categories)
  const [input, setInput] = useState<string>('')
  const [buttonDisplay, setButtonDisplay] = useState<boolean>(false)
  const [inputDisable,setInputDisable] = useState<boolean>(false)
  const [hidden, setHidden] = useState<boolean>(true)
  const inputRef = useRef<HTMLInputElement | null>(null)
  useEffect(()=>{
    inputRef?.current?.focus()
  },[])

  const submitHandler = (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    setCurrentService({...currentService, parent:{...currentService.parent, name:input}} )
    setButtonDisplay(true)
    setInputDisable(true)
  }
  
  const addService = () =>{
    if (!currentService.childIsCategory && !currentService.childIsCategory){
      setHidden(false)
    }
    else{
      setCurrentService({...currentService, children:[...currentService.children,
        {id:categories.id + 1,
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
  }
  const deleteService = () => {
    setCurrentService(categories)
    setInput('')
    setButtonDisplay(false)
    setInputDisable(false)

  }
  const editService = () =>{
    setInputDisable(false)
    setButtonDisplay(false)
    inputRef.current?.focus()
  }
  
  return (
    <div className='org-chart'>
   <ul>
     <li>
      <form onSubmit={submitHandler}>
      <div className='service-node-parent '>
        <input className={buttonDisplay? categories.id > 3 ?' default-node-color': `level-${categories.id} ` : ''}  disabled = {inputDisable} ref={inputRef} placeholder='Catagory name' onChange={e => setInput(e.target.value)} value={input} required/>
        {
          buttonDisplay ?<div className='service-node'>

        <svg onClick={editService} xmlns="http://www.w3.org/2000/svg"  width="12px" height="12px" viewBox="0 0 24 24" fill="#ffff">
        <path d="M20.1498 7.93997L8.27978 19.81C7.21978 20.88 4.04977 21.3699 3.32977
         20.6599C2.60977 19.9499 3.11978 16.78 4.17978 15.71L16.0498 3.84C16.5979 3.31801 
         17.3283 3.03097 18.0851 3.04019C18.842 3.04942 19.5652 3.35418 20.1004 3.88938C20.6356 
         4.42457 20.9403 5.14781 20.9496 5.90463C20.9588 6.66146 20.6718 7.39189 20.1498 7.93997V7.93997Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
      <svg onClick={addService} xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 24 24" fill="none">
        <g id="Edit / Add_Plus">
        <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
        <svg onClick={deleteService} id='delete-icon' xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 24 24" fill="none">
        <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#ffffff"/>
        </svg> 
          </div>
        :
        <div className='service-node'> 
        
        <svg onClick={deleteService} id='delete-icon-orange' xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 24 24" fill="none">
        <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#ffffff"/>
        </svg>
        <button type='submit' className='submit-icon service-node'>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="#ffff" version="1.1" id="Capa_1" width="12px" height="12px" viewBox="0 0 335.765 335.765">
          <g>
            <g>
              <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795   "/>
            </g>
          </g>
          </svg>
        </button>
        </div>


        }
        {
          !hidden && <CategoryPopUp currentService={currentService} setCurrentService={setCurrentService} setHidden={setHidden}/>
        }
        
        </div>

      </form>

          { currentService.children.length !== 0 &&
        <ul>
            {currentService.children.map((category:Categories )=>{
              return (
                <li key={category.id}>
                  {
                    <ParentComponent setParent = {setCurrentService} categories = {category}/>
                  }
                </li>
              )
            })}
        </ul>
          }
     </li>
   </ul> 
   </div>

        );
};

export default ParentComponent;
