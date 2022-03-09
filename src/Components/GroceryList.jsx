export const GroceryList = ({title,id, deleteId}) =>{
    return <div>
        {title}  
        <button onClick = {()=>{
            deleteId(id) ; 
        }}>X</button>
    </div>
}