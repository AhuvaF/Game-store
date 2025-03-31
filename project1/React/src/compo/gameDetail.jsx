import { useContext } from "react";
import mycont from "../myContex";
import { useParams } from "react-router-dom";

export const GameDetail = () => {

   let item = useContext(mycont).item
   let id=useParams().id

return <>
      <div className="card"  >
         <img className="card-img-top" style={{ width: '300px', marginLeft: '35%', marginTop: '5%' }} src={`https://localhost:7042/${item.gameImg}`} alt="Card image" />
         <div className="card-body">
            <h4 className="card-title">{item.gameName} {item.gameCode} {item.gamePrice}₪</h4>
            <p className="card-text">{item.nameGameCategory}</p>
         </div>
      </div>
      <div>
      </div>
   </>

}
