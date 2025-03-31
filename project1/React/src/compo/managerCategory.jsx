import { useEffect, useState } from "react"
import { deleteCategory, getAllCategory, updateCategory } from "../axios/categoryaxios";
import { Link, useLocation, useNavigate } from "react-router-dom";


export const ManagerCategory = () => {
    const [SelectedCategoryId, setSelectedCategoryId] = useState();
    const [list, setlist] = useState([])
    const [newitem, setnewitem] = useState({
        "categoryId": SelectedCategoryId,
        "categoryName": ""
    })
    
    const ShowCategoryList = async () => {
        if (list.length == 0) {
            let y = (await getAllCategory());
            setlist(y.data)
        }
    }
    useEffect(() => {
        ShowCategoryList()
    }, [])

    const toUpdate=async(id)=>{
        debugger
        let x=await updateCategory (id,newitem)
        if(x.data){
            setlist(prevList => prevList.map(x => x.categoryId ===id 
                ?{...x,categoryName:newitem.categoryName} :x
            ))
        }
        else{
            alert('😥')
        }
    }

    return <>
        <table className="table table-striped container">
            <thead>
                <tr>
                    <th>id</th>
                    <th>שם</th>
                </tr>
            </thead>
            <tbody>
                {list.map((x, i) => <tr key={i}>
                    <td>{x.categoryId}</td>
                    <td>{x.categoryName}</td>
                    <td>
                        <button className="btn btn-secondary me-2 btn-sm" onClick={() => deleteCategory(x.categoryId).then(() => {
                            setlist(prevList => prevList.filter(game => game.categoryId !== x.categoryId))
                        })}>מחיקה</button>

                        <button className="btn btn-secondary me-2 btn-sm" onClick={() => setSelectedCategoryId(x.categoryId)}>עדכון</button>
                        {/* <Link to={`ManagerCategory/updateCategory${x.categoryId}`} >עידכון</Link> */}
                        {/* <button className="btn btn-secondary me-2 btn-sm" onClick={()=>navigate(`/ManagerCategory/updateCategory/${x.categoryId}`)}>עידכון</button>
                         <Link to={`ManagerCategory/updateCategory${x.categoryId}`} >עידכון</Link> */}

                        {SelectedCategoryId == x.categoryId && (<>
                            <input type="text" placeholder="nameOfCategoryCategory" name="idcategory" onChange={(e) => setnewitem({ ...newitem, categoryName:e.target.value, categoryId:x.categoryId })} />
                            <button onClick={()=>toUpdate(x.categoryId)}>save</button>
                        </>
                        )}

                      
                    </td>
                </tr>)}
            </tbody>
        </table>
    </>
}