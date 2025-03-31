
import { useContext, useEffect, useState } from "react";
import { getAllGames } from "../axios/gameaxios";
import { useNavigate } from "react-router-dom";
import mycont from "../myContex";
export const Home = () => {
    const navigate = useNavigate();
    const setitem = useContext(mycont).setitem;
    let cart = useContext(mycont).cart;
    let setcart = useContext(mycont).setcart;

    const AddNum = (id) => {
        setlist(prev => prev.map(x => x.gameId === id ? { ...x, gameAmount: x.gameAmount + 1 } : x));
    }

    const DefNum = (id) => {
        setlist(prev => prev.map(x => x.gameId === id && x.gameAmount > 1 ? { ...x, gameAmount: x.gameAmount - 1 } : x));
    }

    const MoreDetailTofunc = (x) => {
        debugger
        setitem(x);
        navigate("/GameDetail");
    }

    const doSomthig = async () => {
        if (list.length === 0) {
            let y = (await getAllGames()).data;
            setlist(y.map(game => ({ ...game, gameAmount: 1 })));
        }
    }

    const [list, setlist] = useState([]);

    useEffect(() => {
        doSomthig();
    }, []);

    debugger
    
    const goToAdd = (x) => {
        const addtosal={
            gameId : x.gameId,
            gameName : x.gameName,
            gamePrice : x.gamePrice,
            gameAmount : x.gameAmount,
            finalPrice : x.gamePrice * x.gameAmount,
            gameImg : x.gameImg

        }
        setcart([...cart, addtosal])

    }
        

    return (
        <>
            <div className="container">
                <h1 className="my-4 text-center">חנות המשחקים שלנו</h1>
                <div className="row">
                    {list.map((x, i) => (
                        <div className="col-md-4 mb-4" key={i}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{x.gameName}</h5>
                                    <p className="card-text">מחיר: {x.gamePrice}₪</p>
{                               
                                    <img
                                        src={`https://localhost:7042/${x.gameImg}`}  className="img-thumbnail img-fluid"
                                        style={{ maxWidth: "100px", height: "auto" }}
                                    /> }
                            
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <button className="btn btn-secondary btn-sm me-2" onClick={() => AddNum(x.gameId)}>+</button>
                                            <button className="btn btn-secondary btn-sm me-2" onClick={() => DefNum(x.gameId)}>-</button>
                                            <span>{x.gameAmount}</span>
                                        </div>
                                        <button className="btn btn-outline-primary btn-sm" onClick={() => MoreDetailTofunc(x)}>פרטים נוספים</button>
                                    </div>
                                </div>
                                <div className="card-footer">
                                   <button className="btn btn-outline-success w-100" onClick={() => goToAdd(x)}>הוסף לסל</button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn btn-primary mt-4 w-100" onClick={() => navigate('/Cart')}>סל הקניות</button>
            </div>
        </>
    );
}
