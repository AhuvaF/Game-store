import logo from './logo.svg';
import './App.css';
import mycont, { MyProvider } from './myContex';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from './compo/menu';
import { Routing } from './compo/route';
import { useState } from 'react';

function App() {

  const [currentUser,setcurrentUser]=useState("לא מחובר")
  const [itemToAdd,setitemToAdd]=useState({})
  const [ifManager,setifManager]=useState(false)
  const [setMybuyId,MybuyId]=useState("")
  const [cart,setcart]=useState([])
  const [item,setitem]=useState({})
    const [userdtl,setuserdtl]=useState({
                  "custId": 0,
                  "custName": "null",
                  "custPassWord": "",
                  "custCreditDetails": ""
          })

const Store={
  currentUser:currentUser,
  setcurrentUser:setcurrentUser,
  ifManager:ifManager,
  setifManager:setifManager,
  cart:cart,
  setcart:setcart,
  item:item,
  setitem:setitem,
  userdtl:userdtl,
  setuserdtl:setuserdtl,
  itemToAdd:itemToAdd,
  setitemToAdd:setitemToAdd,
  setMybuyId:setMybuyId,
  MybuyId:MybuyId
}
  return (
    <div className="App">
      <MyProvider value={Store} >
      <BrowserRouter>
      <Menu></Menu>
      <Routing></Routing>
      </BrowserRouter>
      </MyProvider>
    </div>
  );
}

export default App;
