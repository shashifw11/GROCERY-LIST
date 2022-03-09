import {useState}  from "react" ;  
import {GroceryInput} from "./GroceryInput" ; 
import {GroceryList} from "./GroceryList" ; 
 import {v4 as uuid} from "uuid" ; 

export const Grocery = () =>{
    const [Grocery , setGrocery] = useState([])  ; 
        let payload ;
    const handleClick = (text) =>{ 
          payload = {
             title : text ,
             id : uuid() , 
          }  
          setGrocery([...Grocery , payload]) ; 
     } 
   
     const deleteId = (id) =>{
         for(var i = 0 ; i<Grocery.length ; i++){
             if(Grocery[i].id === id){ 
                Grocery.splice(i, 1)  
                setGrocery([...Grocery]) ;
            }
         }
      } 


    return <div>
        <GroceryInput  handleClick = {handleClick}  />
        {Grocery.map((e) =>{
           return  <GroceryList deleteId = {deleteId} key = {e.id} id = {e.id} title = {e.title}/>
        })}
    </div>
}