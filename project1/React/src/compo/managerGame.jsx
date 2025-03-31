
import { useState, useEffect, useContext } from "react"
import { AddGame, deleteGame, getAllGames, UpdateGame } from "../axios/gameaxios";
import mycont from "../myContex";
import { useLocation } from "react-router-dom";

export const ManagerGame = () => {

    const setitem = useContext(mycont).setitem
    const location=useLocation()
    const [list, setlist] = useState([])
    const [add, setadd] = useState(false)
    const [selectedGameId, setSelectedGameId] = useState(null);
    const [newitem, setnewitem] = useState({
        "gameId": 0,
        "gameName": "",
        "gameCategory": 0,
        "gamePrice": 0,
        "gameImg": "",
        "gameAmount": 0
    })

    const doSomthig = async () => {
        if (list.length == 0) {
            let y = (await getAllGames()).data;
            setlist(y)
        }
    }
    useEffect(() => {
        doSomthig()
    },
        [])

    const AddTheNewItem = async () => {
        debugger
        let y = await AddGame(newitem)
        if (y.data) {
            setadd(false);
            setnewitem(newitem)
            setlist(prevList => [...prevList, newitem]);

            // alert("הצלחת")
        }
        else {
            alert("נכשלת")
        }
        setadd(false)
    }

    const saveUpdate = async (gameId) => {
        let y = await UpdateGame(gameId, newitem)
        debugger
        if (y.data) {
            setlist(prev=>prev.map(x=>x.gameId==gameId ?{...x,...newitem}:x))
      
            // alert("הצלחת")
            // selectedGameId(0)
        }
        else {
            alert("נכשלת")
        }
    }

    return <> <table className="table table-striped container">
        <thead>
            <tr>
                <th>id</th>
                <th>שם</th>
                <th>מחיר</th>
                <th> קטגוריה</th>
                <th>כמות</th>
                <th>תמונה</th>
            </tr>
        </thead>
        <tbody>
            {list.map((x, i) => {
                return (<tr key={i}>
                    <td>{x.gameId}</td>
                    <td>{x.gameName}</td>
                    <td> {x.gamePrice}₪ </td>
                    <td>{x.gameCategory}</td>
                    <td> {x.gameAmount} </td>
                    <td> {x.gameImg} </td>
                    <td> {x.nameGameCategory} </td>
                    <td>
                        {/* מחיקת משחק */}
                        <button className="btn btn-secondary me-2 btn-sm" onClick={() => deleteGame(x.gameId).then(() => {
                            setlist(prevList => prevList.filter(game => game.gameId !== x.gameId))
                        })}>מחיקה</button>

                        <button className="btn btn-secondary me-2 btn-sm" onClick={() => { setSelectedGameId(x.gameId) }}>עדכון</button>


                        {selectedGameId == x.gameId && (<>
                            <input type="text" placeholder={x.gameName} name="name" onChange={(e) => setnewitem({ ...newitem, gameName: e.target.value,gameId:selectedGameId})} />
                            <input type="number" placeholder={x.gameCategory} name="idcategory" onChange={(e) => setnewitem({ ...newitem, gameCategory: e.target.value })} />
                            <input type="price" placeholder={x.gamePrice} name="price" onChange={(e) => setnewitem({ ...newitem, gamePrice: e.target.value })} />
                            <input type="number" placeholder={x.gameAmount} name="amount" onChange={(e) => setnewitem({ ...newitem, gameAmount: e.target.value })} />
                            <input type="text" placeholder={x.gameImg} name="img" onChange={(e) => setnewitem({ ...newitem, gameImg: e.target.value })} />
                            <input type="button" value="שמור" onClick={() => saveUpdate(x.gameId)} />
                        </>
                        )}
                    </td>
                </tr>)
            })}
        </tbody>
    </table>

        <button className="btn btn-secondary me-2 btn-sm" onClick={() => setadd(true)}>הוספה</button>

        {add && <div style={{ marginBottom: '10%' }}>
            <input type="text" placeholder="name" name="name" onChange={(e) => setnewitem({ ...newitem, gameName: e.target.value }, { ...newitem, gameId: '0' })} />
            <input type="number" placeholder="idcategory" name="idcategory" onChange={(e) => setnewitem({ ...newitem, gameCategory: e.target.value })} />
            <input type="price" placeholder="price" name="price" onChange={(e) => setnewitem({ ...newitem, gamePrice: e.target.value })} />
            <input type="number" placeholder="amount" name="amount" onChange={(e) => setnewitem({ ...newitem, gameAmount: e.target.value })} />
            <input type="text" placeholder="img" name="img" onChange={(e) => setnewitem({ ...newitem, gameImg: e.target.value })} />
            <input type="button" value="שמור" onClick={() => AddTheNewItem()} />
        </div>
        }


    </>

}

