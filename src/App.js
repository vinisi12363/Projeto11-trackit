import {  useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from './Contexts/UserContext'
import { HabitContext } from './Contexts/HabitContext';
import {FormCardContext} from './Contexts/FormCardContext'
import Login from './Pages/LoginPage.jsx'
import SingUp from './Pages/SingUpPage.jsx'
import Habits from './Pages/HabitsPage.jsx';

function App() {
  const [user , setUser] = useState ({
    image:"", 
    name:"",
    token:"",

  })

  const [habit, setHabit] = useState ([])
  const [isCanceled, setIsCanceled] = useState(false)
  return (
    <div>
      <FormCardContext.Provider value = {{isCanceled, setIsCanceled}}>
      <HabitContext.Provider value = {{habit , setHabit}}>
      <UserContext.Provider value = {{user, setUser}}>
          <BrowserRouter>
            <Routes>

              <Route path="/" element={<Login/>}/>
              <Route path="/cadastro" element={<SingUp/>}/>
              <Route path="/habitos" element={<Habits/>}/>

            </Routes>
          </BrowserRouter>
      </UserContext.Provider>
      </HabitContext.Provider>
      </FormCardContext.Provider>
    </div>
  )

}

export default App;
