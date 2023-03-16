import {  useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from './Contexts/UserContext'
import Login from './Pages/LoginPage.jsx'
import SingUp from './Pages/SingUpPage.jsx'
import Habits from './Pages/HabitsPage.jsx';

function App() {
  const [user , setUser] = useState ({
    name:"", 
    token:"",

  })

  return (
    <div>

      <UserContext.Provider value = {{user, setUser}}>
         <BrowserRouter>
          <Routes>

            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<SingUp/>}/>
            <Route path="/habitos" element={<Habits/>}/>

          </Routes>
         </BrowserRouter>
      </UserContext.Provider>
   
    </div>
  )

}

export default App;
