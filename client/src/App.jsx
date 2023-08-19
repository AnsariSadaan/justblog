import {BrowserRouter,Routes,Route} from 'react-router-dom';  
import Navbar from "./components/Navbar"
import Home from "./components/views/Home";
import Register from "./components/views/Register";
import Login from "./components/views/Login";
import Write from './components/views/Write';
import Settings from './components/views/Settings'
import Single from './components/views/Single'



function App() {
  const user = false;
  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/register" element={user? <Home/> : <Register/>}></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/write" element={user ?  <Write /> : <Register/>}></Route>
        <Route path="/settings" element={user ?  <Settings/> : <Register/>}></Route>
        <Route path="/post/:postId" element={<Single/>}></Route>
      </Routes>
    </BrowserRouter>

      // <Navbar />
      // <Register />
    
  )
}

export default App
