import Login from './pages/LoginPage.jsx'
import SingUp from './pages/SingUpPage.jsx'
import Habits from './pages/HabitsPage.jsx';
import './App.css';
import { BrowserRouter ,Route, Routes} from "react-router-dom"
import { UserContextProvider } from './utils/Contexts/UserContext.js';
import { useState } from 'react';
function App() {
  const  [userData, setUserData]= useState({
   
    "name": "",
    "image": "",
    "email": "",
    "password": "",
    "token": "",
  })

  return (
    
        <BrowserRouter>
      <Routes>
        <Route path="/" element={
             
                 <Login 
                 userData={userData}
                 setUserData={setUserData}/>     
              
          }></Route>

          <Route path="/cadastro" element={
            <SingUp/>

          }></Route>

          <Route path="/habitos" element={
            <Habits userData={userData}/>
          }></Route>
      </Routes>  
      

    </BrowserRouter>
  
  
  )
}

export default App;
