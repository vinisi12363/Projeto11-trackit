import Login from './pages/LoginPage.jsx'
import SingUp from './pages/SingUpPage.jsx'
import Habits from './pages/HabitsPage.jsx';
import './App.css';
import { BrowserRouter ,Route, Routes, Link} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
              <Login/>
          }></Route>

          <Route path="/cadastro" element={
            <SingUp/>

          }></Route>

          <Route path="/habitos" element={
            <Habits/>
          }></Route>
      </Routes>  
      

    </BrowserRouter>
      
  )
}

export default App;
