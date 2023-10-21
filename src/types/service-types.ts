export interface Category {
    id:number,
    name:string
    
}
export interface Service {
    id:number,
    name:string
    
}

export interface Categories{
    id:number,
    parent:Category | Service,
    children: Categories[] ,
    childIsService:boolean,
    childIsCategory:boolean,  
}


