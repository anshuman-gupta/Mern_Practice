import Todo from "./components/Todo"
import Completed from "./components/Completed"
import Create from "./components/Create"
import Navbar from "./components/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignupComponent from "./components/SignupComponent"
import LoginComponent from "./components/LoginComponent"
import Homepage from "./components/Homepage"
import Profile from "./components/Profile"
import UpdatePassword from "./components/UpdatePassword"
function App(){
    return(<div>
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Homepage></Homepage>}></Route>
                <Route path="/login" element={<LoginComponent></LoginComponent>}> </Route>
                <Route path="/signup" element={<SignupComponent></SignupComponent>}></Route>
                <Route path= "/todo" element={<Todo></Todo>}></Route>
                <Route path="/profile" element={<Profile></Profile>}></Route>
                <Route path="/updatepassword" element={<UpdatePassword></UpdatePassword>}></Route>
            </Routes>
        </BrowserRouter>
    </div>)
}

export default App