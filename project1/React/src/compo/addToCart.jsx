import { useContext } from "react"
import mycont from "../myContex"
import { useParams } from "react-router-dom"
import { getAllGames } from "../axios/gameaxios"

export const AddToCart=()=>{

    let x=useContext(mycont).itemToAdd
    let cart=useContext(mycont).cart
    let setcart=useContext(mycont).setcart
    
        const addtosal={
            gameId : x.gameId,
            gameName : x.gameName,
            gamePrice : x.gamePrice,
            gameAmount : x.gameAmount,
            finalPrice : x.gamePrice * x.gameAmount,
            gameImg : x.gameImg
        }
        setcart([...cart, addtosal])

    // }
    return <></>

}