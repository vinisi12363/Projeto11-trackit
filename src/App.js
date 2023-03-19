import {  useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from './Contexts/UserContext'
import { HabitContext } from './Contexts/HabitContext';
import {FormCardContext} from './Contexts/FormCardContext'
import Login from './Pages/LoginPage/LoginPage'
import SingUp from './Pages/SingUpPage/SingUpPage'
import Habits from './Pages/HabitPage/HabitsPage'
import Today from './Pages/TodayPage/TodayPage'
import History from './Pages/HistoryPage/HistoryPage'

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
              <Route path="/hoje" element ={<Today/>}/>
              <Route path="/historico" element={<History/>}/>
              
            </Routes>
          </BrowserRouter>
      </UserContext.Provider>
      </HabitContext.Provider>
      </FormCardContext.Provider>
    </div>
  )

}

export default App;
