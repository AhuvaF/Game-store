import { useParams } from "react-router-dom"

export const UpdateCategory=()=>{
    let id=useParams().id
    return <><h1>update Game</h1>
    
    <h2>{id}</h2>
    
    </> 
}