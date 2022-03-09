
import {useState} from "react" ; 

export const GroceryInput = ({handleClick}) =>{
    const [text , setText] = useState("") ; 
         return <div>
             <input onChange = {(e)=>{
                setText(e.target.value) ;
                // console.log(text)  ; 
             }}type = "text"/>
             <button onClick = {()=>{
                 handleClick(text)
             }}>Add Item</button>
             <button>Delete Item</button>
         </div>
}